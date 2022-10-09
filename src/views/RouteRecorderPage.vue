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
            <ion-button id="stairs-button" class="navigation-instruction-button" @click="openStairsModal">
              Stairs
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button id="door-button" class="navigation-instruction-button" @click="openDoorModal">
              Door
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button id="street-button" class="navigation-instruction-button" @click="openStreetModal">
              Street
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
            <ion-button class="ion-justify-content-evenly ion-padding add-navigation-button ">
              Add
            </ion-button>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonToolbar, IonTitle, IonContent, modalController } from "@ionic/vue";
import StairsModal from "./navigator-modals/StairsModal.vue";
import DoorModal from "./navigator-modals/DoorModal.vue";
import StreetModal from "./navigator-modals/StreetModal.vue";

export default defineComponent({
  name: "RouteRecorderPage",
  components: { IonToolbar, IonTitle, IonContent, IonPage },

  setup() {
    const openStairsModal = async () => {
      const modal = await modalController.create({
        component: StairsModal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    const openDoorModal = async () => {
      const modal = await modalController.create({
        component: DoorModal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    const openStreetModal = async () => {
      const modal = await modalController.create({
        component: StreetModal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return { openStairsModal, openDoorModal,  openStreetModal};
  }

});
</script>

<style>
.navigation-instruction-button {
  font-size: 1em;
  width: 100%;
  height: 80px;
}

.add-navigation-button {
  font-size: 1em;
  width: 100%;
  min-height: 80px;
}
</style>
