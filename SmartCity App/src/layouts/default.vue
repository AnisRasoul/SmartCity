<template>
  <ion-app>
    <!-- Menu Sidebar -->
    <ion-menu side="start" content-id="main-content" class="menu-custom">
      <ion-header>
        <ion-toolbar class="menu-header">
          <!-- User Avatar Section -->
          <div class="flex flex-col items-center py-6">
            <img
              src="https://avatar.iran.liara.run/public/2"
              alt="User Avatar"
              class="w-20 h-20 rounded-full"
            />
            <h3 class="text-lg font-semibold mt-4">Anis Rasoul</h3>
            <p class="text-gray-500 text-sm">anisrasoul@gmail.com</p>
          </div>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <!-- Menu Items -->
        <div class="space-y-4 px-4">
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideList class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Hostels</span>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideMap class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Tourism</span>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideAward class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Agencies Offers</span>
            </div>
            <span
              class="text-white text-xs font-bold px-2 py-1 rounded-full bg-red-500"
            >
              2
            </span>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideCalendar class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Event & Activities</span>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideBus class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Transport</span>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideBell class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Notifications</span>
            </div>
            <span
              class="text-white text-xs font-bold px-2 py-1 rounded-full bg-red-500"
            >
              9
            </span>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideBookmark class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Saved</span>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <LucideSettings class="w-6 h-6 text-gray-600" />
              <span class="text-gray-800 font-medium">Settings</span>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-menu>

    <!-- Main Content Area -->
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <!-- Back and Menu Buttons -->
          <ion-buttons slot="start">
            <div @click="router.back()" class="cursor-pointer">
              <LucideChevronLeft class="w-8 h-8" />
            </div>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <!-- Placeholder for Main Content -->
        <ion-router-outlet></ion-router-outlet>
        <Menu/>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu.vue";
import {
  IonApp,
  IonPage,
  IonMenu,
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  LucideList,
  LucideMap,
  LucideAward,
  LucideCalendar,
  LucideBus,
  LucideBell,
  LucideBookmark,
  LucideSettings,
  LucideChevronLeft,
} from "lucide-vue-next";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped>

</style>
