import React, { useState, useEffect } from 'react';
import { Search, History, Image as ImageIcon, Loader2, Info, ChevronRight, ChevronLeft } from 'lucide-react';

const apiKey = "";

const kingsData = [
  {
    id: 1,
    name: "အလောင်းမင်းတရား (ဦးအောင်ဇေယျ)",
    reign: "၁၇၅၂ - ၁၇၆၀",
    achievement: "တတိယမြန်မာနိုင်ငံတော်ကို တည်ထောင်သူ။ ရန်ကုန်မြို့ကို အမည်သမုတ်ခဲ့သူ။",
    traits: "ရဲစွမ်းသတ္တိနှင့် ပြည့်စုံပြီး စစ်ရေးကျွမ်းကျင်ခြင်း။ ရွှေဘိုမြို့ကို ဗဟိုပြု၍ ကုန်းဘောင်မင်းဆက်ကို စတင်ခဲ့သည်။",
    prompt: "A powerful Burmese King Alaungpaya (U Aung Zeya) leading a resistance army in Shwebo, 18th century Myanmar traditional warrior attire with golden armor and helmet, cinematic historical epic style, high detail."
  },
  {
    id: 2,
    name: "နောင်တော်ကြီးမင်း",
    reign: "၁၇၆၀ - ၁၇၆၃",
    achievement: "အလောင်းမင်းတရား၏ သားကြီးဖြစ်ပြီး ပုန်ကန်မှုများကို နှိမ်နင်းခဲ့သည်။",
    traits: "တည်ငြိမ်ပြီး စစ်ရေးထက် အုပ်ချုပ်ရေးကို ဦးစားပေးခဲ့သည်။ စစ်ကိုင်းကို မြို့တော်အဖြစ် သတ်မှတ်ခဲ့သည်။",
    prompt: "King Naungdawgyi of Konbaung dynasty, eldest son of Alaungpaya, in royal palace setting of Sagaing, 18th century Burmese royal court, majestic and authoritative, cinematic lighting."
  },
  {
    id: 3,
    name: "ဆင်ဖြူရှင်မင်း (မြေဒူးမင်း)",
    reign: "၁၇၆၃ - ၁၇၇၆",
    achievement: "ယိုးဒယား (အယုဒ္ဓယ) ကို အောင်နိုင်ခဲ့ပြီး တရုတ်-မြန်မာစစ်ပွဲများကို အနိုင်ရခဲ့သူ။",
    traits: "စစ်ရေးအင်အား အတောင်တင်းဆုံး အချိန်ဖြစ်ပြီး နယ်ချဲ့မှုများစွာ ပြုလုပ်နိုင်ခဲ့သည်။",
    prompt: "Burmese King Hsinbyushin in a victory scene, surrounded by generals, 18th century Myanmar military glory, grand palace background, intricate royal robes, hyper-realistic."
  },
  {
    id: 4,
    name: "စဉ့်ကူးမင်း",
    reign: "၁၇၇၆ - ၁၇၈၂",
    achievement: "ရွှေတိဂုံစေတီတော်ရှိ စဉ့်ကူးမင်းခေါင်းလောင်းတော်ကို သွန်းလုပ်လှူဒါန်းခဲ့သည်။",
    traits: "ဘာသာရေးကို ပိုမိုကိုင်းရှိုင်းပြီး စစ်တိုက်ခြင်းထက် ကုသိုလ်ရေးကို အာရုံစိုက်ခဲ့သည်။",
    prompt: "King Singu Min standing next to a massive ornate bronze bell at Shwedagon Pagoda, peaceful atmosphere, sunset lighting, traditional 18th century Myanmar attire."
  },
  {
    id: 5,
    name: "ဖောင်းကားစား မောင်မောင်",
    reign: "၁၇၈၂ (၇ ရက်)",
    achievement: "ကုန်းဘောင်မင်းဆက်တွင် နန်းသက်အမြန်ဆုံး (၇ ရက်) မင်းဖြစ်သည်။",
    traits: "အာဏာလုယူမှုကြောင့် ခေတ္တမျှသာ နန်းတက်ခဲ့ရသူ။",
    prompt: "A brief scene of a young Burmese prince being crowned in a tense palace atmosphere, shadowy lighting, 18th century Konbaung style, dramatic cinematic shot."
  },
  {
    id: 6,
    name: "ဘိုးတော်ဘုရား (ဗဒုံမင်း)",
    reign: "၁၇၈၂ - ၁၈၁၉",
    achievement: "မင်းကွန်းပုထိုးတော်ကြီးကို တည်ခဲ့သူ။ အမရပူရမြို့တော်ကို တည်ထောင်သူ။",
    traits: "နန်းသက်အရှည်ဆုံး မင်းဖြစ်ပြီး အနုပညာနှင့် ဗိသုကာလက်ရာများကို အားပေးခဲ့သည်။",
    prompt: "King Bodawpaya supervising the construction of Mingun Pahtodawgyi, massive brick structure in background, majestic royal presence, 19th century Myanmar historical scene."
  },
  {
    id: 7,
    name: "ဘကြီးတော်မင်း (စစ်ကိုင်းမင်း)",
    reign: "၁၈၁၉ - ၁၈၃၇",
    achievement: "ပထမအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့ပြီး ရတနာပူရအင်းဝကို ပြန်လည်နန်းစိုက်ခဲ့သည်။",
    traits: "နန်းတွင်းရေး ရှုပ်ထွေးမှုများနှင့် စစ်ပွဲဒဏ်ကို ရင်ဆိုင်ခဲ့ရသူ။",
    prompt: "King Bagyidaw in the Golden Palace of Inwa, royal court setting, traditional silk robes, detailed Burmese architecture, tragic hero aura, 19th century."
  },
  {
    id: 8,
    name: "သာယာဝတီမင်း",
    reign: "၁၈၃၇ - ၁၈၄၆",
    achievement: "နောင်တော် ဘကြီးတော်မင်းကို တော်လှန်၍ နန်းတက်ခဲ့သူ။",
    traits: "ရဲရင့်ပြီး စိတ်အားထက်သန်သူဖြစ်ကာ အမရပူရကို မြို့တော်ပြန်ပြောင်းခဲ့သည်။",
    prompt: "King Tharrawaddy on a royal white elephant, symbol of power, leading a procession in Amarapura, golden umbrellas, 19th century Myanmar royal grandeur."
  },
  {
    id: 9,
    name: "ပုဂံမင်း",
    reign: "၁၈၄၆ - ၁၈၅၃",
    achievement: "ဒုတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ ဖြစ်ပွားခဲ့သည်။",
    traits: "အပျော်အပါး မက်သည်ဟု သမိုင်းတွင် ဖော်ပြခံရပြီး နန်းတွင်းရေး အားနည်းခဲ့သည်။",
    prompt: "A portrait of King Pagan Min in a lush palace garden, ornate traditional clothing, peaceful but distant look, 19th century Burmese aesthetic."
  },
  {
    id: 10,
    name: "မင်းတုန်းမင်း",
    reign: "၁၈၅၃ - ၁၈၇၈",
    achievement: "ပဉ္စမသင်္ဂါယနာတင်ခဲ့သူ။ ရတနာပုံ (မန္တလေး) မြို့တော်ကို တည်ခဲ့သူ။",
    traits: "ငြိမ်းချမ်းရေးကို မြတ်နိုးပြီး နိုင်ငံတော်ကို ခေတ်မီအောင် ပြုပြင်ပြောင်းလဲခဲ့သူ။",
    prompt: "King Mindon Min holding a religious palm leaf manuscript (Pe-sar), Fifth Buddhist Council setting, Kuthodaw Pagoda style background, wise and peaceful expression, royal regalia."
  },
  {
    id: 11,
    name: "သီပေါမင်း",
    reign: "၁၈၇၈ - ၁၈၈၅",
    achievement: "မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်း။ တတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲတွင် ပါဝင်ခဲ့သူ။",
    traits: "ကုန်းဘောင်မင်းဆက် နိဂုံးချုပ်ခဲ့ရပြီး အိန္ဒိယနိုင်ငံ ရတနာဂီရိသို့ ပါတော်မူခဲ့ရသည်။",
    prompt: "The last King of Myanmar, King Thibaw and Queen Supayalat, an emotional departure from the Mandalay Palace, twilight lighting, historical drama style, cinematic sadness."
  }
];

