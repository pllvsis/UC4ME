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
            <ion-label class="ion-text-wrap">{{ nextStep }}</ion-label>
          </ion-item>
          <ion-item class="navigation-instruction-card">
            <ion-label class="ion-text-wrap">{{ nextNextStep }}</ion-label>
          </ion-item>
        </ion-row>

        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-button aria-label="Stop navigation" class="round-button" href="/"
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
import { getNextTwoSteps, startNavigation } from "@/data/AdventurerFunctions";

export default defineComponent({
  name: "AdventurePage",
  components: { IonContent, IonPage },
  data() {
    return {
      routeData: {},
      routeName: "HackOHIO",
      stepCount: 0,
      nextSteps: [""],
      nextStep: "",
      nextNextStep: "",
    };
  },
  mounted() {
    this.startNavigation();
  },
  methods: {
    async startNavigation() {
      await startNavigation(this.routeName);
      this.nextSteps = getNextTwoSteps();
      this.updateNextSteps();
    },
    updateNextSteps() {
      this.nextStep = this.nextSteps[0];
      this.nextNextStep = this.nextSteps[1];
    },
  },
});
</script>

<style>

ion-title {
  color: white;
}

.navigation-instruction-card {
  width: 100%;
  font-size: 1.75em;
  text-align: center;
}
</style>
