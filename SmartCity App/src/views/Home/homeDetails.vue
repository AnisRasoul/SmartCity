<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
      
        </ion-buttons>
        <ion-title>Hostel Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content>
      <!-- Image Section -->
      <img
        :src="selectedItem?.image"
        :alt="selectedItem?.name"
        class="w-full h-[250px] object-cover rounded-b-xl shadow-lg"
      />

      <!-- Details Section -->
      <div class="p-6 space-y-4">
        <!-- Title and Rating -->
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-800">{{ selectedItem?.name }}</h1>
          <div class="flex items-center text-yellow-500">
            <LucideStar class="w-5 h-5" />
            <span class="ml-1">{{ selectedItem?.rating }}</span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-sm">{{ selectedItem?.description }}</p>

        <!-- Location -->
        <div class="text-gray-700 flex items-center">
          <LucideMapPin class="w-4 h-4 mr-2" />
          <span><strong>Location:</strong> {{ selectedItem?.address }}</span>
        </div>

        <!-- Rooms -->
        <div class="text-gray-700 flex items-center">
          <LucideHome class="w-4 h-4 mr-2" />
          <span><strong>Rooms:</strong> {{ selectedItem?.rooms }}</span>
        </div>

        <!-- Pricing Section -->
        <div class="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <LucideCalendar class="w-4 h-4 mr-2 inline" />
            <strong>Dates:</strong>
            <p>Oct 12th → Oct 14th (3 nights)</p>
          </div>
          <div>
            <p class="text-red-500 line-through text-sm">12000 DZD</p>
            <p class="text-lg font-bold text-gray-900">9000 DZD</p>
          </div>
        </div>
      </div>

      <!-- Reserve Button -->
      <ion-button
        expand="block"
        class="w-[90%] mx-auto mt-6 flex items-center justify-center"
        color="primary"
        @click="reserveItem"
      >
        <LucideShoppingCart class="w-5 h-5 mr-2" />
        Reserve Now
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { Hostel } from "@/types/hostel";
import { mockHostels } from "@/data/mockHostels";

// Import Lucide Vue icons
import { LucideChevronLeft, LucideStar, LucideMapPin, LucideHome, LucideCalendar, LucideShoppingCart } from "lucide-vue-next";

const route = useRoute();
const selectedItem = ref<Hostel | null>(null);
const router = useRouter();

const reserveItem = () => {
  router.push(`/reserve/${selectedItem.value?.id}`);
};

onMounted(() => {
  const id = route.params.id as string;
  selectedItem.value = mockHostels.find((item) => item.id === id) ?? null;
});
</script>

<style scoped>
/* Add any specific custom styles here */
</style>
