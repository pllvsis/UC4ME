<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Route Creator</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-item>
            <ion-label>Route Name</ion-label>
            <ion-input
              type="text"
              placeholder="Work"
              clear-input
              autocapitalize="words"
              :autofocus="true"
              v-model="routeName"
            ></ion-input>
          </ion-item>
        </ion-row>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button
            aria-label="Start recording"
            class="round-button"
            @click="startRecordingRoute"
          >
            <ion-label text-wrap>Start Recording Route</ion-label>
          </ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
} from "@ionic/vue";
import router from "@/router";
import {startRecordRoute} from "@/data/NavigatorFunctions"

export default defineComponent({
  name: "NavigatorHome",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },
  data() {
    return {
      routes: ["Work", "Home", "Buckeye Donuts", "Ohio Union"],
      routeName: ""
    };
  },
  methods: {
    startRecordingRoute() {
      console.log(startRecordRoute(this.routeName))
      router.push("route_recorder")
    },
  }
});
</script>

<style>
ion-title {
  color: white;
}
</style>
