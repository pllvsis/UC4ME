<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">
        <ion-title aria-label="App name: You see for me"> UC-4-ME </ion-title>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button aria-label="Start navigation" id="start-button" href="/adventure">Start</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button size="large" class="ion-text-wrap" aria-label="View routes" id="routes-button" href="/routes_list">View Routes</ion-button>
          <ion-button size="large" aria-label="Open navigator mode" id="navigator-button" href="/navigator">Navigator Mode</ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
  components: { IonContent, IonPage, IonButton },
});
</script>

<style>
ion-grid {
  height: 100%;
  display: grid;
}

ion-title {
  text-align: center;
  font-size: 2em;
}

ion-button {
  font-size: 1.75em;
  word-wrap: break-word;
}

ion-button#start-button {
  --border-radius: 100% !important;
  height: 300px;
  width: 300px;
}

ion-button#routes-button,
ion-button#navigator-button {
  width: calc(100vw - 64px);
  height: auto;
  min-height: 50px;
}
</style>
