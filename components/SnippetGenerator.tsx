"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Check, Copy } from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type IndentSize = 2 | 4;

function escapeJsonString(str: string) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildSnippet(
  description: string,
  prefix: string,
  code: string,
  indentSize: IndentSize,
) {
  const lines = code.split("\n");
  if (lines.length > 0 && lines[lines.length - 1] === "") {
    lines.pop();
  }

  const bodyLines = lines.map((line) => {
    if (line === "") return { text: "", depth: 0 };

    const match = line.match(/^( +)/);
    let depth = 0;
    let content = line;

    if (match) {
      const spaces = match[1].length;
      depth = Math.floor(spaces / indentSize);
      content = line.substring(depth * indentSize);
    }

    content = content.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const tabs = "\\t".repeat(depth);

    return { text: tabs + content, depth };
  });

  const baseIndent = "    ";
  let bodyStr = "[\n";

  bodyLines.forEach((item, i) => {
    const extraIndent = "  ".repeat(item.depth);
    const comma = i < bodyLines.length - 1 ? "," : "";
    bodyStr +=
      baseIndent + extraIndent + '"' + item.text + '"' + comma + "\n";
  });

  bodyStr += "  ]";

  return (
    '"' +
    escapeJsonString(description) +
    '": {\n' +
    '  "prefix": "' +
    escapeJsonString(prefix) +
    '",\n' +
    '  "body": ' +
    bodyStr +
    ",\n" +
    '  "description": "' +
    escapeJsonString(description) +
    '"\n' +
    "}"
  );
}

export function SnippetGenerator() {
  const prefersReduced = useReducedMotion();

  const descriptionId = useId();
  const prefixId = useId();
  const indentId = useId();
  const codeId = useId();

  const [description, setDescription] = useState("");
  const [prefix, setPrefix] = useState("");
  const [indentSize, setIndentSize] = useState<IndentSize>(2);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const codeRef = useRef<HTMLTextAreaElement | null>(null);

  const generate = useCallback(() => {
    const trimmedDescription = description.trim();
    const effectivePrefix = prefix.trim() || trimmedDescription;

    if (!trimmedDescription) {
      setError("Description is required.");
      setOutput(null);
      return;
    }
    if (!code) {
      setError("Code snippet is required.");
      setOutput(null);
      return;
    }

    setError(null);
    setOutput(
      buildSnippet(trimmedDescription, effectivePrefix, code, indentSize),
    );
  }, [description, prefix, code, indentSize]);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        generate();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [generate]);

  const handleCodeKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const next = code.substring(0, start) + "  " + code.substring(end);
      setCode(next);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const fieldClass =
    "w-full rounded-md border border-rule bg-paper-deep/30 px-3.5 py-2.5 font-sans text-[0.9rem] text-ink placeholder:text-muted/70 transition-colors focus:border-ink/40 focus:bg-paper focus:outline-none";

  return (
    <>
      <header className="pt-16 pb-10 md:pt-24 md:pb-16">
        <Reveal>
          <Link
            href="/"
            className="eyebrow mb-10 inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={1.6} />
            Back
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display tracking-display text-[clamp(2.25rem,6vw,4rem)] leading-[1] text-ink">
            VS Code{" "}
            <span
              className="italic text-accent"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              snippet
            </span>{" "}
            generator
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[52ch] text-base leading-[1.55] text-ink-soft md:text-lg">
            Paste code, get a ready-to-use VS Code snippet — indentation
            preserved, special characters escaped.
          </p>
        </Reveal>
      </header>

      <section className="pb-10 md:pb-24">
        <Reveal>
          <SectionHeader index="01" label="Input" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_180px]">
            <div>
              <label
                htmlFor={descriptionId}
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
              >
                Description
              </label>
              <input
                id={descriptionId}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Secret Manager"
                className={fieldClass}
                spellCheck={false}
              />
            </div>

            <div>
              <label
                htmlFor={prefixId}
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
              >
                Prefix{" "}
                <span className="text-muted/60 normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <input
                id={prefixId}
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                placeholder="Uses description if empty"
                className={fieldClass}
                spellCheck={false}
              />
            </div>

            <div>
              <label
                htmlFor={indentId}
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
              >
                Indentation
              </label>
              <select
                id={indentId}
                value={indentSize}
                onChange={(e) =>
                  setIndentSize(Number(e.target.value) as IndentSize)
                }
                className={`${fieldClass} cursor-pointer appearance-none bg-[length:12px] bg-[right_14px_center] bg-no-repeat pr-9`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b6b6f' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                }}
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
              </select>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <label
              htmlFor={codeId}
              className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
            >
              Code Snippet
            </label>
            <textarea
              id={codeId}
              ref={codeRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleCodeKeyDown}
              placeholder="Paste your code here..."
              spellCheck={false}
              className={`${fieldClass} min-h-[240px] resize-y font-mono text-[0.82rem] leading-[1.7]`}
              style={{ tabSize: 2 }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={generate}
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 font-sans text-[0.85rem] font-medium text-paper transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
            >
              Generate
            </button>
            <span className="font-mono text-[0.72rem] text-muted">
              or press{" "}
              <kbd className="rounded border border-rule bg-paper-deep/40 px-1.5 py-[1px] font-mono text-[0.7rem] text-ink-soft">
                ⌘
              </kbd>
              <span className="mx-0.5">/</span>
              <kbd className="rounded border border-rule bg-paper-deep/40 px-1.5 py-[1px] font-mono text-[0.7rem] text-ink-soft">
                Ctrl
              </kbd>
              <span className="mx-1">+</span>
              <kbd className="rounded border border-rule bg-paper-deep/40 px-1.5 py-[1px] font-mono text-[0.7rem] text-ink-soft">
                Enter
              </kbd>
            </span>
          </div>
        </Reveal>

        <AnimatePresence>
          {error && (
            <motion.div
              key="error"
              initial={prefersReduced ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-6 rounded-md border border-accent/30 bg-accent/5 px-4 py-3 font-mono text-[0.78rem] text-accent"
              role="alert"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {output && (
          <motion.section
            key="output"
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pb-20 md:pb-32"
          >
            <SectionHeader index="02" label="Output" />

            <div className="relative">
              <button
                type="button"
                onClick={copy}
                className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors ${
                  copied
                    ? "border-accent/40 bg-accent/5 text-accent"
                    : "border-rule bg-paper text-muted hover:border-ink/30 hover:text-ink"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" strokeWidth={2} /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" strokeWidth={1.8} /> Copy
                  </>
                )}
              </button>

              <pre className="overflow-x-auto rounded-md border border-rule bg-paper-deep/40 p-5 pr-24 font-mono text-[0.8rem] leading-[1.7] text-ink-soft">
                {output}
              </pre>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
