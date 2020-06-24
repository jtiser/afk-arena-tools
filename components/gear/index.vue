<template>
  <v-card class="mx-auto">
    <v-tabs v-model="tab" grow>
      <v-tab v-for="faction in factions" :key="faction">
        <img
          :height="tabSize"
          :width="tabSize"
          ma-1
          :src="require(`assets/faction/${faction}.png`)"
        />
      </v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="faction in factions" :key="faction">
          <types></types>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import Types from "./types";

export default {
  name: "gear-card",
  components: {
    Types
  },
  data() {
    return {
      tab: null,
      tabSize: "30px",
      factions: [
        "lightbearer",
        "mauler",
        "wilder",
        "graveborn",
        "celestial",
        "hypogean",
        "dimensional"
      ]
    };
  }
};
</script>
