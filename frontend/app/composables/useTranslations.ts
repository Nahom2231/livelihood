export type Language = 'en' | 'am' | 'om' | 'ti'

export interface TranslationDict {
  appName: string
  appSubtitle: string
  beneficiaryView: string
  staffView: string
  onlineStatus: string
  offlineStatus: string
  syncNow: string
  syncSuccess: string
  pendingSync: string
  businessName: string
  seedCapitalReceived: string
  seedBalance: string
  totalSales: string
  totalExpenses: string
  netProfit: string
  personalSavings: string
  breakEvenProgress: string
  breakEvenTarget: string
  logIncome: string
  logExpense: string
  logSavings: string
  recentTransactions: string
  noTransactions: string
  amount: string
  category: string
  note: string
  saveRecord: string
  cancel: string
  quickAmount: string
  savingsGoals: string
  goalTarget: string
  currentSaved: string
  addGoal: string
  milestones: string
  learningHub: string
  learningSubtitle: string
  tipsCashFlow: string
  tipsCashFlowDesc: string
  tipsCustomer: string
  tipsCustomerDesc: string
  tipsPricing: string
  tipsPricingDesc: string
  riskAlert: string
  riskAlertExpensesHigh: string
  riskAlertProfitable: string
  staffDashboardTitle: string
  staffOverview: string
  totalBeneficiaries: string
  activeVentures: string
  atRiskVentures: string
  seedFundsDeployed: string
  avgProfitMargin: string
  filterRegion: string
  filterSector: string
  filterRisk: string
  allRegions: string
  allSectors: string
  allStatuses: string
  exportCsv: string
  caseNotes: string
  trainingsCompleted: string
  addVisitNote: string
  recommendation: string
  close: string
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    appName: 'Livelihoods Monitoring',
    appSubtitle: 'Micro-Business & Seed Capital Tracker',
    beneficiaryView: 'Beneficiary App',
    staffView: 'Staff M&E Dashboard',
    onlineStatus: 'Online (Cloud Connected)',
    offlineStatus: 'Offline Mode (Local Storage)',
    syncNow: 'Sync to Cloud',
    syncSuccess: 'Transactions synced successfully!',
    pendingSync: 'pending sync',
    businessName: 'Selam Poultry & Eggs',
    seedCapitalReceived: 'Seed Capital Received',
    seedBalance: 'Available Business Cash',
    totalSales: 'Total Sales / Income',
    totalExpenses: 'Operating Expenses',
    netProfit: 'Net Profit',
    personalSavings: 'My Savings',
    breakEvenProgress: 'Break-Even Progress',
    breakEvenTarget: 'Target: 25,000 ETB Seed Recovery',
    logIncome: 'Log Income',
    logExpense: 'Log Expense',
    logSavings: 'Save Money',
    recentTransactions: 'Activity Ledger',
    noTransactions: 'No transactions recorded yet.',
    amount: 'Amount (ETB)',
    category: 'Category / Purpose',
    note: 'Quick Note / Voice Memo',
    saveRecord: 'Save Entry',
    cancel: 'Cancel',
    quickAmount: 'Quick Presets:',
    savingsGoals: 'Savings Targets',
    goalTarget: 'Goal Target',
    currentSaved: 'Saved',
    addGoal: 'Create Target',
    milestones: 'Business Milestones',
    learningHub: 'Micro-Business Learning Hub',
    learningSubtitle: 'Practical tips for youth and caregiver entrepreneurs',
    tipsCashFlow: 'Keep Business Cash Separate',
    tipsCashFlowDesc: 'Never mix personal family expenses with business funds. Pay yourself a fixed small wage.',
    tipsCustomer: 'Care for Repeat Customers',
    tipsCustomerDesc: 'Polite greetings and consistent quality bring neighbors back to your shop every week.',
    tipsPricing: 'Calculating Your True Cost',
    tipsPricingDesc: 'Include transport and feed costs before setting your product price to guarantee profit.',
    riskAlert: 'Financial Notice',
    riskAlertExpensesHigh: 'Alert: Operating expenses are currently higher than sales this week. Review costs!',
    riskAlertProfitable: 'Great job! Your business generated a healthy positive profit margin this week.',
    staffDashboardTitle: 'ABC Program Monitoring & Evaluation (M&E)',
    staffOverview: 'Real-Time Portfolio Performance',
    totalBeneficiaries: 'Registered Beneficiaries',
    activeVentures: 'Active Micro-Businesses',
    atRiskVentures: 'At-Risk Ventures',
    seedFundsDeployed: 'Seed Funds Deployed',
    avgProfitMargin: 'Average Profit Margin',
    filterRegion: 'Filter by Region',
    filterSector: 'Filter by Sector',
    filterRisk: 'Filter by Risk Status',
    allRegions: 'All Clusters & Regions',
    allSectors: 'All Business Sectors',
    allStatuses: 'All Statuses',
    exportCsv: 'Export M&E Data (CSV)',
    caseNotes: 'Field Visit Log & Notes',
    trainingsCompleted: 'Trainings Completed',
    addVisitNote: 'Record Field Visit Observation',
    recommendation: 'Staff Action Recommendation',
    close: 'Close Window'
  },
  am: {
    appName: 'የኑሮ ማሻሻያ ክትትል',
    appSubtitle: 'አነስተኛ ንግድ እና መነሻ ካፒታል መከታተያ',
    beneficiaryView: 'የተጠቃሚ መተግበሪያ',
    staffView: 'የሰራተኞች ዳሽቦርድ',
    onlineStatus: 'በመስመር ላይ (ከክላውድ ጋር ተገናኝቷል)',
    offlineStatus: 'ከመስመር ውጭ (በስልኩ ተቀምጧል)',
    syncNow: 'መረጃ ላክ (Sync)',
    syncSuccess: 'መረጃው በተሳካ ሁኔታ ተልኳል!',
    pendingSync: 'ያልተላኩ መረጃዎች',
    businessName: 'ሰላም የዶሮ እርባታ እና እንቁላል',
    seedCapitalReceived: 'የተሰጠ የመነሻ ካፒታል',
    seedBalance: 'የንግድ ጥሬ ገንዘብ',
    totalSales: 'አጠቃላይ ሽያጭ / ገቢ',
    totalExpenses: 'የስራ ማስኬጃ ወጪ',
    netProfit: 'የተጣራ ትርፍ',
    personalSavings: 'የግል ቁጠባ',
    breakEvenProgress: 'ወጪ የመሸፈን ሂደት',
    breakEvenTarget: 'ግብ፡ 25,000 ብር መነሻ ካፒታል መመለስ',
    logIncome: 'ገቢ መዝግብ',
    logExpense: 'ወጪ መዝግብ',
    logSavings: 'ቁጠባ ጨምር',
    recentTransactions: 'የቅርብ ጊዜ እንቅስቃሴዎች',
    noTransactions: 'እስካሁን ምንም ዝውውር አልተመዘገበም።',
    amount: 'የገንዘብ መጠን (ብር)',
    category: 'ዓይነት / ምክንያት',
    note: 'አጭር ማስታወሻ',
    saveRecord: 'መዝግብ',
    cancel: 'ይቅር',
    quickAmount: 'ፈጣን መጠኖች፡',
    savingsGoals: 'የቁጠባ ግቦች',
    goalTarget: 'የታለመው መጠን',
    currentSaved: 'የተቆጠበ',
    addGoal: 'አዲስ ግብ ፍጠር',
    milestones: 'የንግድ ደረጃዎች',
    learningHub: 'የአነስተኛ ንግድ ትምህርት ማዕከል',
    learningSubtitle: 'ለወጣቶች እና አሳዳጊዎች ተግባራዊ የንግድ ምክሮች',
    tipsCashFlow: 'የንግድ እና የግል ገንዘብን መለየት',
    tipsCashFlowDesc: 'የቤተሰብ ወጪን ከንግድ ካፒታል ጋር ፈጽሞ አይቀላቅሉ። ቋሚ አነስተኛ ደሞዝ ለራስዎ መድቡ።',
    tipsCustomer: 'ደንበኞችን በጥሩ ሁኔታ መቀበል',
    tipsCustomerDesc: 'መልካም መስተንግዶ እና ንፁህ ምርት ደንበኞች ደጋግመው እንዲመጡ ያደርጋል።',
    tipsPricing: 'ትክክለኛውን ዋጋ ማስላት',
    tipsPricingDesc: 'የትርፍ ህዳግዎን ለማረጋገጥ የመጓጓዣ እና የመኖ ወጪዎችን አካተው ዋጋ ይቁረጡ።',
    riskAlert: 'የገንዘብ ማሳሰቢያ',
    riskAlertExpensesHigh: 'ማስጠንቀቂያ፡ በዚህ ሳምንት ወጪዎ ከገቢዎ በልጧል! እባክዎ ወጪዎን ይቀንሱ።',
    riskAlertProfitable: 'ጥሩ ውጤት! በዚህ ሳምንት ንግድዎ ጥሩ ትርፍ አስመዝግቧል።',
    staffDashboardTitle: 'የኤቢሲ ፕሮግራም ክትትል እና ግምገማ (M&E)',
    staffOverview: 'የፕሮጀክት አጠቃላይ ሁኔታ በእውነተኛ ሰዓት',
    totalBeneficiaries: 'የተመዘገቡ ተጠቃሚዎች',
    activeVentures: 'ንቁ አነስተኛ ንግዶች',
    atRiskVentures: 'አደጋ ላይ ያሉ ንግዶች',
    seedFundsDeployed: 'የተሰራጨ መነሻ ካፒታል',
    avgProfitMargin: 'አማካይ የትርፍ መጠን',
    filterRegion: 'በክልል ይለዩ',
    filterSector: 'በንግድ ዘርፍ ይለዩ',
    filterRisk: 'በአደጋ ሁኔታ ይለዩ',
    allRegions: 'ሁሉም ክልሎች',
    allSectors: 'ሁሉም የንግድ ዘርፎች',
    allStatuses: 'ሁሉም ሁኔታዎች',
    exportCsv: 'መረጃ በCSV አውርድ',
    caseNotes: 'የመስክ ምልከታ ማስታወሻ',
    trainingsCompleted: 'የተጠናቀቁ ስልጠናዎች',
    addVisitNote: 'የመስክ ምልከታ መዝግብ',
    recommendation: 'የሰራተኛው የውሳኔ ሃሳብ',
    close: 'ዝጋ'
  },
  om: {
    appName: 'Hordoffii Jireenyaa',
    appSubtitle: 'Hordoffii Daldala Xiqqaafi Kaappitaala Jalqabaa',
    beneficiaryView: 'Fayyadamaa (App)',
    staffView: 'Daashboordii Hojjettootaa',
    onlineStatus: 'Toora Irra (Kilaawudii wajjin)',
    offlineStatus: 'Tooraan Ala (Moobaayilii keessatti)',
    syncNow: 'Oodeeffannoo Ergi (Sync)',
    syncSuccess: 'Oodeeffannoon milkaa’inaan ergameera!',
    pendingSync: 'kan hin ergamin',
    businessName: 'Lukkuu fi Buuphaa Nagaa',
    seedCapitalReceived: 'Kaappitaala Jalqabaa Fudhatame',
    seedBalance: 'Qabeenya Daldalaa Harka Jiru',
    totalSales: 'Gurgurtaa Waliigalaa / Galii',
    totalExpenses: 'Baasii Hojii',
    netProfit: 'Bu’aa Qulqulluu',
    personalSavings: 'Qusannaa Kootii',
    breakEvenProgress: 'Baasii Baasuu (Break-Even)',
    breakEvenTarget: 'Galma: Qarshii 25,000 Deebisuu',
    logIncome: 'Galii Galmeessi',
    logExpense: 'Baasii Galmeessi',
    logSavings: 'Qusannaa Dabali',
    recentTransactions: 'Sochii Dhihoo',
    noTransactions: 'Hanga ammaatti sochiin hin jiru.',
    amount: 'Hamma Qarshii (ETB)',
    category: 'Gosa / Sababa',
    note: 'Yaada Gabaabaa',
    saveRecord: 'Galmeessi',
    cancel: 'Dhiisi',
    quickAmount: 'Hamma Saffisaa:',
    savingsGoals: 'Galmoota Qusannaa',
    goalTarget: 'Galma Karoorfame',
    currentSaved: 'Kan Qusatame',
    addGoal: 'Galma Haaraa',
    milestones: 'Sadarkaa Daldalaa',
    learningHub: 'Giddu-gala Barnoota Daldala Xiqqaati',
    learningSubtitle: 'Gorsa daldalaa qabatamaa dargaggootaaf',
    tipsCashFlow: 'Qarshii Daldalaa fi Maatii Adda Baasuu',
    tipsCashFlowDesc: 'Baasii maatiifi qarshii daldalaa walitti hin makin. Mindaa murtaa’aa ofiif kaffalaa.',
    tipsCustomer: 'Mamiltootaaf Kabaja Kennuu',
    tipsCustomerDesc: 'Simannaa gaariifi qulqullina eeguun maamiltoonni akka deebi’an taasisa.',
    tipsPricing: 'Gatii Sirrii Herreguu',
    tipsPricingDesc: 'Bu’aa argachuuf baasii geejjibaafi nyaata beeyladaa dabalatee gatii murteessi.',
    riskAlert: 'Akeekkachiisa Faayinaansii',
    riskAlertExpensesHigh: 'Hubachiisa: Torban kana baasiin keessan galii irra caaleera!',
    riskAlertProfitable: 'Baga gammaddan! Torban kana daldalli keessan bu’aa gaarii argateera.',
    staffDashboardTitle: 'Hordoffiifi Gamaggama Sagantaa ABC (M&E)',
    staffOverview: 'Haala Waliigalaa Daldalootaa',
    totalBeneficiaries: 'Fayyadamtoota Galmaa’an',
    activeVentures: 'Daldaloota Socho’an',
    atRiskVentures: 'Daldaloota Yaaddoo Keessa Jiran',
    seedFundsDeployed: 'Kaappitaala Jalqabaa Raabsame',
    avgProfitMargin: 'Giddu-galeessa Bu’aa',
    filterRegion: 'Naannoodhaan Filadhu',
    filterSector: 'Gosa Daldalaan Filadhu',
    filterRisk: 'Haala Yaaddootiin Filadhu',
    allRegions: 'Naannoolee Hunda',
    allSectors: 'Gosa Daldalaa Hunda',
    allStatuses: 'Sadarkaa Hunda',
    exportCsv: 'Oodeeffannoo Baasi (CSV)',
    caseNotes: 'Yaada Daawwannaafi Gorsa',
    trainingsCompleted: 'Leenjii Xumurame',
    addVisitNote: 'Yaada Daawwannaa Galmeessi',
    recommendation: 'Gorsa Hojjetaa',
    close: 'Cufi'
  },
  ti: {
    appName: 'ምክትታል መነባብሮ',
    appSubtitle: 'ናይ ንኡስ ንግዲን መበገሲ ካፒታልን ምክትታል',
    beneficiaryView: 'ናይ ተጠቃሚ መተግበሪ',
    staffView: 'ናይ ሰራሕተኛታት ዳሽቦርድ',
    onlineStatus: 'ኣብ መስመር (ምስ ክላውድ ዝተራኸበ)',
    offlineStatus: 'ካብ መስመር ወፃኢ (ኣብ ሞባይል ዝተዓቀበ)',
    syncNow: 'ሓበሬታ ስደድ (Sync)',
    syncSuccess: 'ሓበሬታ ብዕውት መንገዲ ተሰዲዱ!',
    pendingSync: 'ዘይተላእከ ሓበሬታ',
    businessName: 'ሰላም መፍረዪ ደርሆታትን እንቋቑሖን',
    seedCapitalReceived: 'ዝተቐበልዎ መበገሲ ካፒታል',
    seedBalance: 'ዘሎ ጥረ ገንዘብ ንግዲ',
    totalSales: 'ጠቕላላ መሸጣ / ኣታዊ',
    totalExpenses: 'ናይ ስራሕ መካየዲ ወፃኢ',
    netProfit: 'ፅሩይ መኽሰብ',
    personalSavings: 'ናይ ውልቀ ቑጠባ',
    breakEvenProgress: 'ወፃኢታት ናይ ምሽፋን መስርሕ',
    breakEvenTarget: 'ሸቶ፡ 25,000 ቅርሺ መበገሲ ካፒታል ምምላስ',
    logIncome: 'ኣታዊ መዝግብ',
    logExpense: 'ወፃኢ መዝግብ',
    logSavings: 'ቑጠባ ወስኽ',
    recentTransactions: 'ናይ ቀረባ ምንቅስቓሳት',
    noTransactions: 'ክሳብ ሕዚ ዋላ ሓደ ምንቅስቓስ ኣይተመዝገበን።',
    amount: 'መጠነ ገንዘብ (ቅርሺ)',
    category: 'ዓይነት / ምኽንያት',
    note: 'ሓፂር መተሓሳሰቢ',
    saveRecord: 'መዝግብ',
    cancel: 'ይትረፍ',
    quickAmount: 'ቕልጡፍ መጠናት፡',
    savingsGoals: 'ናይ ቑጠባ ሸቶታት',
    goalTarget: 'ዝተሓሰበ መጠን',
    currentSaved: 'ዝተቖጠበ',
    addGoal: 'ሓዱሽ ሸቶ',
    milestones: 'ናይ ንግዲ ብርክታት',
    learningHub: 'ማእኸል ትምህርቲ ንኡስ ንግዲ',
    learningSubtitle: 'ንመንእሰያትን መዕበይትን ዝኸውን ግብራዊ ናይ ንግዲ ምኽርታት',
    tipsCashFlow: 'ናይ ንግዲን ናይ ስድራን ገንዘብ ምፍላይ',
    tipsCashFlowDesc: 'ናይ ስድራ ወፃኢ ምስ ናይ ንግዲ ገንዘብ ፈፂምኩም ኣይትሓውሱ። ንርእስኹም ውሱን ደሞዝ መድቡ።',
    tipsCustomer: 'ዓማዊል ብኽብሪ ምእንጋድ',
    tipsCustomerDesc: 'ፅቡቕ ኣቀባብላን ፅሬቱ ዝሓለወ ፍርያትን ዓማዊልኩም ደጋጊሞም ንኽመፁ ይገብር።',
    tipsPricing: 'ትኽክለኛ ዋጋ ምሕሳብ',
    tipsPricingDesc: 'መኽሰብ ንምርካብ ናይ መጓዓዝያን ናይ መግቢ ወፃኢታትን ሓዊስኩም ዋጋ ቁረፁ።',
    riskAlert: 'ናይ ፋይናንስ መተሓሳሰቢ',
    riskAlertExpensesHigh: 'መጠንቀቕታ፡ ኣብዚ ሰሙን ወፃኢኹም ካብ ኣታዊኹም በሊፁ ኣሎ! ወፃኢኹም ኣመዓራርዩ።',
    riskAlertProfitable: 'ፅቡቕ ስራሕ! ኣብዚ ሰሙን ንግድኹም ፅቡቕ መኽሰብ ኣመዝጊቡ ኣሎ።',
    staffDashboardTitle: 'ናይ ABC መደብ ምክትታልን ገምጋምን (M&E)',
    staffOverview: 'ናይ ፕሮጀክት ሓፈሻዊ ኩነታት ብቀጥታ',
    totalBeneficiaries: 'ዝተመዝገቡ ተጠቀምቲ',
    activeVentures: 'ንቑሓት ንኡሳን ንግድታት',
    atRiskVentures: 'ኣብ ሓደጋ ዝርከቡ ንግድታት',
    seedFundsDeployed: 'ዝተኸፋፈለ መበገሲ ካፒታል',
    avgProfitMargin: 'ማእኸላይ ናይ መኽሰብ መጠን',
    filterRegion: 'ብዞባ ፍለዩ',
    filterSector: 'ብዓይነት ንግዲ ፍለዩ',
    filterRisk: 'ብናይ ሓደጋ ኩነታት ፍለዩ',
    allRegions: 'ኩሎም ዞባታት',
    allSectors: 'ኩሎም ዓይነታት ንግዲ',
    allStatuses: 'ኩሎም ኩነታት',
    exportCsv: 'ሓበሬታ ብCSV ኣውርድ',
    caseNotes: 'ናይ ሜዳ ምልከታ መተሓሳሰቢ',
    trainingsCompleted: 'ዝተዛዘሙ ስልጠናታት',
    addVisitNote: 'ናይ ሜዳ ምልከታ መዝግብ',
    recommendation: 'ናይ ሰራሕተኛ ውሳነ',
    close: 'ዕጾ'
  }
}

export const useTranslations = () => {
  const currentLang = useState<Language>('app_language', () => 'en')

  const t = computed(() => translations[currentLang.value] || translations.en)

  const setLanguage = (lang: Language) => {
    currentLang.value = lang
  }

  return {
    currentLang,
    t,
    setLanguage
  }
}
