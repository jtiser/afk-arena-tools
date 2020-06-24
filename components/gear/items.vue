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
            v-model="item.count"
            type="number"
            min="0"
            max="25"
            clearable
            single-line
            dense
            append-outer-icon="mdi-plus"
            @click:append-outer="addGear(item)"
            @click:clear="resetGear(item)"
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
    },
    faction: {
      type: String
    }
  },
  data() {
    return {
      gearCount: 0,
      typeSize: "40px",
      itemSize: "45px",
      items: [
        { name: "weapon", count: null },
        { name: "head", count: null },
        { name: "body", count: null },
        { name: "boots", count: null }
      ],
      storageKeys: {
        items: "items"
      }
    };
  },
  mounted() {
    try {
      const itemsFromLocalStorage = localStorage.getItem(
        this.currentStorageKey
      );
      if (itemsFromLocalStorage != null) {
        const obj = JSON.parse(itemsFromLocalStorage);
        this.items = obj;
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    addGear(item) {
      item.count++;
    },
    resetGear(item) {
      item.count = 0;
    }
  },
  computed: {
    currentStorageKey() {
      return `${this.storageKeys.items}_${this.faction}_${this.type}`;
    }
  },
  watch: {
    items: {
      deep: true,
      handler: function(newVal) {
        localStorage.setItem(this.currentStorageKey, JSON.stringify(newVal));
      }
    }
  }
};
</script>
