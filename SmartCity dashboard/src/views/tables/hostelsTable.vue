<script setup lang="ts">
import { ref } from 'vue';
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const hostelsData = ref([
  {
    name: 'Sunset Hostel',
    location: 'Downtown',
    capacity: '50 beds',
    status: 'Open',
  },
  {
    name: 'City Center Hostel',
    location: 'Central District',
    capacity: '75 beds',
    status: 'Open',
  },
  {
    name: 'Backpackers Haven',
    location: 'West Side',
    capacity: '40 beds',
    status: 'Renovating',
  },
  {
    name: 'Student Lodge',
    location: 'University Area',
    capacity: '100 beds',
    status: 'Open',
  },
  {
    name: 'Travelers Rest',
    location: 'East Side',
    capacity: '60 beds',
    status: 'Full',
  },
]);

const pageTitle = ref('Hostels');

const tableHeaders = [
  { label: 'Hostel Name', minWidth: '220px' },
  { label: 'Location', minWidth: '150px' },
  { label: 'Capacity', minWidth: '120px' },
  { label: 'Status', minWidth: '120px' },
  { label: 'Actions' },
];
</script>

<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <div class="flex flex-col gap-10">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-2 text-left dark:bg-meta-4">
            <th
              v-for="(header, index) in tableHeaders"
              :key="index"
              class="py-4 px-4 font-medium text-black dark:text-white"
              :style="header.minWidth ? { minWidth: header.minWidth } : {}"
            >
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hostel, index) in hostelsData" :key="index">
            <td class="py-5 px-4">{{ hostel.name }}</td>
            <td class="py-5 px-4">{{ hostel.location }}</td>
            <td class="py-5 px-4">{{ hostel.capacity }}</td>
            <td class="py-5 px-4">
              <span
                class="inline-flex rounded-full py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-success text-success': hostel.status === 'Open',
                  'bg-warning text-warning': hostel.status === 'Renovating',
                  'bg-danger text-danger': hostel.status === 'Full',
                }"
              >
                {{ hostel.status }}
              </span>
            </td>
            <td class="py-5 px-4">
              <div class="flex items-center space-x-3.5">
                <button class="hover:text-primary">
                  <svg
                    class="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 14.82c-5.57 0-8.33-5.32-8.43-5.54-.08-.17-.08-.39 0-.56.11-.23 2.87-5.52 8.43-5.52 5.57 0 8.33 5.32 8.43 5.54.08.17.08.39 0 .56-.11.23-2.87 5.52-8.43 5.52z"
                    />
                    <path
                      d="M9 11.39c-1.32 0-2.39-1.07-2.39-2.39 0-1.32 1.07-2.39 2.39-2.39 1.32 0 2.39 1.07 2.39 2.39 0 1.32-1.07 2.39-2.39 2.39z"
                    />
                  </svg>
                </button>
                <button class="hover:text-primary">
                  <svg
                    class="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.75 2.48h-2.16V1.996a1.517 1.517 0 00-1.44-1.44h-2.16a1.517 1.517 0 00-1.44 1.44V2.48H4.22c-.815 0-1.49.675-1.49 1.49v.843c0 .62.365 1.126.9 1.35l.45 9.309c.056 1.153 1.013 2.053 2.166 2.053h5.457c1.153 0 2.109-.9 2.166-2.053l.478-9.338c.534-.224.9-.758.9-1.35V3.97a1.49 1.49 0 00-1.49-1.49z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<style  scoped>
.bg-success {
  background-color: #d4edda;
  color: #155724;
}
.bg-warning {
  background-color: #fff3cd;
  color: #856404;
}
.bg-danger {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
