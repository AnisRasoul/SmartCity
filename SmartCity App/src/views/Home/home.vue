<!-- page tae les oberges -->
<template>
  <ion-page>
    <ion-content >
      <h1 class="text-center mt-20 text-3xl font-bold">Discover our houses</h1>
      <p class="text-center w-[60%] mx-auto">find hostels will that makes your trip better </p>
      <div class="flex flex-col">
        <home-card
          class="text-white"
          v-for="item in homeItems"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :image="item.image"
          :description="item.description"
          :distance="item.distance"
          :stars="item.rating"
          :reviews="item.reviews"
          :price="item.price"
          @card-click="navigateToDetails"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import HomeCard from "@/components/homeCard.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { Hostel } from "@/types/hostel";
import { mockHostels } from "@/data/mockHostels";

const router = useRouter();
const homeItems = ref<Hostel[]>(mockHostels);

const navigateToDetails = (id: number) => {
  router.push(`/home/${id}`);
};
</script>
