<template>
  <v-card class="pa-2" outlined tile>
    <v-card-text class="text--primary text-center">
      <img :height="typeSize" :src="require(`assets/type/${type}.png`)" />
    </v-card-text>

    <v-row no-gutters v-for="item in items" :key="item.name">
      <template>
        <v-col cols="5" class="text-center">
          <img :height="itemSize" :src="require(`assets/items/${type}/${item.name}_9.jpg`)" />
        </v-col>
        <v-col cols="5" class="text-left">
          <v-text-field
            type="number"
            min="0"
            max="25"
            clearable
            single-line
            dense
            append-outer-icon="mdi-plus"
          ></v-text-field>
        </v-col>
      </template>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "gear-items",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      typeSize: "40px",
      itemSize: "45px",
      items: [
        { name: "weapon" },
        { name: "head" },
        { name: "body" },
        { name: "boots" }
      ]
    };
  }
};
</script>
