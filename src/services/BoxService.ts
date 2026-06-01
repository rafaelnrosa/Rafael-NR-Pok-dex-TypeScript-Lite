// ============================================================
// Serviço de catálogo local (funções puras com arrays)
// ============================================================

import { PokemonResumo } from "../models/Pokemon";

/**
 * Adiciona um Pokémon ao catálogo, impedindo duplicidade por ID.
 * Retorna o catálogo atualizado.
 */
export function adicionarAoCatalogo(
  catalogo: PokemonResumo[],
  pokemon: PokemonResumo
): PokemonResumo[] {
  const jaExiste = catalogo.some((p) => p.id === pokemon.id);

  if (jaExiste) {
    console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
    return catalogo;
  }

  console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  return [...catalogo, pokemon];
}

/**
 * Lista todos os Pokémon do catálogo no terminal.
 */
export function listarCatalogo(catalogo: PokemonResumo[]): void {
  if (catalogo.length === 0) {
    console.log("[AVISO] Catálogo vazio.");
    return;
  }

  console.log("\n===== CATÁLOGO DE POKÉMON =====");
  catalogo.forEach((p) => {
    const tipos = p.tipos.join(", ");
    console.log(
      `#${p.id} - ${p.nome} | Tipos: ${tipos} | Altura: ${p.altura} | Peso: ${p.peso}`
    );
  });
  console.log("================================\n");
}

/**
 * Remove um Pokémon do catálogo pelo ID.
 * Retorna o catálogo atualizado.
 */
export function removerDoCatalogo(
  catalogo: PokemonResumo[],
  id: number
): PokemonResumo[] {
  const existeNoArray = catalogo.some((p) => p.id === id);

  if (!existeNoArray) {
    console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
    return catalogo;
  }

  const catalogoAtualizado = catalogo.filter((p) => p.id !== id);
  console.log("[OK] Pokémon removido do catálogo.");
  return catalogoAtualizado;
}
