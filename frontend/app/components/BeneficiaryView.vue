<template>
  <div class="max-w-xl mx-auto pb-16">
    <!-- Beneficiary Identity Banner -->
    <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-5 rounded-2xl shadow-lg mb-5">
      <div class="flex items-start justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-13 h-13 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center text-2xl font-bold shadow-inner">
            👩🏽
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h2 class="text-xl font-black tracking-tight">{{ currentBeneficiary.name }}</h2>
              <span class="bg-emerald-800/80 text-emerald-100 text-xs px-2 py-0.5 rounded-full font-medium border border-emerald-400/30">
                {{ currentBeneficiary.businessType }}
              </span>
            </div>
            <p class="text-emerald-100 text-xs mt-0.5 font-medium flex items-center space-x-1">
              <span>📍 {{ currentBeneficiary.region }}</span>
              <span>•</span>
              <span>📱 {{ currentBeneficiary.phone }}</span>
            </p>
          </div>
        </div>

        <!-- Sync status badge -->
        <div class="text-right">
          <div v-if="!isOnline" class="inline-flex items-center space-x-1 bg-amber-500/90 text-amber-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-sm animate-pulse">
            <span>⚠️</span>
            <span>{{ pendingSyncCount }} {{ t.pendingSync }}</span>
          </div>
          <div v-else class="inline-flex items-center space-x-1 bg-emerald-500/80 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
            <span>☁️</span>
            <span>Cloud Synced</span>
          </div>
        </div>
      </div>

      <!-- Seed Capital Highlight -->
      <div class="mt-4 pt-3 border-t border-white/20 grid grid-cols-2 gap-3 text-center">
        <div class="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
          <p class="text-emerald-100 text-xs font-medium">{{ t.seedCapitalReceived }}</p>
          <p class="text-xl font-extrabold text-white mt-0.5">{{ currentBeneficiary.seedCapital.toLocaleString() }} <span class="text-xs font-semibold">ETB</span></p>
        </div>
        <div class="bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
          <p class="text-emerald-100 text-xs font-medium">{{ t.breakEvenProgress }}</p>
          <div class="flex items-center justify-center space-x-2 mt-1">
            <div class="w-full bg-black/20 rounded-full h-2.5 overflow-hidden">
              <div class="bg-amber-300 h-2.5 rounded-full transition-all duration-500" :style="{ width: `${breakEvenPercent}%` }"></div>
            </div>
            <span class="text-xs font-bold text-amber-300">{{ breakEvenPercent }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Mode Tabs (Bookkeeping, Dashboard, Planning, Learning) -->
    <div class="flex space-x-1 bg-slate-200/80 p-1.5 rounded-xl mb-5 text-sm font-semibold text-slate-700 shadow-inner">
      <button
        @click="activeSubTab = 'bookkeeping'"
        :class="activeSubTab === 'bookkeeping' ? 'bg-white text-emerald-700 shadow-md' : 'hover:bg-slate-300/60 text-slate-600'"
        class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center space-x-1"
      >
        <span>📖</span>
        <span>Ledger</span>
      </button>

      <button
        @click="activeSubTab = 'dashboard'"
        :class="activeSubTab === 'dashboard' ? 'bg-white text-emerald-700 shadow-md' : 'hover:bg-slate-300/60 text-slate-600'"
        class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center space-x-1"
      >
        <span>📊</span>
        <span>Finance</span>
      </button>

      <button
        @click="activeSubTab = 'planning'"
        :class="activeSubTab === 'planning' ? 'bg-white text-emerald-700 shadow-md' : 'hover:bg-slate-300/60 text-slate-600'"
        class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center space-x-1"
      >
        <span>🎯</span>
        <span>Goals</span>
      </button>

      <button
        @click="activeSubTab = 'learning'"
        :class="activeSubTab === 'learning' ? 'bg-white text-emerald-700 shadow-md' : 'hover:bg-slate-300/60 text-slate-600'"
        class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center space-x-1"
      >
        <span>💡</span>
        <span>Tips</span>
      </button>
    </div>

    <!-- TAB 1: BOOKKEEPING & TRANSACTIONS -->
    <div v-if="activeSubTab === 'bookkeeping'" class="space-y-5">
      <!-- Low-Literacy Visual Action Buttons -->
      <div class="grid grid-cols-3 gap-3">
        <!-- Income Button -->
        <button
          @click="openModal('sale')"
          class="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg active:scale-95 transition-all cursor-pointer border border-emerald-400/40"
        >
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-1.5 shadow-inner">
            💰
          </div>
          <span class="font-extrabold text-sm">{{ t.logIncome }}</span>
          <span class="text-[11px] text-emerald-100 opacity-90">+ Money In</span>
        </button>

        <!-- Expense Button -->
        <button
          @click="openModal('expense')"
          class="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg active:scale-95 transition-all cursor-pointer border border-rose-400/40"
        >
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-1.5 shadow-inner">
            🛒
          </div>
          <span class="font-extrabold text-sm">{{ t.logExpense }}</span>
          <span class="text-[11px] text-rose-100 opacity-90">- Cost / Feed</span>
        </button>

        <!-- Savings Button -->
        <button
          @click="openModal('savings')"
          class="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg active:scale-95 transition-all cursor-pointer border border-blue-400/40"
        >
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-1.5 shadow-inner">
            🏦
          </div>
          <span class="font-extrabold text-sm">{{ t.logSavings }}</span>
          <span class="text-[11px] text-blue-100 opacity-90">🔒 Group Box</span>
        </button>
      </div>

      <!-- Quick Metrics Ribbon -->
      <div class="grid grid-cols-3 gap-2 text-center">
        <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-200/80">
          <p class="text-[11px] font-semibold text-slate-500 uppercase">{{ t.totalSales }}</p>
          <p class="text-base font-extrabold text-emerald-600 mt-0.5">+{{ totalSales.toLocaleString() }} <span class="text-[10px]">ETB</span></p>
        </div>
        <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-200/80">
          <p class="text-[11px] font-semibold text-slate-500 uppercase">{{ t.totalExpenses }}</p>
          <p class="text-base font-extrabold text-rose-600 mt-0.5">-{{ totalExpenses.toLocaleString() }} <span class="text-[10px]">ETB</span></p>
        </div>
        <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-200/80">
          <p class="text-[11px] font-semibold text-slate-500 uppercase">{{ t.netProfit }}</p>
          <p :class="netProfit >= 0 ? 'text-emerald-700' : 'text-rose-700'" class="text-base font-black mt-0.5">
            {{ netProfit >= 0 ? '+' : '' }}{{ netProfit.toLocaleString() }} <span class="text-[10px]">ETB</span>
          </p>
        </div>
      </div>

      <!-- Offline Sync Notification Banner if pending -->
      <div v-if="pendingSyncCount > 0" class="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between shadow-sm">
        <div class="flex items-center space-x-2">
          <span class="text-amber-600 text-xl">📲</span>
          <div>
            <p class="text-xs font-bold text-amber-900">{{ pendingSyncCount }} entries saved on device (Offline)</p>
            <p class="text-[11px] text-amber-700">Connect to sync or click button when network returns.</p>
          </div>
        </div>
        <button
          @click="syncToCloud"
          class="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow cursor-pointer transition-all active:scale-95"
        >
          {{ t.syncNow }}
        </button>
      </div>

      <!-- Activity Ledger / Transaction List -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-black text-slate-800 text-sm flex items-center space-x-1.5">
            <span>📋</span>
            <span>{{ t.recentTransactions }}</span>
          </h3>
          <span class="text-xs text-slate-500 font-medium">{{ transactions.length }} entries</span>
        </div>

        <div v-if="transactions.length === 0" class="text-center py-8 text-slate-400 text-sm">
          {{ t.noTransactions }}
        </div>

        <div v-else class="space-y-2.5">
          <div
            v-for="tx in transactions"
            :key="tx.id"
            class="flex items-center justify-between p-3 rounded-xl border transition-all"
            :class="tx.type === 'sale' ? 'bg-emerald-50/50 border-emerald-100' : tx.type === 'expense' ? 'bg-rose-50/50 border-rose-100' : 'bg-blue-50/50 border-blue-100'"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm"
                :class="tx.type === 'sale' ? 'bg-emerald-100 text-emerald-700' : tx.type === 'expense' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'"
              >
                {{ tx.type === 'sale' ? '💰' : tx.type === 'expense' ? '🛒' : '🏦' }}
              </div>
              <div>
                <p class="font-bold text-slate-800 text-sm leading-tight">{{ tx.category }}</p>
                <p class="text-xs text-slate-500 mt-0.5 flex items-center space-x-1.5">
                  <span>{{ tx.date }}</span>
                  <span v-if="tx.note">• {{ tx.note }}</span>
                </p>
              </div>
            </div>

            <div class="text-right">
              <p
                class="font-black text-sm"
                :class="tx.type === 'sale' ? 'text-emerald-600' : tx.type === 'expense' ? 'text-rose-600' : 'text-blue-600'"
              >
                {{ tx.type === 'sale' ? '+' : tx.type === 'expense' ? '-' : '' }}{{ tx.amount.toLocaleString() }} ETB
              </p>
              <span
                class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full inline-block mt-0.5"
                :class="tx.synced ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'"
              >
                {{ tx.synced ? '✓ Synced' : '⏳ Offline' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: FINANCIAL DASHBOARD & BREAK-EVEN -->
    <div v-else-if="activeSubTab === 'dashboard'" class="space-y-5">
      <!-- Automated Health Alert -->
      <div
        :class="netProfit >= 0 ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'"
        class="border rounded-2xl p-4 shadow-sm flex items-start space-x-3"
      >
        <span class="text-2xl">{{ netProfit >= 0 ? '🎉' : '⚠️' }}</span>
        <div>
          <h4 class="font-black text-sm">{{ t.riskAlert }}</h4>
          <p class="text-xs mt-1 leading-relaxed">
            {{ netProfit >= 0 ? t.riskAlertProfitable : t.riskAlertExpensesHigh }}
          </p>
        </div>
      </div>

      <!-- Break-Even Seed Recovery Tracker -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-black text-slate-800 text-sm flex items-center space-x-1.5">
            <span>🎯</span>
            <span>{{ t.breakEvenProgress }}</span>
          </h3>
          <span class="text-xs font-extrabold text-emerald-600">{{ breakEvenPercent }}% Recovered</span>
        </div>
        <p class="text-xs text-slate-500 mb-3">{{ t.breakEvenTarget }}</p>

        <div class="w-full bg-slate-100 rounded-full h-4 overflow-hidden p-0.5 border border-slate-200">
          <div
            class="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-700"
            :style="{ width: `${breakEvenPercent}%` }"
          ></div>
        </div>

        <div class="flex justify-between text-[11px] font-bold text-slate-500 mt-2">
          <span>0 ETB</span>
          <span>Target: 25,000 ETB</span>
        </div>
      </div>

      <!-- Cash Flow Visualization (SVG Chart) -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <h3 class="font-black text-slate-800 text-sm mb-1 flex items-center space-x-1.5">
          <span>📈</span>
          <span>Cash Flow Dynamics (Income vs Expenses)</span>
        </h3>
        <p class="text-xs text-slate-500 mb-4">Visual comparison of revenue generation against operating costs</p>

        <!-- Pure SVG Trend Bar Chart -->
        <div class="h-44 flex items-end justify-around pt-6 pb-2 border-b border-slate-200">
          <!-- Item 1: Total Sales Bar -->
          <div class="flex flex-col items-center w-1/3">
            <span class="text-xs font-black text-emerald-600 mb-1">{{ totalSales.toLocaleString() }}</span>
            <div
              class="w-14 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-xl shadow transition-all duration-500"
              :style="{ height: `${Math.min(120, Math.max(25, (totalSales / 35000) * 120))}px` }"
            ></div>
            <span class="text-xs font-bold text-slate-700 mt-2">Sales</span>
          </div>

          <!-- Item 2: Total Expenses Bar -->
          <div class="flex flex-col items-center w-1/3">
            <span class="text-xs font-black text-rose-600 mb-1">{{ totalExpenses.toLocaleString() }}</span>
            <div
              class="w-14 bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-xl shadow transition-all duration-500"
              :style="{ height: `${Math.min(120, Math.max(25, (totalExpenses / 35000) * 120))}px` }"
            ></div>
            <span class="text-xs font-bold text-slate-700 mt-2">Expenses</span>
          </div>

          <!-- Item 3: Net Profit Bar -->
          <div class="flex flex-col items-center w-1/3">
            <span class="text-xs font-black text-teal-600 mb-1">{{ netProfit.toLocaleString() }}</span>
            <div
              class="w-14 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-xl shadow transition-all duration-500"
              :style="{ height: `${Math.min(120, Math.max(25, (Math.abs(netProfit) / 35000) * 120))}px` }"
            ></div>
            <span class="text-xs font-bold text-slate-700 mt-2">Net Profit</span>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-around text-xs text-slate-600 font-semibold">
          <div class="flex items-center space-x-1.5">
            <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span>Total Sales</span>
          </div>
          <div class="flex items-center space-x-1.5">
            <span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span>Expenses</span>
          </div>
          <div class="flex items-center space-x-1.5">
            <span class="w-3 h-3 rounded-full bg-teal-500 inline-block"></span>
            <span>Net Gain</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: BUSINESS PLANNING & GOALS -->
    <div v-else-if="activeSubTab === 'planning'" class="space-y-5">
      <!-- Savings Goal Card -->
      <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-5 shadow-lg">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs uppercase font-bold tracking-wider text-blue-200">🎯 {{ t.savingsGoals }}</span>
          <span class="bg-white/20 text-xs px-2 py-0.5 rounded-full font-bold">VSLA / Bank</span>
        </div>
        <h4 class="text-lg font-black">{{ currentBeneficiary.savingsTarget.title }}</h4>

        <div class="mt-4">
          <div class="flex justify-between text-xs font-semibold mb-1">
            <span>{{ t.currentSaved }}: {{ currentBeneficiary.savingsTarget.current.toLocaleString() }} ETB</span>
            <span>{{ t.goalTarget }}: {{ currentBeneficiary.savingsTarget.target.toLocaleString() }} ETB</span>
          </div>
          <div class="w-full bg-black/20 rounded-full h-3 overflow-hidden p-0.5">
            <div
              class="bg-amber-300 h-full rounded-full transition-all duration-700"
              :style="{ width: `${Math.min(100, Math.round((currentBeneficiary.savingsTarget.current / currentBeneficiary.savingsTarget.target) * 100))}%` }"
            ></div>
          </div>
        </div>

        <div class="mt-3 text-right">
          <span class="text-xs font-extrabold text-amber-300">
            {{ Math.round((currentBeneficiary.savingsTarget.current / currentBeneficiary.savingsTarget.target) * 100) }}% Completed
          </span>
        </div>
      </div>

      <!-- Business Milestones Checklist -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <h3 class="font-black text-slate-800 text-sm mb-1 flex items-center space-x-1.5">
          <span>🏆</span>
          <span>{{ t.milestones }}</span>
        </h3>
        <p class="text-xs text-slate-500 mb-4">Tap any milestone to update your progress</p>

        <div class="space-y-3">
          <div
            v-for="m in currentBeneficiary.milestones"
            :key="m.id"
            @click="toggleMilestone(m.id)"
            class="flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all hover:bg-slate-50"
            :class="m.completed ? 'bg-emerald-50/40 border-emerald-200 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-600'"
          >
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              :class="m.completed ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white text-transparent'"
            >
              ✓
            </div>
            <span class="text-sm font-bold flex-1" :class="{ 'line-through text-slate-400': m.completed }">
              {{ m.title }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 4: MICRO-BUSINESS LEARNING HUB -->
    <div v-else-if="activeSubTab === 'learning'" class="space-y-4">
      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
        <h3 class="font-black text-indigo-950 text-sm flex items-center space-x-1.5">
          <span>💡</span>
          <span>{{ t.learningHub }}</span>
        </h3>
        <p class="text-xs text-indigo-700 mt-1">{{ t.learningSubtitle }}</p>
      </div>

      <!-- Tip 1 -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex items-start space-x-3 hover:border-emerald-300 transition-all">
        <div class="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-xl flex-shrink-0">
          ⚖️
        </div>
        <div>
          <h4 class="font-black text-slate-800 text-sm">{{ t.tipsCashFlow }}</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">{{ t.tipsCashFlowDesc }}</p>
        </div>
      </div>

      <!-- Tip 2 -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex items-start space-x-3 hover:border-blue-300 transition-all">
        <div class="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">
          🤝
        </div>
        <div>
          <h4 class="font-black text-slate-800 text-sm">{{ t.tipsCustomer }}</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">{{ t.tipsCustomerDesc }}</p>
        </div>
      </div>

      <!-- Tip 3 -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex items-start space-x-3 hover:border-amber-300 transition-all">
        <div class="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
          🏷️
        </div>
        <div>
          <h4 class="font-black text-slate-800 text-sm">{{ t.tipsPricing }}</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">{{ t.tipsPricingDesc }}</p>
        </div>
      </div>
    </div>

    <!-- TRANSACTION LOGGING MODAL -->
    <div v-if="showModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div class="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-6">
        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">{{ modalType === 'sale' ? '💰' : modalType === 'expense' ? '🛒' : '🏦' }}</span>
            <h3 class="text-lg font-black text-slate-800">
              {{ modalType === 'sale' ? t.logIncome : modalType === 'expense' ? t.logExpense : t.logSavings }}
            </h3>
          </div>
          <button @click="showModal = false" class="text-slate-400 hover:text-slate-600 text-xl font-bold p-1">
            ✕
          </button>
        </div>

        <!-- Quick Amount Presets -->
        <div>
          <p class="text-xs font-bold text-slate-500 mb-1.5">{{ t.quickAmount }}</p>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="preset in [100, 250, 500, 1000]"
              :key="preset"
              type="button"
              @click="entryAmount = preset"
              class="py-2 px-1 bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-slate-700 font-extrabold text-xs rounded-xl transition-all cursor-pointer border border-slate-200"
            >
              +{{ preset }}
            </button>
          </div>
        </div>

        <!-- Amount Input -->
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">{{ t.amount }}</label>
          <div class="relative">
            <input
              v-model.number="entryAmount"
              type="number"
              min="1"
              placeholder="0.00"
              class="w-full text-2xl font-black text-slate-900 border-2 border-slate-300 rounded-xl px-4 py-2.5 focus:border-emerald-500 focus:outline-none"
            />
            <span class="absolute right-4 top-3 text-sm font-extrabold text-slate-400">ETB</span>
          </div>
        </div>

        <!-- Visual Category Selection -->
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">{{ t.category }}</label>
          <select
            v-model="entryCategory"
            class="w-full border-2 border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:outline-none bg-white"
          >
            <option v-for="cat in currentCategories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Optional Note -->
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">{{ t.note }}</label>
          <input
            v-model="entryNote"
            type="text"
            placeholder="e.g. 5 Crates delivered to cafe"
            class="w-full border-2 border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <!-- Modal Actions -->
        <div class="flex space-x-3 pt-2">
          <button
            type="button"
            @click="showModal = false"
            class="flex-1 py-3 text-slate-600 font-bold text-sm bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
          >
            {{ t.cancel }}
          </button>
          <button
            type="button"
            @click="submitEntry"
            :disabled="!entryAmount || entryAmount <= 0"
            :class="modalType === 'sale' ? 'bg-emerald-600 hover:bg-emerald-700' : modalType === 'expense' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-blue-600 hover:bg-blue-700'"
            class="flex-1 py-3 text-white font-black text-sm rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {{ t.saveRecord }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useTranslations()
const {
  isOnline,
  currentBeneficiary,
  transactions,
  totalSales,
  totalExpenses,
  netProfit,
  breakEvenPercent,
  pendingSyncCount,
  addTransaction,
  syncToCloud,
  toggleMilestone
} = useLivelihoodState()

const activeSubTab = ref<'bookkeeping' | 'dashboard' | 'planning' | 'learning'>('bookkeeping')
const showModal = ref(false)
const modalType = ref<'sale' | 'expense' | 'savings'>('sale')
const entryAmount = ref<number | null>(null)
const entryCategory = ref('')
const entryNote = ref('')

const saleCategories = ['Egg Wholesale (Crates)', 'Retail Direct Sales', 'Culled Hen / Meat', 'Fertilizer & Organic Manure']
const expenseCategories = ['Layer Feed (50kg Bag)', 'Poultry Vaccines / Vet', 'Wood Shavings / Bedding', 'Market Transport', 'Water / Electricity']
const savingsCategories = ['Weekly VSLA Group Lockbox', 'Bank Account Deposit', 'Emergency Reserve']

const currentCategories = computed(() => {
  if (modalType.value === 'sale') return saleCategories
  if (modalType.value === 'expense') return expenseCategories
  return savingsCategories
})

const openModal = (type: 'sale' | 'expense' | 'savings') => {
  modalType.value = type
  entryAmount.value = null
  entryCategory.value = type === 'sale' ? saleCategories[0] : type === 'expense' ? expenseCategories[0] : savingsCategories[0]
  entryNote.value = ''
  showModal.value = true
}

const submitEntry = () => {
  if (!entryAmount.value || entryAmount.value <= 0) return

  addTransaction({
    type: modalType.value,
    category: entryCategory.value,
    amount: entryAmount.value,
    note: entryNote.value
  })

  showModal.value = false
}
</script>
