"use client";

import DemoPhone from "@/components/DemoPhone";
import ScrollReveal from "@/components/ScrollReveal";
import WaitlistForm from "@/components/WaitlistForm";

/* ─── Reusable Section Label ─── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#C8A84B",
        fontWeight: 500,
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

/* ─── Reusable Section Heading ─── */
function Heading({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <h2
      className="font-display"
      style={{
        fontSize: "clamp(34px, 5vw, 52px)",
        fontWeight: 300,
        lineHeight: 1.15,
        color: "#F5F0E8",
        marginBottom: 20,
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Feature Card ─── */
function Feature({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal${delay ? ` reveal-delay-${delay}` : ""}`}
      style={{
        padding: "32px",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        background: "#0e1018",
        transition: "border-color 0.25s, transform 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(200,168,75,0.25)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: "rgba(200,168,75,0.1)",
          border: "1px solid rgba(200,168,75,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          fontSize: 20,
          fontFamily: "var(--font-arabic)",
          color: "#C8A84B",
        }}
      >
        {icon}
      </div>
      <h3
        className="font-display"
        style={{ fontSize: 20, color: "#F5F0E8", marginBottom: 8, fontWeight: 400 }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#9a9485", lineHeight: 1.65, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

/* ─── Step Card ─── */
function Step({
  number,
  title,
  desc,
  delay = 0,
}: {
  number: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal${delay ? ` reveal-delay-${delay}` : ""}`}
      style={{
        padding: "40px 32px",
        background: "#0e1018",
        transition: "background 0.25s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "#13151f")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "#0e1018")
      }
    >
      <div
        className="font-display"
        style={{
          fontSize: 64,
          fontWeight: 300,
          color: "rgba(200,168,75,0.15)",
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        {number}
      </div>
      <h3
        className="font-display"
        style={{ fontSize: 22, fontWeight: 400, color: "#F5F0E8", marginBottom: 10 }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#9a9485", lineHeight: 1.65, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

/* ─── Pricing Card ─── */
function PricingCard({
  tier,
  price,
  desc,
  features,
  featured = false,
  badge,
  delay = 0,
}: {
  tier: string;
  price: string;
  desc: string;
  features: { text: string; active: boolean }[];
  featured?: boolean;
  badge?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal${delay ? ` reveal-delay-${delay}` : ""}`}
      style={{
        padding: "40px 32px",
        border: featured ? "1px solid #C8A84B" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        background: featured
          ? "linear-gradient(135deg, rgba(200,168,75,0.08) 0%, #0e1018 60%)"
          : "#0e1018",
        position: "relative",
      }}
    >
      {badge && (
        <span
          style={{
            position: "absolute",
            top: -13,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#C8A84B",
            color: "#080910",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "100px",
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </span>
      )}
      <p
        style={{
          fontSize: 12,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#5a5650",
          marginBottom: 16,
          marginTop: badge ? 8 : 0,
        }}
      >
        {tier}
      </p>
      <div
        className="font-display"
        style={{ fontSize: 56, fontWeight: 300, color: "#F5F0E8", lineHeight: 1, marginBottom: 6 }}
      >
        {price}
      </div>
      <p style={{ fontSize: 13, color: "#9a9485", marginBottom: 28, lineHeight: 1.6 }}>
        {desc}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              fontSize: 14,
              color: f.active ? "#E8E4D8" : "#5a5650",
              paddingLeft: 20,
              position: "relative",
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: f.active ? "#C8A84B" : "rgba(200,168,75,0.2)",
              }}
            >
              —
            </span>
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "linear-gradient(to bottom, rgba(8,9,16,0.95) 0%, transparent 100%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <a
          href="#"
          className="font-arabic"
          style={{
            fontSize: 28,
            color: "#C8A84B",
            letterSpacing: "0.02em",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          وِرد
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "#9a9485",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Wird
          </span>
        </a>
        <a
          href="#waitlist"
          style={{
            background: "transparent",
            border: "1px solid rgba(200,168,75,0.25)",
            color: "#C8A84B",
            fontSize: 13,
            padding: "9px 22px",
            borderRadius: "100px",
            cursor: "pointer",
            textDecoration: "none",
            letterSpacing: "0.05em",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(200,168,75,0.15)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C8A84B";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(200,168,75,0.25)";
          }}
        >
          Join Waitlist
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,168,75,0.1)",
            border: "1px solid rgba(200,168,75,0.25)",
            borderRadius: "100px",
            padding: "6px 16px",
            fontSize: 12,
            color: "#E4CC84",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          <span
            className="animate-pulse-gold"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#C8A84B",
              display: "inline-block",
            }}
          />
          Coming to Android · 2026
        </div>

        {/* Arabic title */}
        <div
          className="font-arabic animate-fade-up-1"
          style={{
            fontSize: "clamp(80px, 15vw, 160px)",
            color: "#C8A84B",
            lineHeight: 1,
            marginBottom: 4,
            textShadow: "0 0 60px rgba(200,168,75,0.2)",
          }}
        >
          وِرد
        </div>

        {/* Transliteration */}
        <p
          className="font-display animate-fade-up-2"
          style={{
            fontSize: 18,
            color: "#9a9485",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          Wird
        </p>

        {/* Headline */}
        <h1
          className="font-display animate-fade-up-3"
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#F5F0E8",
            maxWidth: 720,
            marginBottom: 20,
          }}
        >
          Every{" "}
          <em style={{ fontStyle: "italic", color: "#E4CC84" }}>
            Astaghfirullah
          </em>{" "}
          you say — counted.
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-4"
          style={{
            fontSize: 17,
            color: "#9a9485",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          No tapping. No buttons. Just say it — while driving, cooking, coding,
          or falling asleep — and Wird counts it all.
        </p>

        {/* Form */}
        <div className="animate-fade-up-5" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <WaitlistForm source="hero" />
        </div>

        <p
          className="animate-fade-up-5"
          style={{ marginTop: 14, fontSize: 12, color: "#5a5650" }}
        >
          Free forever for istighfar. No spam. Unsubscribe anytime.
        </p>

        {/* Scroll indicator */}
        <div
          className="animate-fade-up-6"
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#5a5650",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <div
            className="animate-scroll-line"
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, #C8A84B, transparent)",
            }}
          />
        </div>
      </section>

      {/* ── DEMO PHONE ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "40px 24px 100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DemoPhone />
      </div>

      {/* ── PROBLEM ── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
          background: "#0e1018",
        }}
      >
        <div
          style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}
        >
          <div className="reveal">
            <Label>The problem</Label>
          </div>
          <blockquote
            className="font-display reveal reveal-delay-1"
            style={{
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#9a9485",
              lineHeight: 1.5,
              maxWidth: 700,
              margin: "0 auto",
              padding: "60px 0",
              borderTop: "1px solid rgba(200,168,75,0.1)",
              borderBottom: "1px solid rgba(200,168,75,0.1)",
              position: "relative",
            }}
          >
            <span
              className="font-arabic"
              style={{
                position: "absolute",
                top: -20,
                left: 0,
                fontSize: 120,
                color: "rgba(200,168,75,0.1)",
                lineHeight: 1,
              }}
            >
              "
            </span>
            "I recite istighfar all day — while driving, while cooking, before
            sleep. But I never know how many times. A counter breaks my flow. A
            tasbih sits on my desk."
          </blockquote>
          <p
            className="reveal reveal-delay-2"
            style={{
              marginTop: 40,
              color: "#9a9485",
              fontSize: 16,
              fontWeight: 300,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            A step counter doesn&apos;t ask you to tap every step.
            <br />
            Wird doesn&apos;t ask you to tap every dhikr.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="reveal">
            <Label>How it works</Label>
          </div>
          <div className="reveal reveal-delay-1">
            <Heading>
              As simple as{" "}
              <em style={{ fontStyle: "italic", color: "#E4CC84" }}>speaking.</em>
            </Heading>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 2,
              marginTop: 60,
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Step
              number="١"
              title="Start a session"
              desc="One tap. The app listens through your phone mic, earbuds, or Bluetooth headset. A pinned notification appears — put your phone down and go."
            />
            <Step
              number="٢"
              title="Say it naturally"
              delay={1}
              desc="Drive. Cook. Code. Walk. Every time you say 'Astaghfirullah' — loudly, quietly, or in a whisper — the counter ticks. No tapping required."
            />
            <Step
              number="٣"
              title="See your day"
              delay={2}
              desc='Your dashboard shows how many times, at what hour, on which days. "You recited 847 times last Tuesday — mostly between Asr and Maghrib."'
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
          background: "#0e1018",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="reveal">
            <Label>Features</Label>
          </div>
          <div className="reveal reveal-delay-1">
            <Heading>
              Built for{" "}
              <em style={{ fontStyle: "italic", color: "#E4CC84" }}>
                real dhikr.
              </em>
            </Heading>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginTop: 60,
            }}
          >
            <Feature
              icon="🎙"
              title="On-device voice detection"
              desc="No audio ever leaves your phone. The recognition model runs fully on-device — private, offline, fast. Your recitations are between you and Allah."
            />
            <Feature
              icon="م"
              title="Arabic-tuned for your accent"
              delay={1}
              desc="Trained on Urdu-speaker, Arab-speaker, and South Asian accents. Slow, fast, and whispered variants. Works with 'Astaghfirullahal azeem' too."
            />
            <Feature
              icon="↗"
              title="Pinned notification counter"
              delay={2}
              desc="Android notification bar shows your live count with a toggle. Like a step counter. Tap to pause. Tap to resume. No need to open the app."
            />
            <Feature
              icon="🌙"
              title="Pre-sleep mode"
              desc="Start a bedtime session. The mic stays on low power. If you fall asleep mid-recitation, Wird saves your count before sleep silence kicks in."
            />
            <Feature
              icon="📊"
              title="Time-of-day dashboard"
              delay={1}
              desc="See when your heart is most alive with dhikr. Morning commute. After Fajr. Before sleep. Your personal rhythm, visualised."
            />
            <Feature
              icon="🔗"
              title="Custom phrases (Premium)"
              delay={2}
              desc="Add SubhanAllah, Alhamdulillah, Allahu Akbar, salawat, or any du'a. Train your personal voice profile for even better accuracy."
            />
          </div>
        </div>
      </section>

      {/* ── PRIVACY STRIP ── */}
      <div
        className="reveal"
        style={{
          background: "#0e1018",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "40px 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            justifyContent: "center",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {[
            "No audio stored on servers",
            "100% on-device processing",
            "No account required to start",
            "Works offline",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: "#9a9485",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "rgba(200,168,75,0.1)",
                  border: "1px solid rgba(200,168,75,0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: "#C8A84B",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRICING ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="reveal">
            <Label>Pricing</Label>
          </div>
          <div className="reveal reveal-delay-1">
            <Heading center>
              Priced for{" "}
              <em style={{ fontStyle: "italic", color: "#E4CC84" }}>
                the Ummah.
              </em>
            </Heading>
          </div>
          <p
            className="reveal reveal-delay-2"
            style={{
              color: "#9a9485",
              fontSize: 16,
              marginBottom: 0,
              fontWeight: 300,
            }}
          >
            Free for istighfar. One-time lifetime unlock. No subscriptions — ever.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginTop: 60,
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <PricingCard
              tier="Free"
              price="$0"
              desc="Forever free. No credit card."
              features={[
                { text: "Istighfar counting", active: true },
                { text: "Daily dashboard", active: true },
                { text: "Streaks + weekly chart", active: true },
                { text: "Pinned notification", active: true },
                { text: "Custom phrases", active: false },
                { text: "Voice enrollment", active: false },
                { text: "Pre-sleep mode", active: false },
              ]}
            />
            <PricingCard
              tier="Pro"
              price="$14.99"
              desc="One time. All future features included."
              featured
              badge="Lifetime access"
              delay={1}
              features={[
                { text: "Everything in Free", active: true },
                { text: "Custom phrases (any dhikr)", active: true },
                { text: "Personal voice enrollment", active: true },
                { text: "Pre-sleep mode", active: true },
                { text: "Smartwatch support", active: true },
                { text: "Export + backup", active: true },
                { text: "All future features", active: true },
              ]}
            />
          </div>
          <p
            className="reveal"
            style={{ marginTop: 20, fontSize: 12, color: "#5a5650" }}
          >
            Students &amp; teachers: DM for a discounted rate. 🤲
          </p>
        </div>
      </section>

      {/* ── FINAL WAITLIST ── */}
      <section
        id="waitlist"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "120px 24px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,168,75,0.06) 0%, transparent 70%)",
        }}
      >
        <div className="reveal">
          <Label>Early access</Label>
          <Heading center>
            Be among the first
            <br />
            to{" "}
            <em style={{ fontStyle: "italic", color: "#E4CC84" }}>
              never miss a dhikr.
            </em>
          </Heading>
          <p
            style={{
              color: "#9a9485",
              fontSize: 16,
              marginBottom: 40,
              fontWeight: 300,
            }}
          >
            Android first. Free forever for istighfar. Launching 2026.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WaitlistForm
              source="bottom"
              buttonText="Notify Me"
              successMessage="JazakAllah khair. You're on the list."
            />
          </div>
          <p style={{ marginTop: 14, fontSize: 12, color: "#5a5650" }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "40px 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="font-arabic"
          style={{ fontSize: 36, color: "#C8A84B", marginBottom: 12, opacity: 0.6 }}
        >
          وِرد
        </div>
        <p style={{ fontSize: 12, color: "#5a5650", lineHeight: 1.8 }}>
          Built with love for the Ummah. By a Muslim, for Muslims.
          <br />
          Karachi, Pakistan · 2026
          <br />
          <br />
          <a
            href="mailto:hello@wird.app"
            style={{ color: "#5a5650", textDecoration: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#C8A84B")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#5a5650")
            }
          >
            hello@wird.app
          </a>{" "}
          ·{" "}
          <a
            href="#"
            style={{ color: "#5a5650", textDecoration: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#C8A84B")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#5a5650")
            }
          >
            Privacy
          </a>{" "}
          ·{" "}
          <a
            href="#"
            style={{ color: "#5a5650", textDecoration: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#C8A84B")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#5a5650")
            }
          >
            Twitter / X
          </a>
        </p>
      </footer>
    </>
  );
}