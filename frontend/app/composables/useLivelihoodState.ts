export interface Transaction {
  id: string
  type: 'sale' | 'expense' | 'savings'
  category: string
  amount: number
  date: string
  note: string
  synced: boolean
}

export interface Beneficiary {
  id: string
  name: string
  phone: string
  businessName: string
  businessType: string
  region: string
  seedCapital: number
  seedDate: string
  sales: number
  expenses: number
  profit: number
  savings: number
  status: 'Thriving' | 'Moderate' | 'At Risk'
  riskReason?: string
  trainings: string[]
  caseNotes: { date: string; officer: string; note: string; recommendation: string }[]
}

export const useLivelihoodState = () => {
  // Network simulation
  const isOnline = useState<boolean>('app_is_online', () => true)
  const syncNotification = useState<string | null>('app_sync_notification', () => null)

  // Current logged in beneficiary user (Simulated)
  const currentBeneficiary = useState('current_beneficiary', () => ({
    id: 'BEN-001',
    name: 'Tigist Haile',
    phone: '+251 91 234 5678',
    businessName: 'Selam Poultry & Eggs',
    businessType: 'Poultry & Livestock',
    region: 'Hawassa, Sidama',
    seedCapital: 25000,
    seedDate: '2026-01-20',
    savingsTarget: {
      title: 'Second Layer Cage & Feed Stock',
      target: 12000,
      current: 7500
    },
    milestones: [
      { id: '1', title: 'Local Kebele Micro-Enterprise Certificate', completed: true },
      { id: '2', title: 'First Batch of 500 Fresh Eggs Sold', completed: true },
      { id: '3', title: 'Open Dedicated Bank Account for Business', completed: true },
      { id: '4', title: 'Repay 20% Initial Revolving Fund Installment', completed: false }
    ]
  }))

  // Beneficiary Transactions
  const transactions = useState<Transaction[]>('app_transactions', () => [
    {
      id: 'tx-1',
      type: 'sale',
      category: 'Egg Wholesale (3 Crates)',
      amount: 2400,
      date: '2026-09-21',
      note: 'Sold to local neighborhood cafe',
      synced: true
    },
    {
      id: 'tx-2',
      type: 'expense',
      category: 'Layer Feed (50kg Bag)',
      amount: 1750,
      date: '2026-09-20',
      note: 'Bought from Hawassa feed cooperative',
      synced: true
    },
    {
      id: 'tx-3',
      type: 'sale',
      category: 'Direct Retail Egg Sales',
      amount: 1100,
      date: '2026-09-19',
      note: 'Market day cash sales',
      synced: true
    },
    {
      id: 'tx-4',
      type: 'savings',
      category: 'VSLA Weekly Contribution',
      amount: 500,
      date: '2026-09-18',
      note: 'Weekly group savings lockbox',
      synced: true
    },
    {
      id: 'tx-5',
      type: 'expense',
      category: 'Vaccination & Poultry Vet',
      amount: 600,
      date: '2026-09-16',
      note: 'Routine Newcastle preventive booster',
      synced: true
    },
    {
      id: 'tx-6',
      type: 'sale',
      category: 'Culled Hen Sales (3 birds)',
      amount: 1800,
      date: '2026-09-15',
      note: 'Sold to local butcher',
      synced: true
    }
  ])

  // All Beneficiaries for Staff M&E Dashboard
  const beneficiaries = useState<Beneficiary[]>('staff_beneficiaries', () => [
    {
      id: 'BEN-001',
      name: 'Tigist Haile',
      phone: '+251 91 234 5678',
      businessName: 'Selam Poultry & Eggs',
      businessType: 'Poultry & Livestock',
      region: 'Hawassa',
      seedCapital: 25000,
      seedDate: '2026-01-20',
      sales: 34500,
      expenses: 18200,
      profit: 16300,
      savings: 7500,
      status: 'Thriving',
      trainings: ['Basic Bookkeeping', 'Poultry Health & Housing', 'Market Linkages'],
      caseNotes: [
        {
          date: '2026-09-10',
          officer: 'Alemayehu T. (Livelihoods Officer)',
          note: 'Flock in good health. Egg production at 88%. Feed records maintained accurately.',
          recommendation: 'Link with Hawassa University cafeteria for bulk egg supply.'
        }
      ]
    },
    {
      id: 'BEN-002',
      name: 'Abebe Bikila',
      phone: '+251 92 888 1234',
      businessName: 'Abebe Modern Tailoring',
      businessType: 'Tailoring & Garments',
      region: 'Addis Ababa',
      seedCapital: 30000,
      seedDate: '2026-02-01',
      sales: 19500,
      expenses: 24200,
      profit: -4700,
      savings: 1200,
      status: 'At Risk',
      riskReason: 'High workshop rent and cloth scrap waste outstripping early revenue.',
      trainings: ['Vocational Sewing 101', 'Pattern Making'],
      caseNotes: [
        {
          date: '2026-09-14',
          officer: 'Bethlehem W. (Field Worker)',
          note: 'Operator struggling with fabric procurement costs. Machine running smoothly.',
          recommendation: 'Recommend shifting to school uniform batch contracts to stabilize monthly revenue.'
        }
      ]
    },
    {
      id: 'BEN-003',
      name: 'Chaltu Desta',
      phone: '+251 93 456 7890',
      businessName: 'Chaltu Green Nursery',
      businessType: 'Urban Agriculture',
      region: 'Adama',
      seedCapital: 20000,
      seedDate: '2026-01-15',
      sales: 29800,
      expenses: 12400,
      profit: 17400,
      savings: 9200,
      status: 'Thriving',
      trainings: ['Organic Composting', 'Drip Irrigation', 'Financial Literacy'],
      caseNotes: [
        {
          date: '2026-09-08',
          officer: 'Kassahun G. (Cluster Coordinator)',
          note: 'Seedling germination rate excellent. High demand for tomato and pepper sprouts.',
          recommendation: 'Encourage expansion into grafted avocado seedlings next cycle.'
        }
      ]
    },
    {
      id: 'BEN-004',
      name: 'Berhane Gidey',
      phone: '+251 94 112 3344',
      businessName: 'Mekelle Family Kiosk',
      businessType: 'Retail & Kiosk',
      region: 'Mekelle',
      seedCapital: 25000,
      seedDate: '2026-02-10',
      sales: 15400,
      expenses: 17800,
      profit: -2400,
      savings: 800,
      status: 'At Risk',
      riskReason: 'Stalled inventory turnover in dry grains; competition from wholesale market.',
      trainings: ['Retail Merchandising'],
      caseNotes: [
        {
          date: '2026-09-12',
          officer: 'Marta H. (Social Worker)',
          note: 'Inventory sitting too long. Working capital is locked in slow-moving pulses.',
          recommendation: 'Offer fast-moving consumable goods (soap, tea, salt) for quick daily cashflow.'
        }
      ]
    },
    {
      id: 'BEN-005',
      name: 'Fatuma Mohammed',
      phone: '+251 95 667 8901',
      businessName: 'Bona Traditional Coffee & Snacks',
      businessType: 'Food & Catering',
      region: 'Hawassa',
      seedCapital: 20000,
      seedDate: '2026-03-01',
      sales: 32100,
      expenses: 17500,
      profit: 14600,
      savings: 8100,
      status: 'Thriving',
      trainings: ['Food Hygiene & Safety', 'Customer Relations', 'Basic Bookkeeping'],
      caseNotes: [
        {
          date: '2026-09-17',
          officer: 'Alemayehu T. (Livelihoods Officer)',
          note: 'High customer footfall near bus station. Clean setup and fast service.',
          recommendation: 'Support application for outdoor seating permit with city administration.'
        }
      ]
    },
    {
      id: 'BEN-006',
      name: 'Dawit Kebede',
      phone: '+251 96 223 4455',
      businessName: 'Tana Woodcraft & Repair',
      businessType: 'Carpentry & Metal',
      region: 'Bahir Dar',
      seedCapital: 35000,
      seedDate: '2026-01-05',
      sales: 44200,
      expenses: 28300,
      profit: 15900,
      savings: 11500,
      status: 'Thriving',
      trainings: ['Carpentry Standards', 'Workplace Safety', 'Micro-Enterprise Tax'],
      caseNotes: [
        {
          date: '2026-09-05',
          officer: 'Getachew B. (M&E Specialist)',
          note: 'Repaying seed loan consistently. Mentoring two new apprentices.',
          recommendation: 'Eligible for Phase 2 scaling loan up to 75,000 ETB.'
        }
      ]
    }
  ])

  // Financial Calculations for current user
  const totalSales = computed(() =>
    transactions.value.filter(t => t.type === 'sale').reduce((acc, t) => acc + t.amount, 0)
  )

  const totalExpenses = computed(() =>
    transactions.value.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)
  )

  const totalSavings = computed(() =>
    transactions.value.filter(t => t.type === 'savings').reduce((acc, t) => acc + t.amount, 0)
  )

  const netProfit = computed(() => totalSales.value - totalExpenses.value)

  // Seed capital is 25000 ETB
  const seedCapital = computed(() => currentBeneficiary.value.seedCapital)
  const breakEvenPercent = computed(() => {
    const pct = Math.round((totalSales.value / seedCapital.value) * 100)
    return Math.min(100, Math.max(0, pct))
  })

  // Pending sync items
  const pendingSyncCount = computed(() =>
    transactions.value.filter(t => !t.synced).length
  )

  // Add Transaction
  const addTransaction = (entry: { type: 'sale' | 'expense' | 'savings'; category: string; amount: number; note: string }) => {
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: entry.type,
      category: entry.category.trim() || (entry.type === 'sale' ? 'General Sale' : entry.type === 'expense' ? 'Operational Cost' : 'Savings Deposit'),
      amount: Number(entry.amount),
      date: new Date().toISOString().split('T')[0],
      note: entry.note.trim() || '',
      synced: isOnline.value // If online, synced immediately; if offline, stays false
    }
    transactions.value.unshift(newTx)

    // Update savings if savings type
    if (entry.type === 'savings') {
      currentBeneficiary.value.savingsTarget.current += Number(entry.amount)
    }

    // Temporary alert if offline
    if (!isOnline.value) {
      showTemporaryNotice('Saved locally! Will sync when connection returns.')
    }
  }

  // Sync Offline Queue
  const syncToCloud = () => {
    transactions.value.forEach(t => {
      t.synced = true
    })
    showTemporaryNotice('Cloud synchronization complete! All records backed up.')
  }

  // Notice helper
  const showTemporaryNotice = (msg: string) => {
    syncNotification.value = msg
    setTimeout(() => {
      syncNotification.value = null
    }, 3500)
  }

  // Toggle milestone completion
  const toggleMilestone = (id: string) => {
    const m = currentBeneficiary.value.milestones.find(item => item.id === id)
    if (m) m.completed = !m.completed
  }

  // Add Case Note for staff
  const addCaseNote = (beneficiaryId: string, note: string, recommendation: string, officerName: string) => {
    const b = beneficiaries.value.find(item => item.id === beneficiaryId)
    if (b) {
      b.caseNotes.unshift({
        date: new Date().toISOString().split('T')[0],
        officer: officerName || 'ABC Field Officer',
        note,
        recommendation
      })
    }
  }

  // Export CSV
  const exportBeneficiaryCsv = () => {
    const headers = ['ID', 'Beneficiary Name', 'Phone', 'Business Name', 'Sector', 'Region', 'Seed Capital (ETB)', 'Total Sales (ETB)', 'Expenses (ETB)', 'Net Profit (ETB)', 'Savings (ETB)', 'Status']
    const rows = beneficiaries.value.map(b => [
      b.id,
      `"${b.name}"`,
      `"${b.phone}"`,
      `"${b.businessName}"`,
      `"${b.businessType}"`,
      `"${b.region}"`,
      b.seedCapital,
      b.sales,
      b.expenses,
      b.profit,
      b.savings,
      `"${b.status}"`
    ])

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `abc_livelihoods_report_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return {
    isOnline,
    syncNotification,
    currentBeneficiary,
    transactions,
    beneficiaries,
    totalSales,
    totalExpenses,
    totalSavings,
    netProfit,
    seedCapital,
    breakEvenPercent,
    pendingSyncCount,
    addTransaction,
    syncToCloud,
    toggleMilestone,
    addCaseNote,
    exportBeneficiaryCsv
  }
}
