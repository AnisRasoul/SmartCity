<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const blacklistData = ref([
  {
    client: 'James Wilson',
    email: 'james.w@email.com',
    reason: 'Payment Fraud',
    blockedDate: '2023-10-15'
  },
  {
    client: 'Emma Davis',
    email: 'emma.d@email.com',
    reason: 'Multiple Violations',
    blockedDate: '2023-10-12'
  },
  {
    client: 'Michael Chen',
    email: 'michael.c@email.com',
    reason: 'Security Breach',
    blockedDate: '2023-10-10'
  },
  {
    client: 'Sophia Brown',
    email: 'sophia.b@email.com',
    reason: 'Spamming',
    blockedDate: '2023-10-08'
  },
  {
    client: 'Liam Johnson',
    email: 'liam.j@email.com',
    reason: 'Harassment',
    blockedDate: '2023-10-05'
  },
  {
    client: 'Olivia Martinez',
    email: 'olivia.m@email.com',
    reason: 'Account Sharing',
    blockedDate: '2023-10-03'
  }
])

const pageTitle = ref('Blacklisted Users')

const customHeaders = [
  { label: 'Client Name', minWidth: '220px' },
  { label: 'Email', minWidth: '150px' },
  { label: 'Reason', minWidth: '150px' },
  { label: 'Blocked Date', minWidth: '120px' }
]
</script>

<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <div class="flex flex-col gap-10">
      <div class="col-span-12 xl:col-span-8">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-2 text-left dark:bg-meta-4">
              <th
                v-for="(header, index) in customHeaders"
                :key="index"
                class="py-4 px-4 font-medium text-black dark:text-white"
                :class="header.minWidth ? { [`min-w-[${header.minWidth}]`]: true } : {}"
                :style="header.minWidth ? { minWidth: header.minWidth } : {}"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in blacklistData" :key="index">
              <td class="py-5 px-4 pl-9 xl:pl-11">
                <h5 class="font-medium text-black dark:text-white">{{ item.client }}</h5>
              </td>
              <td class="py-5 px-4">
                <p class="text-black dark:text-white">{{ item.email }}</p>
              </td>
              <td class="py-5 px-4">
                <p class="text-danger">{{ item.reason }}</p>
              </td>
              <td class="py-5 px-4">
                <p class="text-black dark:text-white">{{ item.blockedDate }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss" scoped></style>
