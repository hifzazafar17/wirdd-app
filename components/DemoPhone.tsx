"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  label: string;
  count: number | null;
}

const DEMO_TIMELINE: TimelineEntry[] = [
  { label: "While coding", count: null },
  { label: "Morning walk", count: null },
  { label: "Before sleep", count: null },
];

export default function DemoPhone() {
  const [count, setCount] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [timeline, setTimeline] = useState(DEMO_TIMELINE);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countRef = useRef(0);

  const intervals = [600, 450, 380, 320, 280, 500, 400, 350, 300, 320, 280, 250, 260, 280, 240, 260, 500, 400, 350, 380];

  function tick(step: number) {
    if (step >= 20) {
      animRef.current = setTimeout(resetDemo, 3000);
      return;
    }
    countRef.current += 1;
    const newCount = countRef.current;
    setCount(newCount);
    setTicking(true);
    setTimeout(() => setTicking(false), 150);

    if (newCount === 20) {
      setTimeline((prev) => {
        const next = [...prev];
        next[0] = { ...next[0], count: newCount };
        return next;
      });
    }
    if (newCount === 50) {
      setTimeline((prev) => {
        const next = [...prev];
        next[1] = { ...next[1], count: newCount };
        return next;
      });
    }
    if (newCount === 80) {
      setTimeline((prev) => {
        const next = [...prev];
        next[2] = { ...next[2], count: newCount };
        return next;
      });
    }
    if (newCount < 20) {
      setTimeline((prev) => {
        const next = [...prev];
        if (next[0].count !== null) next[0] = { ...next[0], count: newCount };
        return next;
      });
    }

    animRef.current = setTimeout(() => tick(step + 1), intervals[step % intervals.length]);
  }

  function resetDemo() {
    countRef.current = 0;
    setCount(0);
    setTimeline(DEMO_TIMELINE);
    animRef.current = setTimeout(() => tick(0), 1000);
  }

  useEffect(() => {
    animRef.current = setTimeout(() => tick(0), 1500);
    return () => {
      if (animRef.current) clearTimeout(animRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ringWidth = Math.min((count / 100) * 100, 100);

  return (
    <div
      style={{
        width: "280px",
        background: "#13151f",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "40px",
        padding: "36px 24px 32px",
        position: "relative",
        boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 24,
          background: "#080910",
          borderRadius: "0 0 14px 14px",
        }}
      />

      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#5a5650",
          marginBottom: 28,
          padding: "0 4px",
        }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>

      {/* Session label */}
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#5a5650",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Session active
      </div>

      {/* Counter */}
      <div
        className={ticking ? "count-tick" : ""}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 88,
          fontWeight: 300,
          color: "#F5F0E8",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: 4,
          minHeight: 88,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "color 0.15s",
        }}
      >
        {count}
      </div>

      {/* Arabic phrase */}
      <div
        style={{
          fontFamily: "var(--font-arabic)",
          fontSize: 18,
          color: "#C8A84B",
          textAlign: "center",
          marginBottom: 24,
          letterSpacing: "0.02em",
        }}
      >
        أَسْتَغْفِرُ اللَّهَ
      </div>

      {/* Progress ring */}
      <div
        style={{
          width: "100%",
          height: 4,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 2,
          marginBottom: 24,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${ringWidth}%`,
            background: "linear-gradient(to right, rgba(200,168,75,0.3), #C8A84B)",
            borderRadius: 2,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Timeline entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {timeline.map((entry, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 12,
              padding: "8px 12px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.04)",
              opacity: entry.count !== null ? 1 : 0,
              transform: entry.count !== null ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <span style={{ color: "#5a5650" }}>{entry.label}</span>
            <span style={{ color: "#C8A84B", fontWeight: 500 }}>
              {entry.count ?? "—"}
            </span>
          </div>
        ))}
      </div>

      {/* Mic indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 16,
          fontSize: 12,
          color: "#5a5650",
        }}
      >
        <span
          className="animate-pulse-gold"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#C8A84B",
            display: "inline-block",
          }}
        />
        Listening — on device only
      </div>
    </div>
  );
}