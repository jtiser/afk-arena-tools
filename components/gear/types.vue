<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="type in types" :key="type" cols="12" sm="4">
        <gear-items :type="type" :faction="faction"></gear-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GearItems from "./items";

export default {
  name: "gear-types",
  components: {
    GearItems
  },
  props: {
    faction: {
      type: String
    }
  },
  data() {
    return {
      types: ["intelligence", "agility", "strength"]
    };
  }
};
</script>
