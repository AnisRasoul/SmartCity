<template>
  <ion-card
    @click="handleCardClick"
    class="flex flex-col shadow-lg rounded-lg border hover:shadow-xl transition-all"
  >
    <img :src="image" class="w-full h-[180px] object-cover rounded-t-lg" :alt="title" />

    <div class="p-4 flex flex-col gap-2">
      <ion-card-title class="font-bold text-lg text-gray-800">{{ title }}</ion-card-title>
      
      <p class="text-sm text-gray-500">{{ description }}</p>

      <div class="flex items-center text-yellow-500 my-3">
        <span class="text-gray-600 text-xs flex items-center">
          <Star class="mr-2"/> {{ rating }}/5
        </span>
      </div>

      <button
        @click.stop="handleCardClick"
        class="bg-blue-600 text-white py-2 mt-2 rounded-lg text-center hover:bg-blue-700 transition flex justify-center items-center"
      >
        View Details <ArrowRight class="ml-3"/>
      </button>
    </div>
  </ion-card>
</template>

<script>
import { Star, ArrowRight } from 'lucide-vue-next';

export default {
  name: "LandCard",
  components: {
    Star,
    ArrowRight
  },
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
    description: {
      type: String,
      required: true,
    },
    rating: {
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
/* Tailwind is already used; no additional styles needed */
</style>
