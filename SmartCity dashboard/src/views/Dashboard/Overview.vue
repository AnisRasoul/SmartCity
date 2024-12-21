<script setup>
import ChartOne from '@/components/Charts/ChartOne.vue'
import ChartThree from '@/components/Charts/ChartThree.vue'
import ChartTwo from '@/components/Charts/ChartTwo.vue'
import TableOne from '@/components/Tables/TableOne.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const hostelData = ref([
  {
    name: 'Sunrise Hostel',
    visitors: 4.5,
    revenues: '8,768',
    bookings: 890,
    occupancy: 85
  },
  {
    name: 'Central Youth Hub',
    visitors: 3.8,
    revenues: '6,635',
    bookings: 767,
    occupancy: 78
  },
  {
    name: 'Backpackers Paradise',
    visitors: 3.2,
    revenues: '5,290',
    bookings: 620,
    occupancy: 72
  },
  {
    name: 'Student Lodge',
    visitors: 2.9,
    revenues: '4,580',
    bookings: 489,
    occupancy: 65
  },
  {
    name: 'City View Hostel',
    visitors: 2.5,
    revenues: '3,768',
    bookings: 390,
    occupancy: 60
  }
])


</script>

<template>
  <DefaultLayout>
    <div class="mt-4 md:flex justify-evenly mb-10">
      <ChartTwo />
      <ChartThree />
    </div>
       
        <TableOne :hostels="hostelData" />
   
  </DefaultLayout>
</template>
