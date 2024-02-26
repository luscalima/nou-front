<script setup lang="ts">
import { h } from 'vue'
import { type ColumnDef, DataTable } from '@/components/ui/data-table'

interface Monitor {
  id: string
  name: string
  url: string
  interval: number
}

const monitorsColumns: ColumnDef<Monitor>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => h('a', null, row.getValue('name'))
  },
  {
    accessorKey: 'url',
    header: 'URL',
    cell: ({ row }) => h('a', { href: row.getValue('url') }, row.getValue('url'))
  },
  {
    accessorKey: 'interval',
    header: 'Interval',
    cell: ({ row }) => h('span', null, row.getValue('interval'))
  }
]

const monitorsData: Monitor[] = [
  {
    id: '1',
    name: 'Google',
    url: 'https://google.com',
    interval: 60
  },
  {
    id: '2',
    name: 'Facebook',
    url: 'https://facebook.com',
    interval: 120
  }
]
</script>

<template>
  <div>
    <DataTable :columns="monitorsColumns" :data="monitorsData" />
  </div>
</template>
