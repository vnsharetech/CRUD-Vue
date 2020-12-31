<template>
  <v-list>
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="menuActionClick(item.link)"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LeftNav",
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", link: "/" },
      { text: "About Us", icon: "mdi-information", link: "/about" },
      { text: "Products", icon: "mdi-package-variant-closed", link: "" },
      { text: "Contact Us", icon: "mdi-contacts", link: "" },
    ],
  }),
  methods: {
    menuActionClick(link: any) {
      this.$router.push(link);
    },
  },
});
</script>
