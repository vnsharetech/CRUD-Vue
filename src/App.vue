<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="BBkids Nha Trang"
          class="shrink mr-2"
          contain
          src="images/bbkids.png"
          transition="scale-transition"
          width="80"
        />
        <span class="ml-2">BB Kids Nha Trang</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="#" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-card elevation="2" class="left-nav pt-3">
        <LeftNav />
      </v-card>
      <v-row no-gutters>
        <v-col class="col-12 pt-7 main-content">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LeftNav from "./components/LeftNav.vue";
import "./sass/main.scss";

export default Vue.extend({
  name: "App",

  components: {
    LeftNav,
  },

  data: () => ({
    //
  }),
});
</script>