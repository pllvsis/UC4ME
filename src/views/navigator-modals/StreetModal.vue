<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>Street Details</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-grid class="ion-align-item-center">
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button>Traffic from Left</ion-button>
            </ion-row>
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button>Traffic from Right</ion-button>
            </ion-row>
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button>Two Way Traffic</ion-button>
            </ion-row>

            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-col col-6>
                    <ion-button ion-button @click="closeModal">Cancel
                    </ion-button>
                </ion-col>
                <ion-col col-6>
                    <ion-button ion-button @click="confirmModal">Add
                    </ion-button>
                </ion-col>
            </ion-row>

        </ion-grid>

    </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, modalController } from "@ionic/vue";
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
    }

    return { closeModal, confirmModal };
    }
});
</script>

<style>
ion-button {
    font-size: 1.5em;
    height: 120px;
    width: 275px;
}

nav-button {
    width: 30%;
}
</style>