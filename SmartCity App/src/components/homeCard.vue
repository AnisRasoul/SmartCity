<template>
  <ion-card
    @click="handleCardClick"
    class="flex flex-col shadow-lg rounded-lg border hover:shadow-xl transition-all"
  >
    <!-- Image -->
    <img :src="image" class="w-full h-[180px] object-cover rounded-t-lg" :alt="title" />

    <!-- Card Content -->
    <div class="p-4 flex flex-col gap-2">
      <!-- Title -->
      <ion-card-title class="font-bold text-lg text-gray-800">{{ title }}</ion-card-title>

      <!-- Distance and Price -->
      <div class="flex justify-between text-sm text-gray-500">
        <p class="flex items-center"><MapPin class="mr-3"/>{{ distance }} km away</p>
        <p class="font-semibold text-gray-900">{{ price }} DZD / per day</p>
      </div>

      <!-- Stars -->
      <div class="flex items-center text-yellow-500 my-3">
        <span class="ml-2 text-gray-600 text-xs flex items-center"><Star class="mr-2"/> ({{ reviews }})</span>
      </div>

      <!-- Book Now Button -->
      <button
        @click.stop="handleCardClick"
        class="bg-blue-600 text-white py-2 mt-2 rounded-lg text-center hover:bg-blue-700 transition flex justify-center items-center"
      >
        Book Now <Bookmark class="ml-3"/>
      </button>
    </div>
  </ion-card>
</template>

<script>

import { MapPin, Bookmark, Star } from 'lucide-vue-next';
export default {
  components: {

    MapPin, Bookmark, Star
  },
  name: "HomeCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleCardClick() {
      this.$emit("card-click", this.id);
    },
  },
};
</script>

<style scoped>
/* Tailwind is already used; additional scoped styles can go here if needed */
</style>
