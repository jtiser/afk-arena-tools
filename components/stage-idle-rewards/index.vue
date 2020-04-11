<template>
  <v-card>
    <v-card-title class="headline">Stage Idle Rewards</v-card-title>
    <v-card-text>
      <v-autocomplete
        :items="stageNames"
        v-model="currentStage"
        item-text="name"
        label="What stage are you on?"
      ></v-autocomplete>
      <v-datetime-picker label="What time did you start the stage?" v-model="datetime"></v-datetime-picker>
      <div v-show="stageChests">
        <p class="mb-0">When to defeat the stage and collect rewards:</p>
        <v-list dense>
          <v-list-item v-for="(chest, index) in stageChests" :key="index">
            <v-list-item-content>{{ chest.Content }}</v-list-item-content>
            <v-list-item-content
              class="align-end"
              :class="chest.displayClass"
            >{{ chest.NextClearTime }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";
import DatetimePicker from "vuetify-datetime-picker";
Vue.use(DatetimePicker);
import moment from "moment";

import jsonStages from "~/static/stages.json";
export default {
  name: "stage-idle-rewards",
  data() {
    return {
      currentStage: "",
      datetime: null,
      displayableItems: ["Mythic+ Stone", "Mythic Gear", "Faction Emblems"],
      storageKeys: {
        currentStage: "currentStage",
        stageCompletionDate: "stageCompletionDate"
      }
    };
  },
  mounted() {
    const stageFromLocalStorage = localStorage.getItem(
      this.storageKeys.currentStage
    );
    const dateFromLocalStorage = localStorage.getItem(
      this.storageKeys.stageCompletionDate
    );
    if (this.isValidStage(stageFromLocalStorage))
      this.currentStage = stageFromLocalStorage;
    if (this.isValidDate(dateFromLocalStorage))
      this.datetime = dateFromLocalStorage;
  },
  computed: {
    areValuesOk() {
      return !!this.currentStage && !!this.datetime;
    },
    stages() {
      return jsonStages;
    },
    stageNames() {
      return this.stages.map(x => {
        return { name: x.stage };
      });
    },
    stageChests() {
      if (!this.areValuesOk) return;
      const chests = [];

      this.stages
        .find(x => x.stage == this.currentStage)
        .chests.forEach(chest => {
          if (this.displayableItems.includes(chest.Content)) {
            let newChest = {
              Content: chest.Content,
              NextClearTime: this.calculateNextClearTime(chest.CD),
              CD: chest.CD
            };
            newChest.isRewardOk = !moment(
              newChest.NextClearTime,
              "YYYY-MM-DD HH:mm"
            ).isAfter();
            newChest.displayClass = newChest.isRewardOk
              ? "blue--text"
              : "red--text";
            chests.push(newChest);
          }
        });
      return chests;
    }
  },
  methods: {
    calculateNextClearTime(chestCd) {
      return moment(this.datetime)
        .add(chestCd * 0.51, "seconds")
        .format("YYYY-MM-DD HH:mm");
    },
    isValidStage(stage) {
      return this.stageNames.find(x => x.name === stage);
    },
    isValidDate(date) {
      return moment(date).isValid();
    }
  },
  watch: {
    currentStage(newVal) {
      if (this.isValidStage(newVal))
        localStorage.setItem(this.storageKeys.currentStage, newVal);
    },
    datetime(newVal) {
      if (!newVal) return;
      const date = moment(this.datetime).format("YYYY-MM-DD HH:mm");
      localStorage.setItem(this.storageKeys.stageCompletionDate, date);
    }
  }
};
</script>
