
# Blueprint: The Gem & The Anchor

## Visão Geral

O objetivo deste projeto é criar uma landing page romântica e interativa chamada "The Gem & The Anchor", celebrando a jornada de 400 dias de Patrícia ("The Peruvian Tornado") e Igor ("The Anchor") desde o primeiro contato em 22 de novembro de 2024. A aplicação será uma experiência imersiva, rica em animações e interatividade, construída com Next.js 14 e hospedada na Vercel.

## Stack de Tecnologia

*   **Framework:** Next.js 14
*   **Estilização:** Tailwind CSS
*   **Animações:** Framer Motion
*   **Banco de Dados:** MongoDB
*   **Hospedagem:** Vercel
*   **UI/Icons:** Lucide React

---

## Plano de Implementação

### Passo 1: Limpeza e Configuração do Projeto

*   **Ação:** Remover os arquivos e componentes do projeto anterior para dar lugar à nova estrutura.
*   **Status:** A fazer.

### Passo 2: Instalação de Dependências

*   **Ação:** Instalar as bibliotecas necessárias para as novas funcionalidades.
    *   `framer-motion`
    *   `lucide-react`
    *   `mongoose`
    *   `react-confetti`
*   **Status:** A fazer.

### Passo 3: Implementação dos Componentes e Features

1.  **Hero Section - Tornado → Heart Transformation:**
    *   Criar uma animação com Framer Motion que transforma um polígono de tornado em um coração no carregamento da página.

2.  **Days Counter:**
    *   Desenvolver um contador dinâmico que exibe o número de dias desde 22 de novembro de 2024.

3.  **Timeline - "Nossa Jornada":**
    *   Implementar uma linha do tempo com auto-progressão que revela os marcos do relacionamento a cada 3 segundos.

4.  **Cusco Section - "A Joia e a Moldura":**
    *   Criar uma seção interativa sobre a casa dos sonhos em Cusco, com design em glassmorphism.

5.  **Carne e Osso - Reality Test:**
    *   Desenvolver elementos clicáveis que revelam detalhes do mundo real (chuva, café, música).

6.  **Thoughts Form - Integração com MongoDB:**
    *   Construir um formulário para os usuários enviarem mensagens e planos, com validação, estados de loading e feedback de sucesso (confetti).
    *   Criar a API route (`/api/plans`) e o schema do Mongoose para salvar os dados.

7.  **Efeitos Interativos:**
    *   Implementar um gradiente que segue o cursor do mouse.
    *   Adicionar corações que aparecem aleatoriamente com o movimento do mouse.

8.  **Background Particles:**
    *   Criar um fundo com partículas flutuantes para uma atmosfera etérea.

*   **Status:** A fazer.

### Passo 4: Estilização e Design

*   **Ação:** Aplicar a filosofia de design "Strength meets Elegance" usando a paleta de cores, glassmorphism e gradientes definidos.
*   **Status:** A fazer.

### Passo 5: Deploy na Vercel

*   **Ação:** Fazer o push das alterações para o GitHub, acionando o deploy automático na Vercel.
*   **Status:** A fazer.
