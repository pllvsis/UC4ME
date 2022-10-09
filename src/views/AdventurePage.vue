<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Navigating</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row class="ion-padding">
          <ion-item class="navigation-instruction-card">
            <ion-label class="ion-text-wrap">Instruction</ion-label>
          </ion-item>
          <ion-item class="navigation-instruction-card">
            <ion-label class="ion-text-wrap">Instruction</ion-label>
          </ion-item>
        </ion-row>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button
            aria-label="Start navigation"
            id="start-button"
            href="/adventure"
            >Exit Navigation
          </ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "AdventurePage",
  components: { IonContent, IonPage },
  data() {
    return {
      variableSomething: "",
    };
  },
});
</script>

<style>
.navigation-instruction-card {
  width: 100%;
  font-size: 1.75em;
  text-align: center;
}
</style>
