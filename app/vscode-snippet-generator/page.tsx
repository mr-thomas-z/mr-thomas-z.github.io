import type { Metadata } from "next";
import { SnippetGenerator } from "@/components/SnippetGenerator";

export const metadata: Metadata = {
  title: "VS Code Snippet Generator — Thomas Zhu",
  description:
    "Paste code and get a ready-to-use VS Code snippet, with indentation preserved.",
};

export default function VSCodeSnippetGeneratorPage() {
  return (
    <main className="mx-auto w-full max-w-[820px] px-6 md:px-10">
      <SnippetGenerator />
    </main>
  );
}
