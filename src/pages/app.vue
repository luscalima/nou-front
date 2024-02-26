<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { PhMonitor, PhUsers, PhGauge, PhGithubLogo } from '@phosphor-icons/vue'
</script>

<template>
  <header class="flex items-center w-full h-20 py-4 md:px-6 border-b border-slate-200">
    <div class="w-40">
      <h1 class="text-2xl font-bold">nou</h1>
    </div>
    <NavigationMenu class="max-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <router-link to="/app/monitors" :class="navigationMenuTriggerStyle()">
              <PhMonitor :size="24" />
              Monitors
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <router-link to="/app/contacts" :class="navigationMenuTriggerStyle()">
              <PhUsers :size="24" />
              Contacts
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <router-link to="/app/dashboard" :class="navigationMenuTriggerStyle()">
              <PhGauge :size="24" />
              Dashboard
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div class="flex justify-end w-40">
      <a target="_blank" href="https://github.com/luscalima/nou">
        <PhGithubLogo size="24" />
      </a>
    </div>
  </header>
  <main class="container py-4">
    <router-view />
  </main>
</template>
