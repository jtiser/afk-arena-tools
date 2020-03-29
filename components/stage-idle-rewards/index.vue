<template>
  <v-card>
    <v-card-title class="headline">Stage Idle Rewards</v-card-title>
    <v-card-text>
      <v-autocomplete
        :items="stages"
        v-model="stage"
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

import business from "@/business";
export default {
  name: "stage-idle-rewards",
  data() {
    return {
      stages: business.stages,
      stage: "",
      datetime: null,
      displayableItems: ["Mythic+ Stone", "Mythic Gear", "Faction Emblems"]
    };
  },
  computed: {
    areValuesOk() {
      return !!this.stage && !!this.datetime;
    },
    stageChests() {
      if (!this.areValuesOk) return;
      const chests = [];

      business.rewards
        .find(x => x.stage == this.stage)
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
    }
  }
};
</script>
