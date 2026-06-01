# Pokédex TypeScript Lite

## Sobre o projeto

Aplicação Node.js + TypeScript que consulta a PokeAPI e organiza um catálogo local de Pokémon em memória, exibindo os resultados no terminal.

## Objetivo

Praticar: Node.js, TypeScript, interfaces, classes, async/await, fetch, tratamento de erros, Git/GitHub e Kanban.

## Tecnologias

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git/GitHub

## Pré-requisitos

- Node.js (v18+)
- npm
- Git

## Instalação

```bash
git clone https://github.com/rafaelnrosa/Rafael-NR-Pok-dex-TypeScript-Lite.git
cd Rafael-NR-Pok-dex-TypeScript-Lite
npm install
```

## Execução

```bash
npm run dev
```

## Estrutura

```
src/
  ├── main.ts                          # Ponto de entrada
  ├── controllers/
  │   └── TerminalController.ts        # Interface do usuário no terminal
  ├── services/
  │   ├── PokeApiService.ts            # Integração com a PokeAPI (fetch)
  │   └── BoxService.ts                # Funções puras de catálogo (array)
  ├── models/
  │   ├── Pokemon.ts                   # Interfaces e classe CatalogoPokemon
  │   └── CustomErrors.ts             # Exceções customizadas
  └── utils/
      └── textFormatters.ts            # Funções utilitárias de formatação
```

## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI
- Tratar erro de Pokémon inexistente (sem quebrar o sistema)
- Adicionar Pokémon ao catálogo local
- Impedir duplicidade por ID
- Listar catálogo com formatação clara
- Remover Pokémon pelo ID
- Buscar Pokémon no catálogo por nome

## Exemplos de Execução

### Busca válida

```
[OK] Pokémon encontrado: Pikachu (ID: 25)
[OK] pikachu adicionado ao catálogo.
```

### Busca inválida

```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

```
[AVISO] pikachu já está no catálogo.
```

### Listagem

```
===== CATÁLOGO DE POKÉMON =====
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#6 - charizard | Tipos: fire, flying | Altura: 17 | Peso: 905
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
================================
```

### Remoção

```
[OK] Pokémon removido do catálogo.
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

## Conceitos Aplicados

| Conceito | Onde |
|---|---|
| TypeScript + tipos primitivos | Todos os arquivos |
| Interfaces (`PokemonResumo`, `PokemonApiResponse`) | `src/models/Pokemon.ts` |
| Classe com `private`/`public` (`CatalogoPokemon`) | `src/models/Pokemon.ts` |
| `fetch` + `async/await` | `src/services/PokeApiService.ts` |
| `try/catch` + erros customizados | `src/services/PokeApiService.ts`, `src/models/CustomErrors.ts` |
| Métodos de array: `some`, `filter`, `find`, `map`, `forEach` | `src/models/Pokemon.ts`, `src/services/BoxService.ts` |
| Funções tipadas | `src/services/BoxService.ts`, `src/utils/textFormatters.ts` |

## Kanban

Link: _[Cole aqui o link do seu quadro Kanban]_

## Branches

- `main` — versão estável
- `develop` — integração de features
- `feat/pokedex` — desenvolvimento das funcionalidades
- `docs/readme` — documentação

## Melhorias Futuras

- Menu interativo no terminal
- Persistência em arquivo JSON (`pc_box.json`)
- Exibir HP, Ataque e Defesa dos Pokémon
- Filtros por tipo
