<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
    <!-- Top System Header & Controls Bar -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <!-- Logo & Title -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-xl shadow-md text-white">
            🌱
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h1 class="text-base font-black text-slate-900 tracking-tight">{{ t.appName }}</h1>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">
                ABC Demo
              </span>
            </div>
            <p class="text-[11px] text-slate-500 font-medium">{{ t.appSubtitle }}</p>
          </div>
        </div>

        <!-- Role / View Mode Switcher -->
        <div class="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
          <button
            @click="currentRole = 'beneficiary'"
            :class="currentRole === 'beneficiary' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
          >
            <span>📱</span>
            <span>{{ t.beneficiaryView }}</span>
          </button>
          <button
            @click="currentRole = 'staff'"
            :class="currentRole === 'staff' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
          >
            <span>💻</span>
            <span>{{ t.staffView }}</span>
          </button>
        </div>

        <!-- Utility Controls: Offline Simulator & Language Switcher -->
        <div class="flex items-center space-x-2.5">
          <!-- Offline / Online Simulator Button -->
          <button
            @click="isOnline = !isOnline"
            :class="isOnline ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-400 animate-pulse'"
            class="flex items-center space-x-1.5 text-xs font-extrabold px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-sm"
            :title="isOnline ? 'Simulate losing network connection' : 'Simulate restoring network connection'"
          >
            <span class="w-2 h-2 rounded-full" :class="isOnline ? 'bg-emerald-500' : 'bg-amber-500'"></span>
            <span>{{ isOnline ? 'Online' : 'Offline' }}</span>
          </button>

          <!-- Sync Trigger Button if pending -->
          <button
            v-if="pendingSyncCount > 0"
            @click="syncToCloud"
            class="flex items-center space-x-1 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black px-2.5 py-1.5 rounded-xl shadow cursor-pointer transition-all"
            title="Sync pending transactions to cloud"
          >
            <span>🔄</span>
            <span>Sync ({{ pendingSyncCount }})</span>
          </button>

          <!-- Language Selector Dropdown -->
          <div class="relative">
            <select
              :value="currentLang"
              @change="onLanguageChange"
              class="text-xs font-bold bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl px-2.5 py-1.5 text-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="en">🇬🇧 English</option>
              <option value="am">🇪🇹 አማርኛ (Amharic)</option>
              <option value="om">🇪🇹 Afaan Oromo</option>
              <option value="ti">🇪🇹 ትግርኛ (Tigrinya)</option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <!-- Global Toast / Sync Notification -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="syncNotification"
        class="fixed top-18 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center space-x-3 text-xs font-semibold"
      >
        <span class="text-emerald-400 text-base">✨</span>
        <span>{{ syncNotification }}</span>
      </div>
    </transition>

    <!-- Main Content Area -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
      <!-- BENEFICIARY VIEW -->
      <div v-if="currentRole === 'beneficiary'">
        <!-- Mobile Frame Toggle & Presentation Info -->
        <div class="flex items-center justify-between max-w-xl mx-auto mb-3 px-1 text-xs text-slate-500">
          <div class="flex items-center space-x-1 font-medium">
            <span>👤 Mode: Beneficiary Micro-Business User</span>
          </div>
          <button
            @click="usePhoneFrame = !usePhoneFrame"
            class="text-emerald-700 hover:text-emerald-800 font-bold flex items-center space-x-1 cursor-pointer"
          >
            <span>📱</span>
            <span>{{ usePhoneFrame ? 'Standard View' : 'Phone Frame View' }}</span>
          </button>
        </div>

        <!-- Phone Shell Container (Simulated Device or Fluid Container) -->
        <div v-if="usePhoneFrame" class="max-w-[400px] mx-auto bg-slate-900 p-3 rounded-[40px] shadow-2xl border-4 border-slate-700 my-2">
          <!-- Speaker & Camera notch -->
          <div class="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div class="w-2.5 h-2.5 rounded-full bg-slate-900 mr-2"></div>
            <div class="w-10 h-1 rounded-full bg-slate-700"></div>
          </div>

          <div class="bg-slate-50 rounded-[30px] p-3 max-h-[750px] overflow-y-auto">
            <BeneficiaryView />
          </div>

          <!-- Phone Home Indicator Bar -->
          <div class="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2.5"></div>
        </div>

        <div v-else>
          <BeneficiaryView />
        </div>
      </div>

      <!-- STAFF MONITORING DASHBOARD VIEW -->
      <div v-else>
        <StaffDashboard />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 ABC Company Livelihoods Monitoring Demo • Multi-lingual & Offline-First Prototype</p>
        <div class="flex items-center space-x-3 text-slate-400">
          <span>Nuxt 4 + Tailwind CSS</span>
          <span>•</span>
          <span>Android PWA Ready</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BeneficiaryView from './components/BeneficiaryView.vue'
import StaffDashboard from './components/StaffDashboard.vue'

const { currentLang, t, setLanguage } = useTranslations()
const { isOnline, syncNotification, pendingSyncCount, syncToCloud } = useLivelihoodState()

const currentRole = ref<'beneficiary' | 'staff'>('beneficiary')
const usePhoneFrame = ref(false)

const onLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  if (target) {
    setLanguage(target.value as any)
  }
}
</script>
