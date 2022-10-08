<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-title size="large">Routes</ion-title>

      <ion-grid class="ion-align-item-center">
        <ion-list id="route-list">
          <li v-for="route in routes" :key="route.routeName" class="route-item">
            <ion-row class="ion-justify-content-evenly ion-padding text-wrap">
              <ion-button class="route-button">
                <ion-label text-wrap>
                  {{ route.routeName }}
                </ion-label>
              </ion-button>
            </ion-row>
          </li>
        </ion-list>
      </ion-grid> </ion-content
    >>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "RoutesListPage",
  components: { IonContent, IonPage, IonButton },
  data() {
    return {
      routes: [
        { routeName: "Home" },
        { routeName: "Work" },
        { routeName: "Campus" },
        { routeName: "Buckeye Corner" },
        { routeName: "Union Square" },
      ],
    };
  },
  methods: {},
});
</script>
