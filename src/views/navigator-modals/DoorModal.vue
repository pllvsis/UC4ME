<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Door Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row class="ion-justify-content-evenly no-padding">
        <ion-col>
          <ion-button
            class="navigation-instruction-button"
            @click="setDoorDirection('push door')"
          >
            Push Door
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button
            class="navigation-instruction-button"
            @click="setDoorDirection('pull door')"
          >
            Pull Door
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-evenly no-padding">
        <ion-col col-6 ion-no-padding>
          <ion-label wrap-text>
            <ion-button
              class="navigation-instruction-button"
              @click="setHandleType('handle on the left')"
            >
              Handle on Left
            </ion-button>
          </ion-label>
        </ion-col>
        <ion-col col-6 ion-no-padding>
          <ion-button
            class="navigation-instruction-button"
            @click="setHandleType('handle on the right')"
          >
            Handle on Right
          </ion-button>
        </ion-col>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoorModal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  data() {
    return {
      doorType: "",
      handleType: "",
      instruction: "Door",
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
    setDoorDirection(doorType: string) {
      this.doorType = doorType;
      if (this.handleType !== "") {
        this.optionSelected = true;
      }
    },
    setHandleType(handleType: string) {
      this.handleType = handleType;
      if (this.doorType !== "") {
        this.optionSelected = true;
      }
    },
    createFinalInstruction() {
      if (this.optionSelected) {
        this.context = this.doorType + " with handle on " + this.handleType;
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
