<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-title size="large">UC-4-ME</ion-title>

      <ion-grid class="ion-align-item-center">
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button id="start-button">Start</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button id="routes-button">Routes</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button id="navigator-button">Navigator</ion-button>
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
ion-title {
  text-align: center;
  
}

ion-button {
  font-size: 1.75em;
}

ion-button#start-button {
  --border-radius: 100% !important;
  height: 300px;
  width: 300px;
}

ion-button#routes-button,
ion-button#navigator-button {
  width: 90%;
  height: 50px;
}
</style>
