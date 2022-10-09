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
              autofocus="true"
            ></ion-input>
          </ion-item>
        </ion-row>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button
            aria-label="Start recording"
            id="start-button"
            href="route_recorder"
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
} from "@ionic/vue";

export default defineComponent({
  name: "NavigatorHome",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      routes: ["Work", "Home", "Buckeye Donuts", "Ohio Union"],
    };
  },
});
</script>
