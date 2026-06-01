// ============================================================
// Controller de interface com o terminal
// ============================================================

import { CatalogoPokemon } from "../models/Pokemon";
import { buscarPokemon } from "../services/PokeApiService";
import { exibirSeparador, capitalizarNome } from "../utils/textFormatters";

/**
 * Executa o fluxo completo da Pokédex no terminal:
 * busca, adiciona, lista, remove e lista novamente.
 */
export async function executarPokedex(): Promise<void> {
  const catalogo = new CatalogoPokemon();

  exibirSeparador("POKÉDEX TYPESCRIPT LITE");

  // ── Buscar e adicionar Pokémon ──────────────────────────────
  const nomesBusca = ["pikachu", "charizard", "bulbasaur", "mewtwo", "pokemon-inexistente"];

  console.log("\n[INFO] Buscando Pokémon na PokeAPI...\n");

  for (const nome of nomesBusca) {
    const pokemon = await buscarPokemon(nome);
    if (pokemon) {
      console.log(
        `[OK] Pokémon encontrado: ${capitalizarNome(pokemon.nome)} (ID: ${pokemon.id})`
      );
      catalogo.adicionar(pokemon);
    }
  }

  // ── Testar duplicidade ──────────────────────────────────────
  console.log("\n[INFO] Testando duplicidade (adicionando pikachu novamente)...");
  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado) {
    catalogo.adicionar(pikachuDuplicado);
  }

  // ── Listar catálogo ─────────────────────────────────────────
  console.log("\n[INFO] Listando catálogo atual:");
  catalogo.listar();

  // ── Remover Pokémon ─────────────────────────────────────────
  console.log("[INFO] Removendo Charizard (ID: 6) do catálogo...");
  catalogo.remover(6);

  console.log("\n[INFO] Tentando remover ID inexistente (999)...");
  catalogo.remover(999);

  // ── Listar catálogo após remoção ────────────────────────────
  console.log("\n[INFO] Catálogo após remoção:");
  catalogo.listar();

  // ── Estatísticas finais ─────────────────────────────────────
  exibirSeparador();
  console.log(`[INFO] Total de Pokémon no catálogo: ${catalogo.total}`);

  // ── Buscar por nome no catálogo ─────────────────────────────
  const encontrado = catalogo.buscarPorNome("pikachu");
  if (encontrado) {
    console.log(
      `[INFO] Pikachu encontrado no catálogo: Tipos: ${encontrado.tipos.join(", ")}`
    );
  }

  exibirSeparador();
  console.log("  Execução concluída com sucesso!");
  exibirSeparador();
}
