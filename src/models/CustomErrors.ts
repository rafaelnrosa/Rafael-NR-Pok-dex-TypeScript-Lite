// ============================================================
// Exceções Customizadas
// ============================================================

/**
 * Erro lançado quando um Pokémon não é encontrado na PokeAPI
 */
export class PokemonNaoEncontradoError extends Error {
  constructor(nomeOuId: string) {
    super(`Pokémon não encontrado: ${nomeOuId}`);
    this.name = "PokemonNaoEncontradoError";
  }
}

/**
 * Erro lançado quando ocorre falha na comunicação com a PokeAPI
 */
export class ErroDeConexaoError extends Error {
  constructor(mensagem: string) {
    super(`Erro de conexão com a PokeAPI: ${mensagem}`);
    this.name = "ErroDeConexaoError";
  }
}
