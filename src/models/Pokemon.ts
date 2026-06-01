// ============================================================
// Interfaces e Classes de Pokémon
// ============================================================

/**
 * Representa a resposta bruta da PokeAPI
 */
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

/**
 * Representa o Pokémon simplificado no catálogo local
 */
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

/**
 * Classe que gerencia o catálogo de Pokémon em memória
 */
export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  /**
   * Adiciona um Pokémon ao catálogo, impedindo duplicidade por ID
   */
  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((p) => p.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  /**
   * Lista todos os Pokémon do catálogo
   */
  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    console.log("\n===== CATÁLOGO DE POKÉMON =====");
    this.pokemons.forEach((p) => {
      const tipos = p.tipos.join(", ");
      console.log(
        `#${p.id} - ${p.nome} | Tipos: ${tipos} | Altura: ${p.altura} | Peso: ${p.peso}`
      );
    });
    console.log("================================\n");
  }

  /**
   * Remove um Pokémon do catálogo pelo ID
   */
  remover(id: number): void {
    const existeNoArray = this.pokemons.some((p) => p.id === id);

    if (!existeNoArray) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((p) => p.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  /**
   * Retorna todos os Pokémon do catálogo (somente leitura)
   */
  obterTodos(): PokemonResumo[] {
    return this.pokemons.map((p) => ({ ...p }));
  }

  /**
   * Busca um Pokémon no catálogo pelo nome
   */
  buscarPorNome(nome: string): PokemonResumo | undefined {
    return this.pokemons.find(
      (p) => p.nome.toLowerCase() === nome.toLowerCase()
    );
  }

  /**
   * Retorna a quantidade de Pokémon no catálogo
   */
  get total(): number {
    return this.pokemons.length;
  }
}
