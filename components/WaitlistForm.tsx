"use client";

import { useState } from "react";

interface WaitlistFormProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}

export default function WaitlistForm({
  source = "landing",
  placeholder = "your@email.com",
  buttonText = "Join Waitlist",
  successMessage = "JazakAllah khair. You're on the list — we'll let you know first.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(200, 168, 75, 0.1)",
          border: "1px solid rgba(200, 168, 75, 0.25)",
          borderRadius: "12px",
          padding: "16px 24px",
          textAlign: "center",
          color: "#E4CC84",
          fontSize: "14px",
          maxWidth: "440px",
          width: "100%",
          animation: "fadeUp 0.4s ease",
        }}
      >
        ✦ &nbsp; {successMessage}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        maxWidth: "440px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        autoComplete="email"
        disabled={status === "loading"}
        style={{
          flex: 1,
          minWidth: "200px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "100px",
          padding: "14px 22px",
          color: "#F5F0E8",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(200,168,75,0.4)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "rgba(200,168,75,0.6)" : "#C8A84B",
          border: "none",
          borderRadius: "100px",
          padding: "14px 28px",
          color: "#080910",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 500,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
        }}
        onMouseEnter={(e) => {
          if (status !== "loading")
            (e.target as HTMLButtonElement).style.background = "#E4CC84";
        }}
        onMouseLeave={(e) => {
          if (status !== "loading")
            (e.target as HTMLButtonElement).style.background = "#C8A84B";
        }}
      >
        {status === "loading" ? "Joining…" : buttonText}
      </button>
      {status === "error" && (
        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "13px",
            color: "#E2645A",
          }}
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}