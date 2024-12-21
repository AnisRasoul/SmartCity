<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Landmark Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content>
      <!-- Image Section -->
      <img
        :src="selectedLandmark?.image"
        :alt="selectedLandmark?.name"
        class="w-full h-[250px] object-cover rounded-b-xl shadow-lg"
      />

      <!-- Details Section -->
      <div class="p-6 space-y-4" v-if="selectedLandmark">
        <!-- Title and Rating -->
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-800">{{ selectedLandmark.name }}</h1>
          <div class="flex items-center text-yellow-500">
            <LucideStar class="w-5 h-5" />
            <span class="ml-1">{{ selectedLandmark.rating }}/5</span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-sm">{{ selectedLandmark.description }}</p>

        <!-- Location -->
        <div class="text-gray-700 flex items-center">
          <LucideMapPin class="w-4 h-4 mr-2" />
          <span><strong>Location:</strong> {{ selectedLandmark.location }}</span>
        </div>

        <!-- Opening Hours -->
        <div class="text-gray-700 flex items-center">
          <LucideClock class="w-4 h-4 mr-2" />
          <span><strong>Opening Hours:</strong> {{ selectedLandmark.openingHours }}</span>
        </div>

        <!-- Pricing Section -->
        <div class="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <LucideTicket class="w-4 h-4 mr-2 inline" />
            <strong>Entry Fee:</strong>
          </div>
          <div>
            <p class="text-lg font-bold text-gray-900">€{{ selectedLandmark.entryFee }}</p>
          </div>
        </div>
      </div>

      <!-- Book Button -->
      <ion-button
        expand="block"
        class="w-[90%] mx-auto mt-6 flex items-center justify-center"
        color="primary"
        @click="bookVisit"
      >
        <LucideTicket class="w-5 h-5 mr-2" />
        Book Visit
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
  IonButton,
} from "@ionic/vue";
import { Landmark } from "@/types/landmark";
import { LucideStar, LucideMapPin, LucideClock, LucideTicket } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const selectedLandmark = ref<Landmark | null>(null);

const mockLandmarks: Landmark[] = [
  {
        id: "1",
        name: "Eiffel Tower",
        location: "Champ de Mars, Paris",
        description: "Iconic iron lattice tower on the Champ de Mars",
        image: "https://picsum.photos/300/200",
        openingHours: "9:00 AM - 10:45 PM",
        entryFee: 26.10,
        rating: 4.5
    },
    {
        id: "2",
        name: "Statue of Liberty",
        location: "Liberty Island, New York",
        description: "Colossal neoclassical sculpture on Liberty Island",
        image: "https://picsum.photos/300/201",
        openingHours: "8:30 AM - 4:00 PM",
        entryFee: 18.50,
        rating: 4.7
    },
    {
        id: "3",
        name: "Great Wall of China",
        location: "Huairou District, China",
        description: "Ancient series of walls and fortifications",
        image: "https://picsum.photos/300/202",
        openingHours: "7:30 AM - 5:30 PM",
        entryFee: 40.00,
        rating: 4.6
    },
    {
        id: "4",
        name: "Colosseum",
        location: "Piazza del Colosseo, Rome",
        description: "Large amphitheatre in the center of Rome",
        image: "https://picsum.photos/300/203",
        openingHours: "8:30 AM - 7:00 PM",
        entryFee: 16.00,
        rating: 4.8
    },
    {
        id: "5",
        name: "Taj Mahal",
        location: "Agra, India",
        description: "Ivory-white marble mausoleum on the south bank of the Yamuna river",
        image: "https://picsum.photos/300/204",
        openingHours: "6:00 AM - 7:00 PM",
        entryFee: 14.00,
        rating: 4.9
    },
    {
        id: "6",
        name: "Sydney Opera House",
        location: "Bennelong Point, Sydney",
        description: "Multi-venue performing arts centre in Sydney",
        image: "https://picsum.photos/300/205",
        openingHours: "9:00 AM - 5:00 PM",
        entryFee: 37.00,
        rating: 4.7
    },
    {
        id: "7",
        name: "Machu Picchu",
        location: "Cusco Region, Peru",
        description: "15th-century Inca citadel located in the Eastern Cordillera of southern Peru",
        image: "https://picsum.photos/300/206",
        openingHours: "6:00 AM - 5:30 PM",
        entryFee: 45.00,
        rating: 4.8
    }
  ];

const bookVisit = () => {
  router.push(`/book-landmark/${selectedLandmark.value?.id}`);
};

onMounted(() => {
  const id = route.params.id as string;
  selectedLandmark.value = mockLandmarks.find((landmark) => landmark.id === id) ?? null;
});
</script>

<style scoped>
/* Add any specific custom styles here */
</style>
