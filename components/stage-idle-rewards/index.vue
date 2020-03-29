<template>
  <v-card>
    <v-card-title class="headline">Stage Idle Rewards</v-card-title>
    <v-card-text>
      <p>Todo</p>
      <v-form>
        <v-autocomplete
          :items="stages"
          v-model="stage"
          item-text="name"
          label="What stage are you on?"
        ></v-autocomplete>
        <v-datetime-picker
          label="What time did you start the stage?"
          v-model="datetime"
        >
        </v-datetime-picker>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";
import DatetimePicker from "vuetify-datetime-picker";
Vue.use(DatetimePicker);

import { stages as stageList } from "@/business";
export default {
  name: "stage-idle-rewards",
  data() {
    return {
      stages: stageList,
      stage: null,
      datetime: null
    };
  },
  computed: {
    areValuesOk() {
      return !!this.stage && !!this.datetime;
    }
  },
  watch: {
    stage() {
      if (this.areValuesOk) console.log("updated stage");
    },
    datetime() {
      if (this.areValuesOk) console.log("updated datetime");
    }
  }
};
</script>
