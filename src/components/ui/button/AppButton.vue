<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  as?: string
  class?: HTMLAttributes['class']
  rounded?: boolean
  icon?: Component
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  rounded: false
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size, rounded }), props.class)"
  >
    <slot />
    <template v-if="icon">
      <icon size="16" />
    </template>
  </Primitive>
</template>
