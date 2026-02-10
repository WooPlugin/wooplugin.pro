import { useState, useEffect } from 'preact/hooks';
import { Check, ScanSearch, Lock, Rss, ChevronLeft, ChevronRight, ShieldCheck, BarChart3, Tag, Globe, RefreshCw } from 'lucide-preact';

export default function HeroDashboardSlider() {
  const [active, setActive] = useState(0);
  const total = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => setActive((prev) => (prev + dir + total) % total);

  const links = ['/accessibility-scanner', '/google-shopping'];

  const handleCardClick = () => {
    window.location.href = links[active];
  };

  return (
    <div class="relative w-full max-w-md">
      {/* Card container with rotation + hover scale */}
      <div
        class="transition-all duration-500 ease-out cursor-pointer hover:scale-[1.03]"
        style={{ transform: active === 0 ? 'rotate(-1.5deg)' : 'rotate(2deg)' }}
        onClick={handleCardClick}
      >
        {/* Browser chrome */}
        <div class="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden hover:shadow-[0_25px_60px_-12px_rgba(127,84,179,0.25)] transition-shadow duration-300">
          {/* Title bar */}
          <div class="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-400" />
              <div class="w-3 h-3 rounded-full bg-amber-400" />
              <div class="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="px-4 py-1 bg-white rounded-md border border-gray-200 text-[11px] text-[#6b7280] flex items-center gap-1.5">
                <Lock class="w-3 h-3 text-[#00a32a]" />
                yoursite.com/wp-admin
              </div>
            </div>
          </div>

          {/* Slide content */}
          <div class="p-5 min-h-[270px]">
            {active === 0 ? <AccessibilitySlide /> : <GoogleShoppingSlide />}
          </div>
        </div>
      </div>

      {/* Side arrows */}
      <button
        onClick={() => go(-1)}
        class="absolute top-1/2 -left-12 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-[#6b7280] hover:text-[#7f54b3] hover:border-[#7f54b3]/30 transition-colors z-10"
        aria-label="Previous plugin"
      >
        <ChevronLeft class="w-4 h-4" />
      </button>
      <button
        onClick={() => go(1)}
        class="absolute top-1/2 -right-12 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-[#6b7280] hover:text-[#7f54b3] hover:border-[#7f54b3]/30 transition-colors z-10"
        aria-label="Next plugin"
      >
        <ChevronRight class="w-4 h-4" />
      </button>

      {/* Dots */}
      <div class="flex items-center justify-center gap-2 mt-5">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            class={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'bg-[#7f54b3] w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={i === 0 ? 'Accessibility Scanner' : 'Google Shopping Feed'}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Accessibility Scanner card ── */
function AccessibilitySlide() {
  return (
    <div class="space-y-4">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00a32a] to-[#00802b] flex items-center justify-center">
            <ScanSearch class="w-3.5 h-3.5 text-white" />
          </div>
          <span class="text-sm font-bold text-[#1e1e1e]">Accessibility Scanner</span>
        </div>
        <span class="text-[10px] font-semibold text-white bg-[#00a32a] px-2 py-0.5 rounded-full">
          Score: 94
        </span>
      </div>

      {/* Score bar */}
      <div class="bg-[#f9fafb] rounded-xl p-3.5">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-[#1e1e1e]">WCAG 2.2 Compliance</span>
          <span class="text-lg font-bold text-[#00a32a]">94<span class="text-xs font-normal text-[#6b7280]">/100</span></span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-gradient-to-r from-[#00a32a] to-[#34d058] h-2 rounded-full" style="width: 94%" />
        </div>
        <div class="flex items-center justify-between mt-2 text-[10px] text-[#6b7280]">
          <span class="flex items-center gap-1"><ShieldCheck class="w-3 h-3" /> 32 checks passed</span>
          <span>3 issues found</span>
        </div>
      </div>

      {/* Issue list */}
      <div class="space-y-1.5">
        <p class="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">Recent issues</p>
        <div class="flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-100">
          <div class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span class="text-[11px] text-[#1e1e1e] flex-1 truncate">Missing alt text on 2 images</span>
          <span class="text-[10px] font-semibold text-[#7f54b3] bg-[#7f54b3]/10 px-1.5 py-0.5 rounded">Fix</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-100">
          <div class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span class="text-[11px] text-[#1e1e1e] flex-1 truncate">Low contrast on footer links</span>
          <span class="text-[10px] font-semibold text-[#7f54b3] bg-[#7f54b3]/10 px-1.5 py-0.5 rounded">Fix</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded-lg bg-[#00a32a]/5 border border-[#00a32a]/10">
          <div class="w-1.5 h-1.5 rounded-full bg-[#00a32a] flex-shrink-0" />
          <span class="text-[11px] text-[#1e1e1e] flex-1 truncate">Form labels — all passed</span>
          <Check class="w-3 h-3 text-[#00a32a] flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

/* ── Google Shopping Feed card ── */
function GoogleShoppingSlide() {
  return (
    <div class="space-y-4">
      {/* Header */}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7f54b3] to-[#96588a] flex items-center justify-center">
            <Rss class="w-3.5 h-3.5 text-white" />
          </div>
          <span class="text-sm font-bold text-[#1e1e1e]">Google Shopping Feed</span>
        </div>
        <span class="text-[10px] font-semibold text-white bg-[#7f54b3] px-2 py-0.5 rounded-full flex items-center gap-1">
          <RefreshCw class="w-2.5 h-2.5" /> Synced
        </span>
      </div>

      {/* Stats grid */}
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-[#7f54b3]/5 rounded-xl p-2.5 text-center">
          <p class="text-lg font-bold text-[#7f54b3]">1,247</p>
          <p class="text-[10px] text-[#6b7280]">Products</p>
        </div>
        <div class="bg-[#7f54b3]/5 rounded-xl p-2.5 text-center">
          <p class="text-lg font-bold text-[#7f54b3]">6</p>
          <p class="text-[10px] text-[#6b7280]">Channels</p>
        </div>
        <div class="bg-[#00a32a]/5 rounded-xl p-2.5 text-center">
          <p class="text-lg font-bold text-[#00a32a]">99%</p>
          <p class="text-[10px] text-[#6b7280]">Valid</p>
        </div>
      </div>

      {/* Product table */}
      <div class="space-y-1.5">
        <p class="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">Feed status</p>
        <div class="rounded-xl border border-gray-200 overflow-hidden">
          <div class="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center px-3 py-1.5 bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-[#6b7280] uppercase tracking-wider">
            <span>Channel</span>
            <span>Products</span>
            <span>Status</span>
          </div>
          {[
            { name: 'Google Shopping', icon: Globe, count: '1,247', ok: true },
            { name: 'Facebook Catalog', icon: BarChart3, count: '1,190', ok: true },
            { name: 'Bing Shopping', icon: Tag, count: '1,244', ok: false },
          ].map((ch) => (
            <div key={ch.name} class="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center px-3 py-2 border-b last:border-b-0 border-gray-50 text-[11px] text-[#1e1e1e]">
              <span class="flex items-center gap-1.5 truncate">
                <ch.icon class="w-3 h-3 text-[#6b7280] flex-shrink-0" />
                {ch.name}
              </span>
              <span class="text-[#6b7280] tabular-nums">{ch.count}</span>
              {ch.ok ? (
                <span class="w-4 h-4 rounded-full bg-[#00a32a]/10 flex items-center justify-center">
                  <Check class="w-2.5 h-2.5 text-[#00a32a]" />
                </span>
              ) : (
                <span class="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">Pending</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
