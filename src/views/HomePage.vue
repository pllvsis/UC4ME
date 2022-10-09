<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">
        <ion-title aria-label="App name: You see for me"> UC-4-ME </ion-title>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button aria-label="Start navigation" class="round-button" href="/adventure">Start</ion-button>
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
import { createRouteList } from "@/data/Route";

// import { takePicture } from "@/data/Camera";

export default defineComponent({
  name: "HomePage",
  components: { IonContent, IonPage, IonButton },
  created() {
    createRouteList();
  },
  data() {
    return {
      favouriteRoute: "HackOHIO"
    }
  },
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
  color: black;
}

ion-button {
  font-size: 1.75em;
  word-wrap: break-word;
  width: 100%;
  min-height: 100px;
  --background: white; 
}

ion-button.round-button {
  --border-radius: 100% !important;
  height: 300px;
  width: 300px;
  --border-style: solid;
}

ion-button#routes-button,
ion-button#navigator-button {
  width: calc(100vw - 64px);
  height: auto;
  min-height: 50px;
  border-style: solid;
}
</style>
