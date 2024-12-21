<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableThree from '@/components/Tables/TableThree.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const clientsData = ref([
  {
    client: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 234-567-8901',
    status: 'Active'
  },
  {
    client: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+1 234-567-8902',
    status: 'Active'
  },
  {
    client: 'Alex Johnson',
    email: 'alex.j@email.com',
    phone: '+1 234-567-8903',
    status: 'Inactive'
  },
  {
    client: 'Sarah Wilson',
    email: 'sarah.w@email.com',
    phone: '+1 234-567-8904',
    status: 'Active'
  },
  {
    client: 'David Brown',
    email: 'david.b@email.com',
    phone: '+1 234-567-8905',
    status: 'Active'
  }
]);

const pageTitle = ref('Clients');

const customHeaders = [
  { label: 'Client Name', minWidth: '220px' },
  { label: 'Email', minWidth: '150px' },
  { label: 'Phone', minWidth: '120px' },
  { label: 'Status', minWidth: '120px' },
];
</script>

<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <div class="flex flex-col gap-10">
      <div class="col-span-12 xl:col-span-8">
        <table class="w-full table-auto">
            <thead>
                <tr class="bg-gray-2 text-left dark:bg-meta-4">
                    <th v-for="(header, index) in customHeaders" 
                            :key="index" 
                            class="py-4 px-4 font-medium text-black dark:text-white"
                            :class="header.minWidth ? { [`min-w-[${header.minWidth}]`]: true } : {}"
                            :style="header.minWidth ? { minWidth: header.minWidth } : {}">
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in clientsData" :key="index">
                    <td class="py-5 px-4 pl-9 xl:pl-11">
                        <h5 class="font-medium text-black dark:text-white">{{ item.client }}</h5>
                    </td>
                    <td class="py-5 px-4">
                        <p class="text-black dark:text-white">{{ item.email }}</p>
                    </td>
                    <td class="py-5 px-4">
                        <p class="text-black dark:text-white">{{ item.phone }}</p>
                    </td>
                    <td class="py-5 px-4">
                        <p class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                            :class="{
                                'bg-success text-success': item.status === 'Active',
                                'bg-danger text-danger': item.status === 'Inactive'
                            }">
                            {{ item.status }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
</style>
