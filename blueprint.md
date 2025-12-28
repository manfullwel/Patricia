
# Blueprint: Homenagem Patrícia Caprio

## Visão Geral

O objetivo deste projeto é criar uma landing page de alta performance, segura e mobile-first em homenagem a Patrícia Caprio, celebrando 35 dias de conexão. A aplicação será migrada do ambiente de desenvolvimento local para produção na Vercel, com um fluxo de trabalho de CI/CD totalmente automatizado via GitHub.

## Stack de Tecnologia

*   **Framework:** Next.js 14
*   **Estilização:** Tailwind CSS
*   **Animações:** Framer Motion
*   **Banco de Dados:** MongoDB
*   **Hospedagem:** Vercel

---

## Plano de Migração e Automação

### Passo 1: Configuração de CI/CD (GitHub + Vercel)

*   **Ação:** Conectar o repositório do GitHub à Vercel para habilitar deploys automáticos a cada `git push`.
*   **Status:** A ser executado.

### Passo 2: Segurança de Dados com Variáveis de Ambiente

*   **Ação:** Configurar a `MONGODB_URI` e outras chaves sensíveis de forma segura nas Environment Variables da Vercel.
*   **Status:** A ser executado.

### Passo 3: Automação de "Presença Real" com Vercel Cron Job

*   **Ação:** Criar uma Serverless Function para buscar dados em tempo real (clima de Brasília) e agendar sua execução periódica com um Cron Job.
*   **Objetivo:** Alimentar o "teste do bot" da Patrícia com informações dinâmicas.
*   **Status:** A ser executado.

### Passo 4: Otimização Mobile-First

*   **Ação:** Revisar e ajustar as configurações do `next.config.js` e as opções de deploy da Vercel para garantir um carregamento ultrarrápido em dispositivos móveis.
*   **Status:** A ser executado.
