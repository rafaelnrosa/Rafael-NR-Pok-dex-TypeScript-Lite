// ============================================================
// Serviço de integração com a PokeAPI
// ============================================================

import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";
import { PokemonNaoEncontradoError, ErroDeConexaoError } from "../models/CustomErrors";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

/**
 * Busca um Pokémon na PokeAPI pelo nome ou ID.
 * Retorna um PokemonResumo simplificado ou null se não encontrado.
 */
export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  try {
    const url = `${BASE_URL}/${nomeOuId.toLowerCase().trim()}`;
    const resposta = await fetch(url);

    if (resposta.status === 404) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    if (!resposta.ok) {
      throw new ErroDeConexaoError(`Status ${resposta.status}`);
    }

    const dados: PokemonApiResponse = await resposta.json();

    // Mapear resposta da API para objeto simplificado
    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: dados.types.map((t) => t.type.name),
      altura: dados.height,
      peso: dados.weight,
    };

    return pokemon;
  } catch (erro) {
    if (erro instanceof PokemonNaoEncontradoError) {
      console.log(`[ERRO] ${erro.message}`);
      return null;
    }

    if (erro instanceof ErroDeConexaoError) {
      console.log(`[ERRO] ${erro.message}`);
      return null;
    }

    // Erro inesperado (ex: sem internet)
    console.log(`[ERRO] Falha ao consultar a PokeAPI: ${(erro as Error).message}`);
    return null;
  }
}
