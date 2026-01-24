import React, { useState, useEffect } from 'react';
import { History, Info, ChevronRight, BookOpen, ScrollText, Landmark, X, ArrowRightCircle, Users, LayoutGrid } from 'lucide-react';

const kingsData = [
  {
    id: 1,
    name: "အလောင်းမင်းတရား (ဦးအောင်ဇေယျ)",
    reign: "၁၇၅၂ - ၁၇၆၀",
    achievement: "တတိယမြန်မာနိုင်ငံတော်ကို တည်ထောင်သူ။ ရန်ကုန်မြို့ကို အမည်သမုတ်ခဲ့သူ။",
    traits: "ရဲစွမ်းသတ္တိနှင့် ပြည့်စုံပြီး စစ်ရေးကျွမ်းကျင်ခြင်း။ ရွှေဘိုမြို့ကို ဗဟိုပြု၍ ကုန်းဘောင်မင်းဆက်ကို စတင်ခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်ဦး",
    capital: "ရွှေဘို (ရတနာသိင်္ဃ)",
    consort: "ခင်ယွန်းစံ (ရတနာပုံဒေဝီ)",
    children: "သားတော် (၇) ပါး၊ သမီးတော် (၃) ပါး",
    fullHistory: "ဦးအောင်ဇေယျသည် ဟံသာဝတီပဲခူးသားတို့၏ နယ်ချဲ့မှုကို ရွှေဘို (မုဆိုးဖိုရွာ) မှ စတင်တွန်းလှန်ခဲ့သည်။ 'နေမျိုးနော်ရထာ' ဘွဲ့ကို ခံယူကာ ကုန်းဘောင်မင်းဆက်ကို တည်ထောင်ခဲ့သည်။ မြန်မာနိုင်ငံတဝှမ်းလုံးကို ပြန်လည်စုစည်းနိုင်ခဲ့ပြီး ဒဂုံမြို့ကို သိမ်းပိုက်ကာ 'ရန်ကုန်' ဟု အမည်ပြောင်းလဲခဲ့သည်။ ယိုးဒယားသို့ ချီတက်စဉ်အတွင်း နာမကျန်းဖြစ်ကာ မုတ္တမအနီးတွင် နတ်ရွာစံခဲ့သည်။"
  },
  {
    id: 2,
    name: "နောင်တော်ကြီးမင်း",
    reign: "၁၇၆၀ - ၁၇၆၃",
    achievement: "အလောင်းမင်းတရား၏ သားကြီးဖြစ်ပြီး ပုန်ကန်မှုများကို နှိမ်နင်းခဲ့သည်။",
    traits: "တည်ငြိမ်ပြီး စစ်ရေးထက် အုပ်ချုပ်ရေးကို ဦးစားပေးခဲ့သည်။ စစ်ကိုင်းကို မြို့တော်အဖြစ် သတ်မှတ်ခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်ဦး",
    capital: "စစ်ကိုင်း",
    consort: "ရှင်ဖိုးဦး",
    children: "သားတော် (၅) ပါး",
    fullHistory: "အလောင်းမင်းတရား၏ သားတော်ကြီးဖြစ်ပြီး ဖခင်ဖြစ်သူ ချမှတ်ခဲ့သည့် နိုင်ငံတော်တည်ဆောက်ရေးကို ဆက်လက်လုပ်ဆောင်ခဲ့သည်။ နန်းတက်စတွင် ဖြစ်ပွားခဲ့သော စစ်ဗိုလ်ချုပ် မင်းခေါင်နော်ရထာ၏ ပုန်ကန်မှုကို ခက်ခဲစွာ နှိမ်နင်းခဲ့ရသည်။ စစ်ကိုင်းကို မြို့တော်အဖြစ် နန်းစိုက်ခဲ့ပြီး နန်းသက် ၃ နှစ်အကြာတွင် နတ်ရွာစံခဲ့သည်။"
  },
  {
    id: 3,
    name: "ဆင်ဖြူရှင်မင်း (မြေဒူးမင်း)",
    reign: "၁၇၆၃ - ၁၇၇၆",
    achievement: "ယိုးဒယား (အယုဒ္ဓယ) ကို အောင်နိုင်ခဲ့ပြီး တရုတ်-မြန်မာစစ်ပွဲများကို အနိုင်ရခဲ့သူ။",
    traits: "စစ်ရေးအင်အား အတောင်တင်းဆုံး အချိန်ဖြစ်ပြီး နယ်ချဲ့မှုများစွာ ပြုလုပ်နိုင်ခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်ဦး",
    capital: "အင်းဝ",
    consort: "မဟာမင်္ဂလာရတနာဓိပတိဒေဝီ",
    children: "သားတော် (၂၀) ပါး၊ သမီးတော် (၂၁) ပါး",
    fullHistory: "ကုန်းဘောင်ခေတ်တွင် စစ်ရေးအင်အားအကြီးဆုံးသော မင်းဖြစ်သည်။ ၁၇၆၇ တွင် အယုဒ္ဓယ (ယိုးဒယား) ကို သိမ်းပိုက်နိုင်ခဲ့သည်။ ထို့အပြင် တရုတ် (မန်ချူး) တို့၏ ကျူးကျော်မှု လေးကြိမ်စလုံးကိုလည်း အောင်မြင်စွာ တွန်းလှန်နိုင်ခဲ့သည်။ အင်းဝမြို့ကို ပြန်လည်ပြုပြင်ကာ မြို့တော်အဖြစ် နန်းစိုက်ခဲ့သည်။"
  },
  {
    id: 4,
    name: "စဉ့်ကူးမင်း",
    reign: "၁၇၇၆ - ၁၇၈၁",
    achievement: "ရွှေတိဂုံစေတီတော်ရှိ စဉ့်ကူးမင်းခေါင်းလောင်းတော်ကို သွန်းလုပ်လှူဒါန်းခဲ့သည်။",
    traits: "ဘာသာရေးကို ပိုမိုကိုင်းရှိုင်းပြီး စစ်တိုက်ခြင်းထက် ကုသိုလ်ရေးကို အာရုံစိုက်ခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်ဦး",
    capital: "အင်းဝ",
    consort: "ရှင်မင်း",
    children: "သားတော် (၁) ပါး",
    fullHistory: "ဆင်ဖြူရှင်မင်း၏ သားတော်ဖြစ်သည်။ နန်းတက်စဉ်ကာလတွင် စစ်ရေးထက် ဘာသာရေးနှင့် အနုပညာကို ပိုမိုအားပေးခဲ့သည်။ ထင်ရှားသော ကုသိုလ်တော်မှာ ရွှေတိဂုံစေတီရှိ မဟာဂန္ဓာရုံ ခေါင်းလောင်းတော်ကြီး ဖြစ်သည်။ နန်းတွင်းရေး ရှုပ်ထွေးမှုများကြောင့် နန်းချခြင်း ခံခဲ့ရသည်။"
  },
  {
    id: 5,
    name: "ဖောင်းကားစား မောင်မောင်",
    reign: "၁၇၈၂ (၇ ရက်)",
    achievement: "ကုန်းဘောင်မင်းဆက်တွင် နန်းသက်အမြန်ဆုံး (၇ ရက်) မင်းဖြစ်သည်။",
    traits: "အာဏာလုယူမှုကြောင့် ခေတ္တမျှသာ နန်းတက်ခဲ့ရသူ။",
    era: "နန်းတွင်းအရှုပ်တော်ပုံ",
    capital: "အင်းဝ",
    consort: "မရှိပါ",
    children: "မရှိပါ",
    fullHistory: "နောင်တော်ကြီးမင်း၏ သားတော်ဖြစ်သည်။ စဉ့်ကူးမင်း တောကစားသွားခိုက် အင်းဝနန်းတော်ကို အလစ်အငိုက် ဝင်ရောက်စီးနင်းကာ နန်းတက်ခဲ့သည်။ သို့သော် ၇ ရက်အကြာတွင် ဗဒုံမင်း (ဘိုးတော်ဘုရား) က ပြန်လည်တိုက်ခိုက် သိမ်းပိုက်သဖြင့် နန်းသက် အတိုဆုံးမင်း ဖြစ်ခဲ့ရသည်။"
  },
  {
    id: 6,
    name: "ဘိုးတော်ဘုရား (ဗဒုံမင်း)",
    reign: "၁၇၈၂ - ၁၈၁၉",
    achievement: "မင်းကွန်းပုထိုးတော်ကြီးကို တည်ခဲ့သူ။ အမရပူရမြို့တော်ကို တည်ထောင်သူ။",
    traits: "နန်းသက်အရှည်ဆုံး မင်းဖြစ်ပြီး အနုပညာနှင့် ဗိသုကာလက်ရာများကို အားပေးခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်လယ်",
    capital: "အမရပူရ",
    consort: "ရတနာဒေဝီ",
    children: "သားတော် (၆၂) ပါး၊ သမီးတော် (၅၈) ပါး",
    fullHistory: "နန်းသက် ၃၇ နှစ်ကြာမြင့်ပြီး ကုန်းဘောင်မင်းဆက်တွင် နန်းသက်အရှည်ဆုံးဖြစ်သည်။ အမရပူရမြို့ကို တည်ထောင်ခဲ့သည်။ ၎င်းလက်ထက်တွင် ရခိုင်ဒေသကို မြန်မာနိုင်ငံအတွင်းသို့ သွတ်သွင်းနိုင်ခဲ့ပြီး မဟာမုနိရုပ်ပွားတော်မြတ်ကို ပင့်ဆောင်ခဲ့သည်။ ကမ္ဘာ့အကြီးဆုံး အုတ်အဆောက်အဦးဖြစ်လာမည့် မင်းကွန်းပုထိုးတော်ကြီးကို တည်ဆောက်ရန် ကြိုးပမ်းခဲ့သော်လည်း အပြီးမသတ်နိုင်ခဲ့ပေ။"
  },
  {
    id: 7,
    name: "ဘကြီးတော်မင်း (စစ်ကိုင်းမင်း)",
    reign: "၁၈၁၉ - ၁၈၃၇",
    achievement: "ပထမအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့ပြီး ရတနာပူရအင်းဝကို ပြန်လည်နန်းစိုက်ခဲ့သည်။",
    traits: "နန်းတွင်းရေး ရှုပ်ထွေးမှုများနှင့် စစ်ပွဲဒဏ်ကို ရင်ဆိုင်ခဲ့ရသူ။",
    era: "ကုန်းဘောင်ခေတ်လယ်",
    capital: "အင်းဝ",
    consort: "နန်းမတော် မယ်နု",
    children: "သားတော် (၁) ပါး၊ သမီးတော် (၂) ပါး",
    fullHistory: "ဘိုးတော်ဘုရား၏ မြေးတော်ဖြစ်သည်။ ၎င်းလက်ထက် ၁၈၂၄ ခုနှစ်တွင် ပထမအင်္ဂလိပ်-မြန်မာစစ်ပွဲ စတင်ခဲ့သည်။ ရန္တပိုစာချုပ်ကို ချုပ်ဆိုခဲ့ရပြီး ရခိုင်နှင့် တနင်္သာရီဒေသများကို အင်္ဂလိပ်တို့အား ပေးအပ်ခဲ့ရသည်။ နန်းမတော်မယ်နုနှင့် စပ်စုမင်းသားတို့၏ ဩဇာလွှမ်းမိုးမှုကြီးမားခဲ့သည်။ စိတ်ကျရောဂါ ခံစားခဲ့ရပြီး ညီတော် သာယာဝတီမင်း၏ တော်လှန်မှုကြောင့် နန်းကျခဲ့သည်။"
  },
  {
    id: 8,
    name: "သာယာဝတီမင်း",
    reign: "၁၈၃၇ - ၁၈၄၆",
    achievement: "နောင်တော် ဘကြီးတော်မင်းကို တော်လှန်၍ နန်းတက်ခဲ့သူ။",
    traits: "ရဲရင့်ပြီး စိတ်အားထက်သန်သူဖြစ်ကာ အမရပူရကို မြို့တော်ပြန်ပြောင်းခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်လယ်",
    capital: "အမရပူရ",
    consort: "မင်္ဂလာဒေဝီ",
    children: "သားတော် (၁၈) ပါး၊ သမီးတော် (၁၃) ပါး",
    fullHistory: "ဘကြီးတော်မင်း၏ ညီတော်ဖြစ်သည်။ ရန္တပိုစာချုပ်ကို လက်မခံဘဲ အင်္ဂလိပ်တို့အပေါ် တင်းမာသော သဘောထားရှိခဲ့သည်။ အမရပူရသို့ မြို့တော်ပြန်လည် ပြောင်းရွှေ့ခဲ့သည်။ ရွှေတိဂုံစေတီတော်တွင် မဟာမကုဋဃဏ္ဋာ ခေါင်းလောင်းတော်ကြီးကို လှူဒါန်းခဲ့သည်။ ၎င်းလည်း နောက်ပိုင်းတွင် စိတ်ကျန်းမာရေးချို့ယွင်းလာသဖြင့် သားတော် ပုဂံမင်းက နန်းထိန်းအဖြစ် တာဝန်ယူခဲ့ရသည်။"
  },
  {
    id: 9,
    name: "ပုဂံမင်း",
    reign: "၁၈၄၆ - ၁၈၅၃",
    achievement: "ဒုတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့သည်။",
    traits: "အပျော်အပါး မက်သည်ဟု သမိုင်းတွင် ဖော်ပြခံရပြီး နန်းတွင်းရေး အားနည်းခဲ့သည်။",
    era: "ကုန်းဘောင်ခေတ်နှောင်း",
    capital: "အမရပူရ",
    consort: "ပုပ္ပားဒေဝီ",
    children: "သားတော် (၂) ပါး",
    fullHistory: "သာယာဝတီမင်း၏ သားတော်ဖြစ်သည်။ ၎င်းလက်ထက်တွင် ဒုတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့ပြီး မြန်မာနိုင်ငံအောက်ပိုင်း (ပဲခူးဒေသ) တစ်ခုလုံးကို အင်္ဂလိပ်တို့က သိမ်းပိုက်သွားခဲ့သည်။ နန်းတွင်းရေးတွင် အမတ်များ၏ ဂိုဏ်းဂဏကွဲပြားမှုများကြောင့် အားနည်းခဲ့သည်။ ညီတော် မင်းတုန်းမင်း၏ တော်လှန်မှုကို ခံရပြီး နန်းချခံခဲ့ရသည်။"
  },
  {
    id: 10,
    name: "မင်းတုန်းမင်း",
    reign: "၁၈၅၃ - ၁၈၇၈",
    achievement: "ပဉ္စမသင်္ဂါယနာတင်ခဲ့သူ။ ရတနာပုံ (မန္တလေး) မြို့တော်ကို တည်ခဲ့သူ။",
    traits: "ငြိမ်းချမ်းရေးကို မြတ်နိုးပြီး နိုင်ငံတော်ကို ခေတ်မီအောင် ပြုပြင်ပြောင်းလဲခဲ့သူ။",
    era: "ကုန်းဘောင်ခေတ်နှောင်း",
    capital: "မန္တလေး (ရတနာပုံ)",
    consort: "စကြာဒေဝီ (နန်းမတော်ကြီး)",
    children: "သားတော် (၅၀) ပါး၊ သမီးတော် (၅၃) ပါး",
    fullHistory: "မြန်မာသမိုင်းတွင် အမြော်အမြင်အရှိဆုံးနှင့် တိုးတက်သောမင်းတစ်ပါးအဖြစ် သတ်မှတ်ကြသည်။ မန္တလေးမြို့ကို တည်ထောင်ခဲ့ပြီး ပဉ္စမသင်္ဂါယနာ တင်ခဲ့သည်။ နိုင်ငံတော်ကို ခေတ်မီစေရန် စက်မှုလုပ်ငန်းများ၊ သတင်းစာ၊ ဒင်္ဂါးစက်ရုံတို့ကို တည်ထောင်ခဲ့သည်။ အင်္ဂလိပ်တို့နှင့် ငြိမ်းချမ်းစွာ ဆက်ဆံနိုင်ရန် ကြိုးပမ်းခဲ့သော်လည်း နန်းသက်ကုန်ခါနီးတွင် သားတော်များ၏ အာဏာလုမှု (မြင်းကွန်း မြင်းခုံတိုင် အရေးအခင်း) ကြောင့် စိတ်နှလုံး ညှိုးနွမ်းခဲ့ရသည်။"
  },
  {
    id: 11,
    name: "သီပေါမင်း",
    reign: "၁၈၇၈ - ၁၈၈၅",
    achievement: "မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်း။ တတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲတွင် ပါဝင်ခဲ့သူ။",
    traits: "ကုန်းဘောင်မင်းဆက် နိဂုံးချုပ်ခဲ့ရပြီး အိန္ဒိယနိုင်ငံ ရတနာဂီရိသို့ ပါတော်မူခဲ့ရသည်။",
    era: "ကုန်းဘောင်ခေတ်နောက်ဆုံး",
    capital: "မန္တလေး (ရတနာပုံ)",
    consort: "စုဖုရားလတ်",
    children: "သမီးတော် (၄) ပါး",
    fullHistory: "မြန်မာနိုင်ငံ၏ နောက်ဆုံးဘုရင်ဖြစ်သည်။ ၁၈၈၅ ခုနှစ်တွင် တတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့ပြီး အင်္ဂလိပ်တို့က မန္တလေးနန်းတော်ကို သိမ်းပိုက်ခဲ့သည်။ သီပေါမင်းနှင့် မိဖုရားစုဖုရားလတ်တို့ကို အိန္ဒိယနိုင်ငံ၊ ရတနာဂီရိသို့ ပြည်နှင်ဒဏ် ပေးခဲ့သည်။ ၁၉၁၆ ခုနှစ်တွင် ရတနာဂီရိ၌ပင် နတ်ရွာစံခဲ့ပြီး မြန်မာနိုင်ငံ၏ နှစ်ပေါင်းထောင်ချီသော မင်းဆက်စနစ် နိဂုံးချုပ်ခဲ့သည်။"
  }
];