export default function App() {
  const [selectedKing, setSelectedKing] = useState(kingsData[0]);
  const [generatedImages, setGeneratedImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImage = async (king) => {
    if (generatedImages[king.id]) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt: king.prompt }],
          parameters: { sampleCount: 1 }
        })
      });

      if (!response.ok) throw new Error('Failed to generate image');
      
      const result = await response.json();
      const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
      
      setGeneratedImages(prev => ({ ...prev, [king.id]: imageUrl }));
    } catch (err) {
      setError("ပုံထုတ်ရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။ ပြန်လည်ကြိုးစားပေးပါ။");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">ကုန်းဘောင်မင်းဆက် ပြခန်း</h1>
        <p className="text-stone-600 text-lg">ကုန်းဘောင်ခေတ် မင်း (၁၁) ပါး၏ ထူးခြားချက်များ</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
          {kingsData.map((king) => (
            <button
              key={king.id}
              onClick={() => setSelectedKing(king)}
              className={`w-full text-left p-4 rounded-xl transition-all border ${
                selectedKing.id === king.id
                  ? 'bg-amber-100 border-amber-300 shadow-sm translate-x-1'
                  : 'bg-white border-stone-200 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">မင်းဆက် - {king.id}</span>
                  <h3 className="font-bold text-lg">{king.name}</h3>
                </div>
                <ChevronRight className={`w-5 h-5 ${selectedKing.id === king.id ? 'text-amber-600' : 'text-stone-300'}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-amber-900">{selectedKing.name}</h2>
                <div className="flex items-center gap-2 mt-2 text-stone-500">
                  <History className="w-4 h-4" />
                  <span>နန်းသက်: {selectedKing.reign}</span>
                </div>
              </div>
              <button
                onClick={() => generateImage(selectedKing)}
                disabled={loading || generatedImages[selectedKing.id]}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-md ${
                  generatedImages[selectedKing.id]
                    ? 'bg-green-100 text-green-700 border border-green-200 cursor-default'
                    : 'bg-amber-600 text-white hover:bg-amber-700 active:scale-95'
                }`}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
                {generatedImages[selectedKing.id] ? 'ပုံထုတ်ပြီးပါပြီ' : 'AI ပုံထုတ်ရန်'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Display */}
              <div className="aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative flex items-center justify-center">
                {generatedImages[selectedKing.id] ? (
                  <img
                    src={generatedImages[selectedKing.id]}
                    alt={selectedKing.name}
                    className="w-full h-full object-cover animate-in fade-in duration-700"
                  />
                ) : (
                  <div className="text-center p-8 text-stone-400">
                    {loading ? (
                      <div className="space-y-4 flex flex-col items-center">
                        <Loader2 className="w-12 h-12 animate-spin text-amber-600" />
                        <p>AI က သမိုင်းဝင်ပုံရိပ်ကို ဖော်ဆောင်နေပါသည်...</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <ImageIcon className="w-16 h-16 mx-auto opacity-20" />
                        <p>ညာဘက်မှ 'AI ပုံထုတ်ရန်' ကိုနှိပ်ပြီး {selectedKing.name} ၏ သမိုင်းဝင်ပုံရိပ်ကို ကြည့်ရှုပါ။</p>
                      </div>
                    )}
                  </div>
                )}
                {error && <div className="absolute inset-0 bg-red-50/90 flex items-center justify-center p-6 text-red-600 text-center">{error}</div>}
              </div>

              {/* Information */}
              <div className="space-y-6">
                <section>
                  <h4 className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <Info className="w-5 h-5" /> အောင်မြင်မှုများ
                  </h4>
                  <p className="text-stone-700 leading-relaxed bg-amber-50/50 p-4 rounded-lg border border-amber-100">
                    {selectedKing.achievement}
                  </p>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <Info className="w-5 h-5" /> ထူးခြားချက်နှင့် စရိုက်
                  </h4>
                  <p className="text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-200">
                    {selectedKing.traits}
                  </p>
                </section>

                <div className="p-4 bg-stone-900 rounded-lg text-stone-300 text-sm">
                  <p className="italic">"ဤပုံရိပ်သည် သမိုင်းအချက်အလက်များပေါ် အခြေခံ၍ AI မှ ဖန်တီးထားသော စိတ်ကူးယဉ်ပုံရိပ်သာ ဖြစ်ပါသည်။"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-200 text-center text-stone-500 text-sm">
        <p>© ၂၀၂၄ ကုန်းဘောင်မင်းဆက် သမိုင်းမှတ်တမ်း - AI ပြခန်း</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a29e;
        }
      `}} />
    </div>
  );
}