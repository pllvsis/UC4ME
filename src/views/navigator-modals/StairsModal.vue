<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Stairs Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid class="ion-align-item-center">
      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button @click="addContext('up')">Stairs Up</ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-evenly ion-padding">
        <ion-button @click="addContext('down')">Stairs Down</ion-button>
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
          >
          </ion-input>
        </ion-item>
      </ion-row>

      <ion-row class="ion-justify-content-evenly no-padding">
        <ion-col col-6 ion-no-padding>
          <ion-button ion-button @click="closeModal">Cancel </ion-button>
        </ion-col>
        <ion-col col-6 ion-no-padding>
          <ion-button ion-button @click="sendContext">Add </ion-button>
        </ion-col>
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
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StairsModal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonInput },

  data() {
    return {
      context: "",
      stairsCount: 0,
    };
  },

  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },

  methods: {
    addContext(contextItem: string) {
      this.context = contextItem;
    },
    sendContext() {
      this.context =
        this.context + " " + this.stairsCount.toString() + " steps";
      this.$emit("addContext", this.context);
      this.closeModal();
    },
  },
});
</script>
