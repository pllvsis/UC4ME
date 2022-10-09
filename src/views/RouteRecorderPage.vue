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
            <ion-button
              class="navigation-instruction-button"
              @click="setInstruction('turn left')"
            >
              Turn Left
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              class="navigation-instruction-button"
              @click="setInstruction('turn right')"
            >
              Turn Right
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button
              class="navigation-instruction-button"
              @click="setInstruction('step up')"
            >
              Step Up
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              class="navigation-instruction-button"
              @click="setInstruction('step down')"
            >
              Step Down
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button
              id="stairs-button"
              class="navigation-instruction-button"
              @click="setInstructionAndModal('stairs')"
              @addContext="addContext"
            >
              Stairs
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              id="door-button"
              class="navigation-instruction-button"
              @click="openDoorModal"
            >
              Door
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-evenly ion-padding">
          <ion-col>
            <ion-button
              id="street-button"
              class="navigation-instruction-button"
              @click="openStreetModal"
            >
              Street
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-button
            class="ion-justify-content-evenly ion-padding add-navigation-button"
          >
            Add
          </ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController,
} from "@ionic/vue";
import StairsModal from "./navigator-modals/StairsModal.vue";
import DoorModal from "./navigator-modals/DoorModal.vue";
import StreetModal from "./navigator-modals/StreetModal.vue";
import { addInstructionToRoute } from "@/data/NavigatorFunctions";

export default defineComponent({
  name: "RouteRecorderPage",
  components: { IonToolbar, IonTitle, IonContent, IonPage },

  setup() {
    const openStairsModal = async () => {
      const modal = await modalController.create({
        component: StairsModal,
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

    return { openStairsModal, openDoorModal, openStreetModal };
  },

  data() {
    return {
      instruction: "",
      context: "",
    };
  },

  methods: {
    setInstruction(instructionString: string) {
      this.instruction = instructionString;
      console.log(instructionString)
    },
    setInstructionAndModal(instructionString: string) {
      this.setInstruction(instructionString);
      this.openStairsModal();
    },
    addInstruction(instructionString: string, context: Array<string> = []) {
      console.log(addInstructionToRoute(instructionString, context));
    },
    addContext(context: string) {
      console.log(context);
    },
  },
});
</script>

<style>
.navigation-instruction-button,
.add-navigation-button {
  font-size: 1em;
}
</style>
