<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Route Recorder</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Turn Left
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Turn Right
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Step Up
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Step Down
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Stairs
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="navigation-instruction-button">
              Door
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonToolbar, IonTitle, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "RouteRecorderPage",
  components: { IonToolbar, IonTitle, IonContent, IonPage },
});
</script>

<style>
.navigation-instruction-button {
  font-size: 1em;
  width: 100%;
  min-height: 100px;
}
</style>
