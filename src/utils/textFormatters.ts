// ============================================================
// Funções utilitárias de formatação de texto
// ============================================================

/**
 * Formata a linha de exibição de um Pokémon no terminal
 */
export function formatarLinhaPokemon(
  id: number,
  nome: string,
  tipos: string[],
  altura: number,
  peso: number
): string {
  const tiposFormatados = tipos.join(", ");
  return `#${id} - ${nome} | Tipos: ${tiposFormatados} | Altura: ${altura} | Peso: ${peso}`;
}

/**
 * Formata o nome do Pokémon com a primeira letra maiúscula
 */
export function capitalizarNome(nome: string): string {
  if (!nome) return "";
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

/**
 * Exibe um separador visual no terminal
 */
export function exibirSeparador(titulo?: string): void {
  const linha = "=".repeat(40);
  if (titulo) {
    console.log(`\n${linha}`);
    console.log(`  ${titulo}`);
    console.log(`${linha}`);
  } else {
    console.log(linha);
  }
}
