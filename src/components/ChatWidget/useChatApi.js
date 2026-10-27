import { useCallback, useRef } from "react";

const API_URL = import.meta.env.VITE_CHAT_API_URL;
const TIMEOUT_MS = 25_000;

const NETWORK_ERROR_MSG =
  "Can't reach the assistant. Please check your connection or email Ahmad instead.";
const RATE_LIMIT_MSG =
  "Too many questions right now, please try again in a minute.";

/**
 * Returns a `sendQuestion(question)` function that resolves to
 * `{ answer: string }`, handling timeouts, rate limits, and network errors.
 */
export function useChatApi() {
  const abortRef = useRef(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const sendQuestion = useCallback(async (question) => {
    // Cancel any previous in-flight request
    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    // Auto-abort after 25 seconds
    const timerId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        signal: controller.signal,
      });

      clearTimeout(timerId);

      if (response.status === 429) {
        return { answer: RATE_LIMIT_MSG };
      }

      const data = await response.json();

      // 400, 500, 502 — server returns { answer: "..." }
      if (!response.ok) {
        return {
          answer: data.answer ?? "Something went wrong. Please try again.",
        };
      }

      return { answer: data.answer };
    } catch {
      clearTimeout(timerId);
      return { answer: NETWORK_ERROR_MSG };
    }
  }, []);

  return { sendQuestion, abort };
}
