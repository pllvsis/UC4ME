<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Stairs Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid class="ion-align-item-center">
      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button @click="setDirection('ascending')">Stairs Up</ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button @click="setDirection('descending')">Stairs Down</ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-item>
          <ion-label>Number of stairs</ion-label>
          <ion-input
            type="number"
            placeholder="0"
            clear-input
            autocapitalize="words"
            :autofocus="true"
            v-model="stairsCount"
            value="10"
          >
          </ion-input>
        </ion-item>
      </ion-row>

      <ion-row class="ion-justify-content-evenly no-padding">
        <ion-col col-6 ion-no-padding>
          <ion-button ion-button @click="closeModal">Cancel</ion-button>
        </ion-col>
        <ion-col col-6 ion-no-padding>
          <ion-button
            ion-button
            @click="createFinalInstruction"
            :disabled="!optionSelected"
            >Add</ion-button
          >
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script lang="ts">
import { addInstructionToRoute } from "@/data/NavigatorFunctions";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StairsModal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonInput },
  data() {
    return {
      instruction: "Stairs",
      stairsCount: 10,
      direction: "",
      context: "",
      optionSelected: false,
    };
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },
  methods: {
    setDirection(direction: string) {
      this.direction = direction;
      this.optionSelected = true;
    },
    createFinalInstruction() {
      if (this.optionSelected) {
        this.context =
          this.direction + " with " + this.stairsCount.toString() + " steps";
        this.addInstruction();
        this.closeModal();
      }
    },
    addInstruction() {
      this.optionSelected = false;
      this.context = "";
      console.log(addInstructionToRoute(this.instruction, this.context));
    },
  },
});
</script>
