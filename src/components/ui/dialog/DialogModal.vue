<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '.'
import { AppButton } from '../button'

withDefaults(
  defineProps<{
    title: string
    description?: string
    triggerText?: string
  }>(),
  {
    triggerText: 'Open Modal'
  }
)
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot name="trigger">
        <AppButton>
          {{ triggerText }}
        </AppButton>
      </slot>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {{ title }}
        </DialogTitle>
        <DialogDescription v-if="description">
          {{ description }}
        </DialogDescription>
      </DialogHeader>
      <slot name="content" />
      <DialogFooter>
        <slot name="actions">
          <DialogTrigger as-child>
            <AppButton>OK</AppButton>
          </DialogTrigger>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
