<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">

      <ion-grid class="ion-align-item-center">
        
      <ion-title size="large">Routes</ion-title>
        <ion-list id="route-list">
            <li v-for="route in routes" :key="route.routeName" class="route-item" >
            <div class="button-container">
              <ion-row class="ion-justify-content-evenly ion-padding">
                <ion-button class="route-button" href="/adventure">
                  <ion-label text-wrap>
                    {{ route.routeName }}
                  </ion-label>
                </ion-button>
              </ion-row>
            </div>
        </li>
        </ion-list>
      </ion-grid> </ion-content>
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
        { routeName: "★ Home" },
        { routeName: "Work" },
        { routeName: "Union Square" },
        { routeName: "HackOHIO" },
      ],
    };
  },
  methods: {},
});
</script>

<style>

#route-list li {
  list-style: none;
}
ion-button {
  font-size: 1.7em;
  height: 100px;
  width: 275px;
}

button-container {
  width: 90%;
}
</style>
