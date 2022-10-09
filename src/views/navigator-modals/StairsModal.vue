<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>Stairs Details</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-grid class="ion-align-item-center">
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button>Stairs Up</ion-button>
            </ion-row>
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button>Stairs Down</ion-button>
            </ion-row>
            <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-item>
                    <ion-label>Number of stairs</ion-label>
                    <ion-input type="text" placeholder="0" clear-input autocapitalize="words" autofocus="true">
                    </ion-input>
                </ion-item>
            </ion-row>

            <ion-footer>
                <ion-toolbar>
                    <ion-row class="ion-justify-content-evenly ion-padding">
                        <ion-col col-6>
                            <button ion-button @click="closeModal">Cancel
                            </button>
                        </ion-col>
                        <ion-col col-6>
                            <button ion-button @click="confirmModal">Add
                            </button>
                        </ion-col>
                    </ion-row>
                </ion-toolbar>
            </ion-footer>

        </ion-grid>

    </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, modalController } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "StairsModal",
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
    font-size: 1.7em;
    height: 120px;
    width: 275px;
}

nav-button {
    width: 30%;
}
</style>