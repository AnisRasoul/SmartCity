<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />

    <div class="flex flex-col gap-10">
      <div class="col-span-12 xl:col-span-8">
        <TableThree :reservations="employeeData" :headers="customHeaders" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableThree from '@/components/Tables/TableThree.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const employeeData = ref([
  {
    client: 'John Smith',
    reservationId: 'EMP-001',
    date: 'Jan 10, 2024',
    status: 'Active'
  },
  {
    client: 'Sarah Johnson',
    reservationId: 'EMP-002',
    date: 'Jan 15, 2024',
    status: 'Active'
  },
  {
    client: 'Mike Brown',
    reservationId: 'EMP-003',
    date: 'Jan 20, 2024',
    status: 'Inactive'
  },
  {
    client: 'Emily Davis',
    reservationId: 'EMP-004',
    date: 'Feb 01, 2024',
    status: 'Active'
  },
  {
    client: 'Alex Wilson',
    reservationId: 'EMP-005',
    date: 'Feb 05, 2024',
    status: 'Pending'
  }
])

const pageTitle = ref('Employees')

const customHeaders = [
  { label: 'Employee Name', minWidth: '220px' },
  { label: 'Employee ID', minWidth: '150px' },
  { label: 'Join Date', minWidth: '120px' },
  { label: 'Status', minWidth: '120px' },
  { label: 'Actions' }
]
</script>

<style lang="scss" scoped>

</style>