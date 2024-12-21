<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Transport</ion-title>
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="flex flex-col h-full">
        <!-- Sidebar -->
       

        <!-- Map -->
        <div class="w-full mx-auto relative">
          <BaseMap ref="map" />
        </div>
        <div class=" bg-white shadow-lg p-4 mb-6">
          <h2 class="text-xl font-bold mb-4">Bus Routes</h2>
          <div class="space-y-4 mb-20">
            <div v-for="(route, key) in busRoutes" :key="key" 
                 class="rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
                 :class="{ 'bg-blue-50 border-blue-500': selectedRoute === key }"
                 @click="showRoute(key)">
              <div class="flex items-center mb-2">
                <ion-icon :icon="bus" class="text-2xl text-blue-600 mr-2"></ion-icon>
                <h3 class="text-lg font-semibold">Bus Line {{key.replace('line', '')}}</h3>
              </div>
              <div class="text-sm text-gray-600">
                <p class="mb-2">{{route.stations.length}} Stations</p>
                <div class="flex flex-col gap-1">
                  <div class="flex items-center">
                    <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Start: {{route.stations[0].name}}</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>End: {{route.stations[route.stations.length - 1].name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import BaseMap from "@/components/BaseMap.vue";
import { arrowBack, bus } from 'ionicons/icons';
import { busRoutes } from '@/data/busRoutes';

export default {
  name: "Transport",
  components: {
    BaseMap,
  },
  data() {
    return {
      selectedRoute: null,
      busRoutes,
      arrowBack,
      bus,
    };
  },
  methods: {
    showRoute(line) {
      this.selectedRoute = line;
      this.$refs.map.displayRoute(line);
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* Remove the existing styles as we're using Tailwind classes */
</style>
