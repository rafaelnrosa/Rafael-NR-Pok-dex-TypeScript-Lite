# Guia de Execução e Testes - Pokédex TypeScript Lite

## Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) v18 ou superior
- npm (já vem com o Node.js)
- Git

Verifique as versões:
```bash
node --version
npm --version
```

---

## Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/rafaelnrosa/Rafael-NR-Pok-dex-TypeScript-Lite.git

# 2. Entrar na pasta
cd Rafael-NR-Pok-dex-TypeScript-Lite

# 3. Instalar dependências
npm install
```

---

## Rodar o projeto

```bash
npm run dev
```

---

## O que acontece ao rodar

O `main.ts` executa um fluxo completo e automático no terminal. Veja cada etapa:

### Etapa 1 — Busca de Pokémon na PokeAPI

O projeto busca 5 nomes: `pikachu`, `charizard`, `bulbasaur`, `mewtwo` e `pokemon-inexistente`.

**Saída esperada:**
```
[OK] Pokémon encontrado: Pikachu (ID: 25)
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: Charizard (ID: 6)
[OK] charizard adicionado ao catálogo.
[OK] Pokémon encontrado: Bulbasaur (ID: 1)
[OK] bulbasaur adicionado ao catálogo.
[OK] Pokémon encontrado: Mewtwo (ID: 150)
[OK] mewtwo adicionado ao catálogo.
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

> `[ERRO]` é o comportamento correto — o sistema trata o 404 sem quebrar.

---

### Etapa 2 — Teste de duplicidade

Tenta adicionar `pikachu` novamente ao catálogo.

**Saída esperada:**
```
[AVISO] pikachu já está no catálogo.
```

> O sistema bloqueia o registro duplicado por ID.

---

### Etapa 3 — Listagem do catálogo

Exibe todos os Pokémon adicionados com sucesso.

**Saída esperada:**
```
===== CATÁLOGO DE POKÉMON =====
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#6 - charizard | Tipos: fire, flying | Altura: 17 | Peso: 905
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#150 - mewtwo | Tipos: psychic | Altura: 20 | Peso: 1220
================================
```

---

### Etapa 4 — Remoção de Pokémon

Remove o Charizard (ID: 6) e tenta remover um ID inexistente (999).

**Saída esperada:**
```
[OK] Pokémon removido do catálogo.
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

---

### Etapa 5 — Listagem após remoção

Exibe o catálogo sem o Charizard.

**Saída esperada:**
```
===== CATÁLOGO DE POKÉMON =====
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#150 - mewtwo | Tipos: psychic | Altura: 20 | Peso: 1220
================================
```

---

### Etapa 6 — Estatísticas finais

**Saída esperada:**
```
[INFO] Total de Pokémon no catálogo: 3
[INFO] Pikachu encontrado no catálogo: Tipos: electric
```

---

## Saída completa esperada

```
========================================
  POKÉDEX TYPESCRIPT LITE
========================================

[INFO] Buscando Pokémon na PokeAPI...

[OK] Pokémon encontrado: Pikachu (ID: 25)
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: Charizard (ID: 6)
[OK] charizard adicionado ao catálogo.
[OK] Pokémon encontrado: Bulbasaur (ID: 1)
[OK] bulbasaur adicionado ao catálogo.
[OK] Pokémon encontrado: Mewtwo (ID: 150)
[OK] mewtwo adicionado ao catálogo.
[ERRO] Pokémon não encontrado: pokemon-inexistente

[INFO] Testando duplicidade (adicionando pikachu novamente)...
[AVISO] pikachu já está no catálogo.

[INFO] Listando catálogo atual:

===== CATÁLOGO DE POKÉMON =====
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#6 - charizard | Tipos: fire, flying | Altura: 17 | Peso: 905
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#150 - mewtwo | Tipos: psychic | Altura: 20 | Peso: 1220
================================

[INFO] Removendo Charizard (ID: 6) do catálogo...
[OK] Pokémon removido do catálogo.

[INFO] Tentando remover ID inexistente (999)...
[AVISO] Nenhum Pokémon encontrado com esse ID.

[INFO] Catálogo após remoção:

===== CATÁLOGO DE POKÉMON =====
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#150 - mewtwo | Tipos: psychic | Altura: 20 | Peso: 1220
================================

========================================
[INFO] Total de Pokémon no catálogo: 3
[INFO] Pikachu encontrado no catálogo: Tipos: electric
========================================
  Execução concluída com sucesso!
========================================
```

---

## Compilar para JavaScript

```bash
npm run build
```

Os arquivos compilados ficam na pasta `dist/`.

---

## Possíveis erros

| Erro | Causa | Solução |
|------|-------|---------|
| `Cannot find module` | Dependências não instaladas | Rode `npm install` |
| `fetch is not defined` | Node.js abaixo da v18 | Atualize o Node.js |
| `[ERRO] Falha ao consultar a PokeAPI` | Sem conexão com a internet | Verifique sua conexão |
| Todos os Pokémon com `[ERRO]` | PokeAPI fora do ar | Tente novamente mais tarde |
