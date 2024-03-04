<script setup lang="ts">
import { h, reactive } from 'vue'
import { type ColumnDef, DataTable } from '@/components/ui/data-table'
import { AppButton } from '@/components/ui/button'
import { PhPlus } from '@phosphor-icons/vue'
import { DialogModal } from '@/components/ui/dialog'
import { AppInput } from '@/components/ui/input'
import { useFetch, type List } from '@/composables/fetch'
import { useQuery, useMutation } from '@tanstack/vue-query'

interface Contact {
  id: string
  name: string
  email: string
}

const fetcher = useFetch('/contacts')
const {
  data: contacts,
  isLoading,
  refetch
} = useQuery<List<Contact>>({
  queryKey: ['contacts'],
  queryFn: fetcher.get
})
const { mutate } = useMutation({
  mutationFn: (contact: Contact) => fetcher.post(contact),
  onSuccess: () => {
    clearContact()
    refetch()
  }
})

const monitorsColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => h('a', null, row.getValue('name'))
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => h('a', { href: row.getValue('email') }, row.getValue('email'))
  }
]

const state = reactive({
  contact: {
    name: '',
    email: ''
  }
})

function handleSaveContact() {
  mutate(state.contact as Contact)
}

function clearContact() {
  state.contact = {
    name: '',
    email: ''
  }
}
</script>

<template>
  <div>
    <DataTable :columns="monitorsColumns" :data="contacts?.data" :loading="isLoading">
      <template #actions>
        <DialogModal
          title="Add Contact"
          description="A contact can receive notifications about an application that is being monitored by a monitor"
        >
          <template #trigger>
            <AppButton :icon="PhPlus">Add Contact</AppButton>
          </template>
          <template #content>
            <div class="grid gap-4 py-4">
              <AppInput id="name" v-model="state.contact.name" label="Name" />
              <AppInput id="url" v-model="state.contact.email" type="email" label="Email" />
            </div>
          </template>
          <template #actions>
            <AppButton variant="outline">Cancel</AppButton>
            <AppButton @click="handleSaveContact">Save</AppButton>
          </template>
        </DialogModal>
      </template>
    </DataTable>
  </div>
</template>
