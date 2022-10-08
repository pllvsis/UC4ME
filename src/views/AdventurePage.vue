<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row class="ion-justify-content-evenly ion-padding">
                    <ion-card class="nav-card">
                        <ion-card-content>
                            {{ variableSomething }}
                        </ion-card-content>
                    </ion-card>
                </ion-row>

                <ion-row class="ion-justify-content-evenly ion-padding">
                    <ion-card class="nav-card">
                        <ion-card-content>
                            Right Turn
                        </ion-card-content>
                    </ion-card>
                </ion-row>

                <ion-row class="ion-justify-content-evenly ion-padding">
                    <ion-button aria-label="Start navigation" id="start-button" href="/adventure">Exit Navigation
                    </ion-button>
                </ion-row>

            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { IonPage, IonContent, IonCard, IonCardContent } from "@ionic/vue";
import { getLocationPosition } from "./LocationData";
import { setupConfig } from "@ionic/core";

export default defineComponent({
    name: "AdventurePage",
    components: { IonCard, IonCardContent, IonContent, IonPage },
    data() {
        return {
            variableSomething: ""
        }
    },
    setup() {
        getLocationPosition().then((locationData: any) => {
            console.log(locationData)
        });
    }
});
</script>

<style>
ion-grid {
    height: 100%;
    width: 90%;
    display: grid;
}
</style>
