<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Street Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-button>Traffic from Left</ion-button>
      <ion-button>Traffic from Right</ion-button>
      <ion-button>Two Way Traffic</ion-button>

      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button ion-button @click="closeModal">Cancel</ion-button>
        <ion-button ion-button @click="confirmModal">Add</ion-button>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script lang="ts">
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
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };
    const confirmModal = () => {
      modalController.dismiss();
      //TODO GET CONFIRMATION SAVED
    };

    return { closeModal, confirmModal };
  },
});
</script>
