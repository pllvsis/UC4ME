<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Street Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-button @click="setStreetType('traffic from left side')">Traffic from Left</ion-button>
      <ion-button @click="setStreetType('traffic from right side')">Traffic from Right</ion-button>
      <ion-button @click="setStreetType('traffic from both sides')">Two Way Traffic</ion-button>

      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button ion-button @click="closeModal">Cancel</ion-button>
        <ion-button ion-button @click="createFinalInstruction">Add</ion-button>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StreetModal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  data() {
    return {
      streetType: "",
      instruction: "Street crossing",
      context: "",
    };
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },
  methods: {
    setStreetType(streetType: string) {
      this.streetType = streetType;
    },
    createFinalInstruction() {
      this.context = this.streetType;
      this.addInstruction();
      this.closeModal();
    },
    addInstruction() {
      console.log(addInstructionToRoute(this.instruction, this.context));
    },
  },
});
</script>