export default function App() {
  const [selectedKing, setSelectedKing] = useState(kingsData[0]);
  const [showModal, setShowModal] = useState(false);

  // Auto-scroll logic for mobile navigation
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-king-${selectedKing.id}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedKing]);

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-900 font-sans selection:bg-amber-200 overflow-x-hidden">
      
      {/* Background Ornaments (Hidden on small mobile) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden hidden sm:block">
         <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-[20px] border-amber-900"></div>
         <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-[30px] border-amber-900"></div>
      </div>

      {/* Sticky Header for Mobile Visibility */}
      <header className="max-w-6xl mx-auto pt-8 pb-4 md:pt-12 md:pb-16 px-4 text-center relative z-20">
        <div className="inline-block p-1.5 px-4 bg-amber-100/60 text-amber-800 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm border border-amber-200">
          ၁၇၅၂ - ၁၈၈၅
        </div>
        <h1 className="text-3xl md:text-7xl font-bold text-amber-950 mb-2 md:mb-4 tracking-tighter">
          ကုန်းဘောင် <span className="text-amber-600 font-serif">ရာဇဝင်</span>
        </h1>
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
           <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-amber-600"></div>
           <Landmark className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
           <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-amber-600"></div>
        </div>
        <p className="text-stone-500 text-sm md:text-lg max-w-2xl mx-auto italic leading-relaxed px-4">
          မြန်မာ့သမိုင်း၏ နောက်ဆုံးသော မင်းဆက်ဖြစ်သည့် ကုန်းဘောင်ခေတ် မင်း (၁၁) ပါးတို့၏ သမိုင်းမှတ်တမ်း
        </p>
      </header>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">
        
        {/* Mobile Navigation (Horizontal Scroll) & Desktop Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50">
            <h3 className="text-amber-900 font-bold mb-4 hidden lg:flex items-center gap-3 text-lg border-b border-amber-100 pb-4">
              <ScrollText className="w-6 h-6 text-amber-600" /> ရာဇဝင်စာရင်း
            </h3>
            
            {/* Nav Container: Horizontal on mobile, Vertical on Desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:max-h-[550px] gap-3 pb-2 lg:pb-0 lg:pr-2 custom-scrollbar no-scrollbar-mobile">
              {kingsData.map((king) => (
                <button
                  key={king.id}
                  id={`nav-king-${king.id}`}
                  onClick={() => setSelectedKing(king)}
                  className={`flex-none w-[180px] lg:w-full text-left p-3 md:p-4 rounded-2xl transition-all border group ${
                    selectedKing.id === king.id
                      ? 'bg-amber-900 border-amber-950 text-white shadow-lg lg:translate-x-2'
                      : 'bg-stone-50 border-stone-100 hover:border-amber-300 hover:bg-amber-50 text-stone-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="overflow-hidden">
                      <span className={`text-[9px] font-bold uppercase tracking-widest block mb-0.5 ${selectedKing.id === king.id ? 'text-amber-200' : 'text-amber-600'}`}>
                         မင်းဆက် {king.id}
                      </span>
                      <h4 className="font-bold text-sm md:text-base leading-tight truncate">{king.name}</h4>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-all hidden lg:block ${selectedKing.id === king.id ? 'translate-x-1 text-white' : 'text-stone-300 opacity-0 group-hover:opacity-100'}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-amber-900/10 border border-stone-100 overflow-hidden flex flex-col relative animate-fade-in">
            <div className="h-2 md:h-3 bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800"></div>
            
            <div className="p-6 md:p-14">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                
                {/* Visual Section */}
                <div className="w-full md:w-52 shrink-0 flex flex-col items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-amber-50 rounded-full border-4 md:border-8 border-white shadow-xl flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-dashed border-amber-200 animate-spin-slow"></div>
                    <Landmark className="w-14 h-14 md:w-20 md:h-20 text-amber-700" />
                    <div className="absolute -bottom-2 bg-amber-900 text-amber-50 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
                       ပါးမြောက် {selectedKing.id}
                    </div>
                  </div>
                  
                  {/* Status Badges for Mobile */}
                  <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                     <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100 text-center">
                        <p className="text-[9px] text-stone-400 uppercase font-extrabold tracking-widest mb-0.5">မြို့တော်</p>
                        <p className="text-amber-950 font-bold text-xs md:text-sm">{selectedKing.capital}</p>
                     </div>
                     <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100 text-center">
                        <p className="text-[9px] text-stone-400 uppercase font-extrabold tracking-widest mb-0.5">ခေတ်ကာလ</p>
                        <p className="text-amber-950 font-bold text-xs md:text-sm">{selectedKing.era}</p>
                     </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 w-full space-y-6 md:space-y-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-5xl font-bold text-stone-950 mb-3 leading-tight">{selectedKing.name}</h2>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900 text-amber-50 rounded-xl text-xs font-bold">
                      <History className="w-4 h-4 text-amber-400" />
                      <span>နန်းသက်: {selectedKing.reign}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section className="relative p-5 md:p-7 bg-amber-50/40 rounded-2xl md:rounded-[2rem] border-l-4 md:border-l-8 border-amber-600 shadow-sm">
                      <h4 className="flex items-center gap-2 text-amber-950 font-bold mb-2 md:mb-3 text-sm md:text-lg">
                        <BookOpen className="w-5 h-5 text-amber-600" /> အောင်မြင်မှုများ
                      </h4>
                      <p className="text-stone-700 leading-relaxed text-base md:text-xl">
                        {selectedKing.achievement}
                      </p>
                    </section>

                    <section className="p-5 md:p-7 bg-stone-50/50 rounded-2xl md:rounded-[2rem] border border-stone-200">
                      <h4 className="flex items-center gap-2 text-stone-800 font-bold mb-2 md:mb-3 text-sm md:text-lg">
                        <Info className="w-5 h-5 text-stone-400" /> ထူးခြားသော စရိုက်များ
                      </h4>
                      <p className="text-stone-600 leading-relaxed italic text-sm md:text-lg">
                        "{selectedKing.traits}"
                      </p>
                    </section>
                  </div>

                  {/* See More Button - Changed to Black */}
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full py-4 md:py-5 bg-stone-950 text-white rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-stone-900/30 active:scale-[0.98] transition-all"
                  >
                    အသေးစိတ်ဖတ်ရန်
                    <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-12 pb-10 text-center text-stone-400 text-[10px] md:text-sm px-4">
        <p className="mb-2 font-bold tracking-[0.2em] uppercase opacity-40">Konbaung Dynasty Digital Archive</p>
        <p>© ၂၀၂၄ ကုန်းဘောင်မင်းဆက် ရာဇဝင် - Mobile-Friendly Version</p>
      </footer>

      {/* Modal - Optimized for Mobile Viewport */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 lg:p-8">
           <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
           
           <div className="bg-white w-full max-w-4xl rounded-t-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col h-[92vh] md:h-auto md:max-h-[90vh] animate-slide-up">
              
              <div className="p-6 md:p-10 border-b border-stone-100 flex items-center justify-between sticky top-0 bg-white z-10">
                 <div className="pr-8">
                    <h3 className="text-xl md:text-3xl font-bold text-amber-950 truncate">{selectedKing.name}</h3>
                    <p className="text-amber-600 font-bold text-[10px] md:text-sm mt-0.5 uppercase tracking-widest">{selectedKing.era}</p>
                 </div>
                 <button onClick={() => setShowModal(false)} className="p-2 md:p-3 bg-stone-100 hover:bg-stone-200 rounded-full shrink-0">
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                 </button>
              </div>

              <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar space-y-8 flex-1">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-center gap-4 p-4 md:p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                       <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-700" />
                       <div className="min-w-0">
                          <p className="text-[9px] text-stone-400 font-bold uppercase">မိဖုရားခေါင်ကြီး</p>
                          <p className="text-amber-900 font-bold text-sm md:text-base truncate">{selectedKing.consort}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 md:p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                       <History className="w-6 h-6 md:w-8 md:h-8 text-amber-700" />
                       <div className="min-w-0">
                          <p className="text-[9px] text-stone-400 font-bold uppercase">သားတော်/သမီးတော်</p>
                          <p className="text-amber-900 font-bold text-sm md:text-base">{selectedKing.children}</p>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-lg md:text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                       <ScrollText className="w-5 h-5 md:w-6 md:h-6 text-amber-600" /> သမိုင်းကြောင်း အနှစ်ချုပ်
                    </h4>
                    <p className="text-stone-700 text-base md:text-xl leading-[1.8] md:leading-[2] text-justify indent-8 md:indent-12">
                       {selectedKing.fullHistory}
                    </p>
                 </div>

                 <div className="p-5 md:p-6 bg-amber-900 rounded-2xl md:rounded-3xl text-amber-100">
                    <div className="flex items-start gap-4">
                       <Info className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-amber-400" />
                       <p className="italic leading-relaxed text-xs md:text-sm">
                          ကုန်းဘောင်ခေတ်သည် မြန်မာနိုင်ငံ၏ စစ်ရေး၊ နိုင်ငံရေးနှင့် ယဉ်ကျေးမှု အရှိန်အဝါ အထွန်းတောက်ဆုံးသော ကာလတစ်ခု ဖြစ်ပါသည်။
                       </p>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-stone-50 border-t border-stone-100 text-center shrink-0">
                 <button 
                  onClick={() => setShowModal(false)}
                  className="w-full md:w-auto px-12 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors"
                 >
                    ပြန်ထွက်ရန်
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Global CSS for animations and scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px; height: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 10px;
        }
        .no-scrollbar-mobile::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 1024px) {
          .no-scrollbar-mobile {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}