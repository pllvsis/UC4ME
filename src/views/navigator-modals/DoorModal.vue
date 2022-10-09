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
                    <ion-button class="navigation-instruction-button">
                        Push Door
                    </ion-button>
                </ion-col>
                <ion-col>
                    <ion-button class="navigation-instruction-button">
                        Pull Door
                    </ion-button>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-evenly no-padding">
                <ion-col col-6 ion-no-padding>
                    <ion-label wrap-text>
                        <ion-button class="navigation-instruction-button">
                            Handle on Left
                        </ion-button>
                    </ion-label>
                </ion-col>
                <ion-col col-6 ion-no-padding>
                    <ion-button class="navigation-instruction-button">
                        Handle on Right
                    </ion-button>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-evenly no-padding">
                <ion-col col-6 ion-no-padding>
                    <ion-button ion-button @click="closeModal">Cancel
                    </ion-button>
                </ion-col>
                <ion-col col-6 ion-no-padding>
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
    name: "DoorModal",
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
.button-bar {
    width: 40%;
}
</style>