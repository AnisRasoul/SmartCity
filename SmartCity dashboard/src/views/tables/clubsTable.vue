<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableThree from '@/components/Tables/TableThree.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const clubsData = ref([
  {
    client: 'Fitness First',
    reservationId: 'CLB-001',
    date: 'Feb 15, 2024',
    status: 'Active'
  },
  {
    client: 'Sports Center',
    reservationId: 'CLB-002',
    date: 'Feb 16, 2024',
    status: 'Pending'
  },
  {
    client: 'Yoga Studio',
    reservationId: 'CLB-003',
    date: 'Feb 16, 2024',
    status: 'Inactive'
  },
  {
    client: 'Swimming Club',
    reservationId: 'CLB-004',
    date: 'Feb 17, 2024',
    status: 'Active'
  },
  {
    client: 'Tennis Academy',
    reservationId: 'CLB-005',
    date: 'Feb 18, 2024',
    status: 'Pending'
  },
  {
    client: 'Dance Studio',
    reservationId: 'CLB-006',
    date: 'Feb 19, 2024',
    status: 'Active'
  }
])

const pageTitle = ref('Clubs')

const customHeaders = [
  { label: 'Club Name', minWidth: '220px' },
  { label: 'Club ID', minWidth: '150px' },
  { label: 'Created Date', minWidth: '120px' },
  { label: 'Status', minWidth: '120px' },
  { label: 'Actions' }
]
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <div class="col-span-12 xl:col-span-8">
        <TableThree :reservations="clubsData" :headers="customHeaders" />
      </div>
    </div>
  </DefaultLayout>
</template>
