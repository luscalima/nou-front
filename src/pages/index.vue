<script setup lang="ts">
import { AppButton } from '@/components/ui/button'
import { PhGithubLogo } from '@phosphor-icons/vue'
</script>

<template>
  <header
    class="flex items-center justify-between w-full h-20 py-4 md:px-6 border-b border-slate-200"
  >
    <h1 class="text-2xl font-bold">nou</h1>
    <a target="_blank" href="https://github.com/luscalima/nou">
      <PhGithubLogo size="24" />
    </a>
  </header>
  <div class="flex items-center min-h-[calc(100vh-7.5rem)] px-4 text-center md:px-6">
    <div class="space-y-6 mx-auto">
      <div class="space-y-2">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">The Monitoring App</h1>
        <p class="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Real-time insights into your systems. Monitor performance, track errors, and stay
          informed.
        </p>
      </div>
      <router-link to="/app" v-slot="{ navigate }" custom>
        <AppButton size="lg" rounded @click="navigate">Get Started</AppButton>
      </router-link>
    </div>
  </div>
  <footer>
    <div class="flex items-center justify-center w-full h-10 py-4 border-t border-slate-100">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Made with <span class="text-red-500">♥</span> by
        <a target="_blank" href="https://github.com/luscalima" class="font-semibold">Lusca Lima</a>
      </p>
    </div>
  </footer>
</template>
