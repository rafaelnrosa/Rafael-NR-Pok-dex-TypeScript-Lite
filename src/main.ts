// ============================================================
// Ponto de entrada da aplicação - Pokédex TypeScript Lite
// ============================================================

import { executarPokedex } from "./controllers/TerminalController";

executarPokedex().catch((erro) => {
  console.error("[ERRO FATAL]", erro);
  process.exit(1);
});
