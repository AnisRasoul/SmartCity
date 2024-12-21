<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableThree from '@/components/Tables/TableThree.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
const reservationsData = ref([
  { 
    client: 'John Smith',
    reservationId: 'RSV-001',
    date: 'Feb 15, 2024',
    status: 'Confirmed'
  },
  {
    client: 'Maria Garcia',
    reservationId: 'RSV-002',
    date: 'Feb 16, 2024',
    status: 'Pending'
  },
  {
    client: 'Alex Johnson',
    reservationId: 'RSV-003',
    date: 'Feb 16, 2024',
    status: 'Cancelled'
  },
  {
    client: 'Sarah Wilson',
    reservationId: 'RSV-004',
    date: 'Feb 17, 2024',
    status: 'Confirmed'
  },
  {
    client: 'David Brown',
    reservationId: 'RSV-005',
    date: 'Feb 18, 2024',
    status: 'Pending'
  },
  {
    client: 'Emma Davis',
    reservationId: 'RSV-006',
    date: 'Feb 19, 2024',
    status: 'Confirmed'
  }
])
const pageTitle = ref('Reservations')

const customHeaders = [
  { label: 'Client Name', minWidth: '220px' },
  { label: 'Reservation ID', minWidth: '150px' },
  { label: 'Reservation Date', minWidth: '120px' },
  { label: 'Status', minWidth: '120px' },
  { label: 'Actions' }
]

const updateReservationStatus = ({ reservationId, newStatus }: { reservationId: string, newStatus: string }) => {
  const reservation = reservationsData.value.find(r => r.reservationId === reservationId)
  if (reservation) {
    reservation.status = newStatus
  }
}
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <div class="col-span-12 xl:col-span-8">
        <TableThree 
          :reservations="reservationsData" 
          :headers="customHeaders"
          @update-status="updateReservationStatus"
        />
      </div>
    </div>
  </DefaultLayout>
</template>
