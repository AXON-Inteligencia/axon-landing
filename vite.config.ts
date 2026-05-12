import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
    if (!fs.existsSync(LOG_DIR)) {
          fs.mkdirSync(LOG_DIR, { recursive: true });
    }
}

function trimLogFile(logPath: string, maxSize: number) {
    try {
          if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
                  return;
          }

      const lines = fs.readFileSync(logPath, "utf-8").split("\n");
          const keptLines: string[] = [];
          let keptBytes = 0;

      // Keep newest lines (from end) that fit within 60% of maxSize
      const targetSize = TRIM_TARGET_BYTES;
          for (let i = lines.length - 1; i >= 0; i--) {
                  const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
                  if (keptBytes + lineBytes > targetSize) break;
                  keptLines.unshift(lines[i]);
                  keptBytes += lineBytes;
          }

      fs.writeFileSync(logPath, keptLin
