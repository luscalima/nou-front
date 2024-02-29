<script setup lang="ts" generic="Data, Value">
import { computed } from 'vue'
import { FlexRender, getCoreRowModel, useVueTable, type ColumnDef } from '@tanstack/vue-table'
import {
  Table as AppTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { PhCircleNotch } from '@phosphor-icons/vue'

const props = withDefaults(
  defineProps<{
    columns: ColumnDef<Data, Value>[]
    data?: Data[]
    loading: boolean
  }>(),
  {
    data: () => [],
    loading: false
  }
)

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel()
})

const hasAnyData = computed(() => table.getRowModel().rows?.length > 0 && !props.loading)
</script>

<template>
  <div>
    <div class="mb-4">
      <slot name="actions"> </slot>
    </div>
    <div class="border rounded-md">
      <AppTable>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="hasAnyData">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </TableCell>
            </TableRow>
          </template>
          <TableRow v-else>
            <TableCell v-if="loading" :colspan="columns.length" class="h-24">
              <PhCircleNotch size="24" class="animate-spin mx-auto" />
            </TableCell>
            <TableCell v-else :colspan="columns.length" class="h-24 text-center">
              No data.
            </TableCell>
          </TableRow>
        </TableBody>
      </AppTable>
    </div>
  </div>
</template>
