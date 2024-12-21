<!-- page tae les oberges -->
<template>
  <ion-page>
    <ion-content>
      <div class="flex justify-center pt-4 uppercase ">
        <ion-button
          class="flex items-center gap-2"
          @click="navigateToRecommendations"
          fill="solid"
          color="primary"
        >
          <Navigation class="w-5 h-5 mr-4" />
          Smart Travel
        </ion-button>
      </div>
      <h1 class="text-center mt-4 text-3xl font-bold">Discover Landmarks</h1>
      <p class="text-center w-[60%] mx-auto">Explore amazing landmarks in our city</p>
      <div class="flex flex-col">
        <land-card
          class="text-white"
          v-for="landmark in landmarks"
          :key="landmark.id"
          :id="landmark.id"
          :title="landmark.name"
          :image="landmark.image"
          :description="landmark.description"
          :rating="landmark.rating"
          @card-click="navigateToDetails"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { Navigation } from 'lucide-vue-next';
import { ref } from "vue";
import { useRouter } from "vue-router";
import LandCard from "@/components/landCard.vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { Landmark } from "@/types/landmark";

const router = useRouter();

const landmarks = ref<Landmark[]>([
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
]);

const navigateToDetails = (id: number) => {
  router.push(`/landmarks/${id}`);
};

const navigateToRecommendations = () => {
  router.push('/recommendations');
};
</script>
