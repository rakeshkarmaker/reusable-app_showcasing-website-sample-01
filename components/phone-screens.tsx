import { Bell, MessageCircle, Users, Send, Sun } from "lucide-react";
import Image from "next/image";

function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[11px] font-semibold text-ink/80">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="text-[10px]">●●●●</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
}

function BottomNav({ active }: { active: "devotion" | "ask" | "community" }) {
  const items = [
    { id: "devotion", label: "Devotion", icon: "✝" },
    { id: "ask", label: "Ask", icon: <MessageCircle className="size-4" /> },
    { id: "community", label: "Community", icon: <Users className="size-4" /> },
  ] as const;
  return (
    <div className="absolute bottom-4 left-3 right-3 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-full p-1.5 flex items-center justify-between z-40">
      {items.map((it) => {
        const isActive = active === it.id;
        return (
          <div
            key={it.id}
            className={`flex items-center gap-1.5 rounded-full transition-all cursor-pointer hover:bg-sage/10 ${
              isActive
                ? "bg-sage text-white px-3 py-1.5 hover:bg-sage/90"
                : "size-9 justify-center text-ink/40 hover:text-ink/60"
            }`}
          >
            <span className="text-sm flex items-center justify-center w-4">
              {it.icon}
            </span>
            {isActive && (
              <span className="text-[11px] font-medium">{it.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function VerseCard() {
  return (
    <div className="rounded-2xl overflow-hidden verse-gradient">
      <div className="px-4 pt-4 pb-2 text-center">
        <h3 className="text-sm font-semibold text-ink">Bible Verse</h3>
        <p className="font-light text-[15px] leading-snug mt-3 text-ink">
          Be still, and know that
          <br />I am God.
        </p>
        <p className="text-[11px] text-ink/60 mt-2">— Psalm 46:10</p>
      </div>
      <div className="h-8 hill mt-3" />
    </div>
  );
}

export function ScreenSplash() {
  return (
    <div className="h-full w-full bg-cream flex flex-col">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center px-6 pt-6">
        <div className="flex-1 flex items-center justify-center w-full">
          <Image 
            src="/mercy_logo_nobg.png" 
            alt="Mercy Logo" 
            width={320} 
            height={112} 
            className="w-60 h-auto object-contain translate-x-3" 
          />
        </div>
        <div className="w-full flex items-center mt-2 mb-4">
          <div className="flex-1 h-px bg-ink/15" />
          <span className="mx-2 text-gold">★</span>
          <div className="flex-1 h-px bg-ink/15" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-light text-[17px] leading-snug text-ink">
              "For we walk by faith,
              <br />
              not by sight."
            </p>
            <p className="text-[11px] text-ink/55 mt-3">2 Corinthians 5:7</p>
          </div>
        </div>
        <button className="w-full bg-sage text-white rounded-full py-3 text-sm font-medium mb-4 hover:bg-sage/90 active:scale-95 transition-all shadow-sm hover:shadow-md">
          Start Today
        </button>
      </div>
    </div>
  );
}

export function ScreenDevotion() {
  return (
    <div className="h-full w-full bg-cream flex flex-col relative">
      <StatusBar />
      <div className="px-4 pt-2 pb-2 flex items-center gap-3">
        <Sun className="size-7 text-gold fill-gold" />
        <div className="flex-1">
          <h2 className="text-base font-bold text-ink leading-tight">
            Good Morning
          </h2>
          <p className="text-[10px] text-ink/60">Your daily moment with God</p>
        </div>
        <div className="size-8 bg-white rounded-full flex items-center justify-center relative">
          <Bell className="size-4 text-sage" />
          <span className="absolute top-1 right-1 size-1.5 bg-red-500 rounded-full" />
        </div>
      </div>
      <div className="px-4 mt-2">
        <VerseCard />
      </div>
      <div className="px-4 mt-3 flex-1 overflow-hidden">
        <h3 className="text-sage text-sm font-semibold">Reflection</h3>
        <div className="bg-card rounded-xl p-3 mt-1.5">
          <p className="text-[10px] leading-relaxed text-ink/80">
            In seasons of uncertainty, we are tempted to fill the silence with
            worry. Yet God's invitation remains tender — be still.
          </p>
        </div>
        <h3 className="text-sage text-sm font-semibold mt-3">Today's Prayer</h3>
        <div className="bg-card rounded-xl p-3 mt-1.5">
          <p className="text-[10px] leading-relaxed italic text-ink/80">
            "Lord, help me find quiet moments in the chaos. Let your peace wash
            over my anxious thoughts. Amen."
          </p>
        </div>
        <button className="w-full bg-sage text-white rounded-full py-2.5 text-xs font-medium mt-3 hover:bg-sage/90 active:scale-95 transition-all shadow-sm hover:shadow-md">
          Share Verse
        </button>
      </div>
      <BottomNav active="devotion" />
      <div className="h-14" />
    </div>
  );
}

export function ScreenAsk() {
  return (
    <div className="h-full w-full bg-cream flex flex-col relative">
      <StatusBar />
      <div className="text-center pt-3 pb-2">
        <h2 className="text-lg font-bold text-ink">Ask</h2>
        <p className="text-[10px] text-ink/60">Seek wisdom, find guidance</p>
      </div>
      <div className="px-4 flex justify-end mt-2">
        <div className="bg-sage text-white rounded-2xl px-4 py-2 text-xs">
          I feel anxious
        </div>
      </div>
      <div className="px-4 mt-3">
        <div className="rounded-2xl overflow-hidden verse-gradient">
          <div className="px-3 pt-3 pb-2 text-center">
            <p className="text-xs font-semibold text-ink">
              — God's Word For You —
            </p>
            <p className="font-light text-[14px] leading-snug mt-2 text-ink">
              Be still, and know that
              <br />I am God.
            </p>
            <p className="text-[10px] text-ink/60 mt-1.5">— Psalm 46:10</p>
          </div>
          <div className="h-6 hill mt-2" />
        </div>
      </div>
      <div className="px-4 mt-3 flex-1 overflow-hidden">
        <div className="bg-card rounded-xl p-3">
          <p className="text-[10px] font-semibold text-sage tracking-wider">
            GUIDANCE
          </p>
          <p className="text-[10px] leading-relaxed text-ink/80 mt-1.5">
            It is normal to feel anxious. Anxiety is human, not a sign of weak
            faith. God invites you to bring those feelings to Him.
          </p>
        </div>
      </div>
      <div className="px-3 mb-2">
        <div className="bg-card rounded-full flex items-center gap-2 px-3 py-2">
          <MessageCircle className="size-3.5 text-sage" />
          <span className="text-[11px] text-ink/40 flex-1">
            Ask something...
          </span>
          <div className="size-6 bg-sage rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-sm">
            <Send className="size-3 text-white" />
          </div>
        </div>
      </div>
      <BottomNav active="ask" />
      <div className="h-14" />
    </div>
  );
}

export function ScreenCommunity() {
  return (
    <div className="h-full w-full bg-cream flex flex-col relative">
      <StatusBar />
      <div className="text-center pt-3 pb-2">
        <h2 className="text-lg font-bold text-ink">Prayer Community</h2>
        <p className="text-[10px] text-ink/60">
          Pray together, support one another
        </p>
      </div>
      <div className="px-4 mt-4">
        <p className="text-[11px] text-ink text-center mb-3">
          You are not alone. We are praying together.
        </p>
        <button className="w-full bg-sage text-white rounded-full py-2.5 text-xs font-medium hover:bg-sage/90 active:scale-95 transition-all shadow-sm hover:shadow-md">
          Share a Prayer Request
        </button>
      </div>
      <div className="px-4 mt-3 space-y-2 flex-1 overflow-hidden">
        {[false, true].map((prayed, i) => (
          <div key={i} className="bg-card rounded-xl p-3">
            <p className="text-[11px] font-semibold text-ink">
              Please pray for healing for my mother
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1.5">
                <div className="size-5 rounded-full bg-gold/40" />
                <div className="size-5 rounded-full bg-muted -ml-2 flex items-center justify-center text-[8px] font-bold text-ink/70">
                  +4
                </div>
                <span className="text-[9px] text-ink/50 ml-1">
                  people prayed
                </span>
              </div>
              <div
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] ${
                  prayed
                    ? "bg-sage/20 text-sage font-semibold"
                    : "bg-muted text-ink/60"
                }`}
              >
                <span>🙏</span>
                <span>{prayed ? "Prayed" : "Pray"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav active="community" />
      <div className="h-14" />
    </div>
  );
}
