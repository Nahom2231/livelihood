<template>
  <div class="space-y-6">
    <!-- Top Executive Header -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div class="flex items-center space-x-2">
            <span class="text-xl">📊</span>
            <h2 class="text-xl font-black text-slate-900">{{ t.staffDashboardTitle }}</h2>
          </div>
          <p class="text-xs text-slate-500 mt-1">{{ t.staffOverview }}</p>
        </div>

        <!-- Export & Quick Actions -->
        <div class="flex items-center space-x-3">
          <button
            @click="exportBeneficiaryCsv"
            class="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow cursor-pointer transition-all active:scale-95"
          >
            <span>📥</span>
            <span>{{ t.exportCsv }}</span>
          </button>
        </div>
      </div>

      <!-- KPI Metrics Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
          <p class="text-[11px] font-bold text-slate-500 uppercase">{{ t.totalBeneficiaries }}</p>
          <div class="flex items-baseline space-x-2 mt-1">
            <span class="text-2xl font-black text-slate-900">{{ beneficiaries.length }}</span>
            <span class="text-xs font-bold text-emerald-600">100% active cohort</span>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
          <p class="text-[11px] font-bold text-slate-500 uppercase">{{ t.seedFundsDeployed }}</p>
          <div class="flex items-baseline space-x-1 mt-1">
            <span class="text-2xl font-black text-indigo-700">{{ totalSeedDeployed.toLocaleString() }}</span>
            <span class="text-xs font-bold text-slate-500">ETB</span>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
          <p class="text-[11px] font-bold text-slate-500 uppercase">{{ t.avgProfitMargin }}</p>
          <div class="flex items-baseline space-x-2 mt-1">
            <span class="text-2xl font-black text-emerald-600">+34.8%</span>
            <span class="text-xs font-medium text-slate-500">above baseline</span>
          </div>
        </div>

        <div class="bg-rose-50 border border-rose-200/80 rounded-xl p-4">
          <p class="text-[11px] font-bold text-rose-700 uppercase">{{ t.atRiskVentures }}</p>
          <div class="flex items-baseline space-x-2 mt-1">
            <span class="text-2xl font-black text-rose-700">{{ atRiskCount }}</span>
            <span class="text-xs font-bold text-rose-600">Needs intervention</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and Beneficiary Table -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="font-black text-slate-800 text-base">Beneficiary Venture Portfolio</h3>
          <p class="text-xs text-slate-500 mt-0.5">Real-time performance, seed money usage, and risk tracking</p>
        </div>

        <!-- Filter Controls -->
        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Region Filter -->
          <select
            v-model="selectedRegion"
            class="text-xs font-semibold border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:border-emerald-500"
          >
            <option value="All">{{ t.allRegions }}</option>
            <option value="Hawassa">Hawassa</option>
            <option value="Addis Ababa">Addis Ababa</option>
            <option value="Adama">Adama</option>
            <option value="Mekelle">Mekelle</option>
            <option value="Bahir Dar">Bahir Dar</option>
          </select>

          <!-- Sector Filter -->
          <select
            v-model="selectedSector"
            class="text-xs font-semibold border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:border-emerald-500"
          >
            <option value="All">{{ t.allSectors }}</option>
            <option value="Poultry & Livestock">Poultry & Livestock</option>
            <option value="Tailoring & Garments">Tailoring & Garments</option>
            <option value="Urban Agriculture">Urban Agriculture</option>
            <option value="Retail & Kiosk">Retail & Kiosk</option>
            <option value="Food & Catering">Food & Catering</option>
            <option value="Carpentry & Metal">Carpentry & Metal</option>
          </select>

          <!-- Risk Status Filter -->
          <select
            v-model="selectedStatus"
            class="text-xs font-semibold border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:border-emerald-500"
          >
            <option value="All">{{ t.allStatuses }}</option>
            <option value="Thriving">Thriving</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>
      </div>

      <!-- Beneficiaries Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-600">
          <thead class="bg-slate-50 text-[11px] uppercase font-bold text-slate-500 border-b border-slate-200">
            <tr>
              <th class="py-3.5 px-4">Beneficiary & Venture</th>
              <th class="py-3.5 px-4">Region / Cluster</th>
              <th class="py-3.5 px-4 text-right">Seed Capital</th>
              <th class="py-3.5 px-4 text-right">Total Sales</th>
              <th class="py-3.5 px-4 text-right">Operating Exp.</th>
              <th class="py-3.5 px-4 text-right">Net Profit</th>
              <th class="py-3.5 px-4 text-center">Status</th>
              <th class="py-3.5 px-4 text-center">Case Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="b in filteredBeneficiaries"
              :key="b.id"
              class="hover:bg-slate-50/70 transition-colors"
            >
              <td class="py-3.5 px-4">
                <div class="font-bold text-slate-900">{{ b.name }}</div>
                <div class="text-xs text-slate-500">{{ b.businessName }} ({{ b.businessType }})</div>
              </td>
              <td class="py-3.5 px-4">
                <span class="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-medium">
                  📍 {{ b.region }}
                </span>
              </td>
              <td class="py-3.5 px-4 text-right font-semibold text-slate-700">
                {{ b.seedCapital.toLocaleString() }} ETB
              </td>
              <td class="py-3.5 px-4 text-right font-bold text-emerald-600">
                +{{ b.sales.toLocaleString() }} ETB
              </td>
              <td class="py-3.5 px-4 text-right font-semibold text-rose-600">
                -{{ b.expenses.toLocaleString() }} ETB
              </td>
              <td class="py-3.5 px-4 text-right font-black" :class="b.profit >= 0 ? 'text-emerald-700' : 'text-rose-700'">
                {{ b.profit >= 0 ? '+' : '' }}{{ b.profit.toLocaleString() }} ETB
              </td>
              <td class="py-3.5 px-4 text-center">
                <span
                  v-if="b.status === 'Thriving'"
                  class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800"
                >
                  🟢 Thriving
                </span>
                <span
                  v-else
                  class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 animate-pulse"
                >
                  🔴 At Risk
                </span>
              </td>
              <td class="py-3.5 px-4 text-center">
                <button
                  @click="openCaseDrawer(b)"
                  class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-lg border border-indigo-200 transition-all cursor-pointer active:scale-95"
                >
                  Inspect Case
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Case Management Drawer / Modal -->
    <div v-if="selectedBeneficiary" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <div class="flex items-center space-x-2">
              <h3 class="text-xl font-black text-slate-900">{{ selectedBeneficiary.name }}</h3>
              <span
                :class="selectedBeneficiary.status === 'Thriving' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'"
                class="text-xs px-2 py-0.5 rounded-full font-bold"
              >
                {{ selectedBeneficiary.status }}
              </span>
            </div>
            <p class="text-xs text-slate-500 mt-1">
              {{ selectedBeneficiary.businessName }} • {{ selectedBeneficiary.region }} • 📞 {{ selectedBeneficiary.phone }}
            </p>
          </div>
          <button @click="selectedBeneficiary = null" class="text-slate-400 hover:text-slate-600 text-2xl font-bold p-1">
            ✕
          </button>
        </div>

        <!-- Risk Warning if At Risk -->
        <div v-if="selectedBeneficiary.status === 'At Risk'" class="bg-rose-50 border border-rose-200 rounded-xl p-3.5 text-xs text-rose-900">
          <p class="font-extrabold flex items-center space-x-1">
            <span>⚠️</span>
            <span>Automatic Risk Diagnostic:</span>
          </p>
          <p class="mt-1 font-medium">{{ selectedBeneficiary.riskReason }}</p>
        </div>

        <!-- Completed Trainings Badges -->
        <div>
          <h4 class="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">{{ t.trainingsCompleted }}</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tr in selectedBeneficiary.trainings"
              :key="tr"
              class="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-indigo-100"
            >
              🎓 {{ tr }}
            </span>
          </div>
        </div>

        <!-- Field Visit Log -->
        <div>
          <h4 class="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">{{ t.caseNotes }}</h4>
          <div class="space-y-3">
            <div
              v-for="(cn, idx) in selectedBeneficiary.caseNotes"
              :key="idx"
              class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs space-y-1.5"
            >
              <div class="flex justify-between font-bold text-slate-700">
                <span>{{ cn.officer }}</span>
                <span class="text-slate-400 font-medium">{{ cn.date }}</span>
              </div>
              <p class="text-slate-600 leading-relaxed">{{ cn.note }}</p>
              <div class="bg-amber-50/80 border border-amber-200/80 rounded-lg p-2 text-amber-900 font-medium">
                <span class="font-bold">Recommendation:</span> {{ cn.recommendation }}
              </div>
            </div>
          </div>
        </div>

        <!-- Log New Field Visit Note Form -->
        <div class="border-t border-slate-100 pt-4 space-y-3">
          <h4 class="text-xs font-bold text-slate-800">{{ t.addVisitNote }}</h4>
          <div>
            <textarea
              v-model="newNoteText"
              rows="2"
              placeholder="Observation on inventory, bookkeeping books, customer footfall..."
              class="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:border-indigo-500 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <input
              v-model="newRecommendationText"
              type="text"
              placeholder="Staff action recommendation (e.g. Provide seed top-up, linkage with market)..."
              class="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div class="flex justify-end space-x-2">
            <button
              @click="saveNewCaseNote"
              :disabled="!newNoteText.trim()"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
            >
              Add Field Note
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-slate-100 pt-3 flex justify-end">
          <button
            @click="selectedBeneficiary = null"
            class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
          >
            {{ t.close }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useTranslations()
const { beneficiaries, exportBeneficiaryCsv, addCaseNote } = useLivelihoodState()

const selectedRegion = ref('All')
const selectedSector = ref('All')
const selectedStatus = ref('All')

const selectedBeneficiary = ref<any>(null)
const newNoteText = ref('')
const newRecommendationText = ref('')

const totalSeedDeployed = computed(() =>
  beneficiaries.value.reduce((sum, b) => sum + b.seedCapital, 0)
)

const atRiskCount = computed(() =>
  beneficiaries.value.filter(b => b.status === 'At Risk').length
)

const filteredBeneficiaries = computed(() => {
  return beneficiaries.value.filter(b => {
    const matchesRegion = selectedRegion.value === 'All' || b.region === selectedRegion.value
    const matchesSector = selectedSector.value === 'All' || b.businessType === selectedSector.value
    const matchesStatus = selectedStatus.value === 'All' || b.status === selectedStatus.value
    return matchesRegion && matchesSector && matchesStatus
  })
})

const openCaseDrawer = (b: any) => {
  selectedBeneficiary.value = b
  newNoteText.value = ''
  newRecommendationText.value = ''
}

const saveNewCaseNote = () => {
  if (!selectedBeneficiary.value || !newNoteText.value.trim()) return

  addCaseNote(
    selectedBeneficiary.value.id,
    newNoteText.value.trim(),
    newRecommendationText.value.trim() || 'Continue regular weekly monitoring.',
    'ABC Livelihoods Officer'
  )

  newNoteText.value = ''
  newRecommendationText.value = ''
}
</script>
