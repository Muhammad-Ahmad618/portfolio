import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { useChatApi } from "./useChatApi";
import "./ChatWidget.css";

/* ─── Constants ──────────────────────────────────────────────────────────── */
const MAX_CHARS = 300;
const COOLDOWN_MS = 3000;

const WELCOME_MSG = {
  id: "welcome",
  role: "assistant",
  text: "Hi! I'm Ahmad's AI assistant. Ask me anything about his background, projects, or what he's looking for. I'm happy to help! 👋",
};

const SUGGESTIONS = [
  "What has Ahmad built?",
  "What is he working on now?",
  "Which roles is he looking for?",
];

/* ─── Small helpers ──────────────────────────────────────────────────────── */

/** Animated "…" while waiting for a response */
function ThinkingDots() {
  return (
    <span
      className="inline-flex items-center gap-[3px] px-1"
      aria-label="Thinking"
    >
      <span className="cw-dot" />
      <span className="cw-dot" />
      <span className="cw-dot" />
    </span>
  );
}

/** A single chat bubble */
function Message({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      {!isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full mr-2 mt-0.5 flex items-center justify-center text-xs font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--grad-1, #ec4899), var(--grad-3, #a855f7))",
          }}
          aria-hidden="true"
        >
          A
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed break-words ${
          isUser
            ? "rounded-tr-sm text-white"
            : "rounded-tl-sm bg-white/8 border border-white/10 text-gray-100"
        }`}
        style={
          isUser
            ? {
                background:
                  "linear-gradient(135deg, var(--grad-1, #ec4899), var(--grad-3, #a855f7))",
              }
            : {}
        }
      >
        {msg.thinking ? <ThinkingDots /> : msg.text}
      </div>
    </div>
  );
}

/** Suggestion chip button */
function SuggestionChip({ text, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={() => onClick(text)}
      disabled={disabled}
      className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 bg-white/5 hover:bg-white/12 hover:border-white/40 hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function ChatWidget() {
  const dialogId = useId();
  const titleId = `cw-title-${dialogId}`;
  const liveRegionId = `cw-live-${dialogId}`;

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const { sendQuestion, abort } = useChatApi();

  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const cooldownTimerRef = useRef(null);

  /* ── Helpers ── */
  const isBusy = loading || cooldown;

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  /* ── Auto-scroll on new messages ── */
  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open, scrollToBottom]);

  /* ── Focus input when panel opens ── */
  useEffect(() => {
    if (open && !closing) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, closing]);

  /* ── Keyboard: Escape closes ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Cleanup on unmount ── */
  useEffect(() => {
    return () => {
      abort();
      clearTimeout(cooldownTimerRef.current);
    };
  }, [abort]);

  /* ── Open / Close ── */
  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  }

  function handleToggle() {
    if (open) {
      handleClose();
    } else {
      setOpen(true);
    }
  }

  /* ── Send logic ── */
  async function doSend(text) {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;

    const userMsg = { id: Date.now(), role: "user", text: trimmed };
    const thinkingMsg = {
      id: "thinking",
      role: "assistant",
      thinking: true,
      text: "",
    };

    setMessages((prev) => [...prev, userMsg, thinkingMsg]);
    setInput("");
    setLoading(true);

    const { answer } = await sendQuestion(trimmed);

    setMessages((prev) =>
      prev
        .filter((m) => m.id !== "thinking")
        .concat({ id: Date.now() + 1, role: "assistant", text: answer }),
    );
    setLoading(false);

    // 3-second cooldown to slow spamming
    setCooldown(true);
    cooldownTimerRef.current = setTimeout(() => {
      setCooldown(false);
      inputRef.current?.focus();
    }, COOLDOWN_MS);
  }

  function handleSend() {
    doSend(input);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleChipClick(text) {
    doSend(text);
  }

  const charCount = input.length;
  const isOverLimit = charCount > MAX_CHARS;

  /* ── Render ── */
  const panelVisible = open || closing;

  return (
    <div className="fixed bottom-18 right-3 sm:bottom-5 sm:right-20 z-[6] font-primary select-none">
      {/* ── Chat panel ── */}
      {panelVisible && (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`absolute bottom-full right-0 mb-3 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0e] shadow-2xl shadow-black/70
            w-80 sm:w-[calc(100vw-2rem)] max-w-[370px]
            ${closing ? "cw-panel-exit" : "cw-panel-enter"}`}
          style={{ height: "min(540px, calc(100svh - 6rem))" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--grad-1, #ec4899) 0%, var(--grad-3, #a855f7) 100%)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                A
              </div>
              <div>
                <h2
                  id={titleId}
                  className="text-white font-semibold text-sm leading-tight"
                >
                  Ask about Ahmad
                </h2>
                <p className="text-white/70 text-[11px]">
                  AI Portfolio Assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close chat panel"
              className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Message area */}
          <div
            ref={scrollRef}
            id={liveRegionId}
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
            className="flex-1 overflow-y-auto px-3 pt-3 pb-2 space-y-0.5"
          >
            {messages.map((msg) => (
              <Message key={msg.id} msg={msg} />
            ))}
          </div>

          {/* Suggestion chips — only show initially (when only welcome msg exists) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-1.5 px-3 pb-2 flex-shrink-0">
              {SUGGESTIONS.map((s) => (
                <SuggestionChip
                  key={s}
                  text={s}
                  onClick={handleChipClick}
                  disabled={isBusy}
                />
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="flex-shrink-0 border-t border-white/8 px-3 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  id="cw-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isBusy}
                  placeholder="Type a question…"
                  rows={1}
                  maxLength={MAX_CHARS + 20}
                  aria-label="Your question"
                  aria-describedby="cw-char-count"
                  className="w-full resize-none rounded-xl border border-white/12 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed leading-relaxed"
                  style={{
                    minHeight: "42px",
                    maxHeight: "110px",
                    overflow: "auto",
                    borderColor: isOverLimit
                      ? "var(--color-destructive, #f87171)"
                      : undefined,
                  }}
                />
              </div>
              <button
                type="button"
                onClick={handleSend}
                disabled={isBusy || !input.trim() || isOverLimit}
                aria-label="Send message"
                className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70"
                style={{
                  background:
                    "linear-gradient(135deg, var(--grad-1, #ec4899), var(--grad-3, #a855f7))",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14.5 1.5L7 9M14.5 1.5L9.5 14.5L7 9M14.5 1.5L1.5 6.5L7 9"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Char counter */}
            <div
              id="cw-char-count"
              className={`text-right text-[10px] mt-1 transition-colors ${
                isOverLimit
                  ? "text-red-400"
                  : charCount > MAX_CHARS * 0.85
                    ? "text-yellow-400/80"
                    : "text-gray-600"
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              {charCount}/{MAX_CHARS}
            </div>
          </div>
        </div>
      )}

      {/* ── FAB toggle button ── */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? dialogId : undefined}
        aria-label={
          open ? "Close portfolio chat" : "Ask my portfolio a question"
        }
        title="Ask about Ahmad"
        className="relative h-11 w-11 cursor-pointer rounded-full p-[2px] shadow-lg shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80"
        style={{
          background:
            "linear-gradient(135deg, var(--grad-1, #ec4899), var(--grad-3, #a855f7))",
        }}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#161515] text-white transition-all duration-200">
          {open ? (
            /* X icon */
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4L13 13M13 4L4 13"
                stroke="white"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Chat bubble icon */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.477 2 2 6.196 2 11.5c0 2.125.754 4.078 2 5.636V21l4.188-2.094A11.01 11.01 0 0 0 12 19c5.523 0 10-4.196 10-9.5S17.523 2 12 2Z"
                fill="none"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="11.5" r="1" fill="white" />
              <circle cx="12" cy="11.5" r="1" fill="white" />
              <circle cx="15.5" cy="11.5" r="1" fill="white" />
            </svg>
          )}
        </span>

        {/* Pulse ring when closed */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{
              background:
                "linear-gradient(135deg, var(--grad-1, #ec4899), var(--grad-3, #a855f7))",
              animationDuration: "2.5s",
            }}
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
