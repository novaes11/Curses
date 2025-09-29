# 🎓 Resumo de Habilidades em Colaboração e Git Remoto (GitHub)

**Curso:** Github na prática (B7web, Prof. Bonieky)

Este resumo detalha as competências e técnicas adquiridas no **ecossistema GitHub**, demonstrando proficiência na colaboração em projetos de software, gerenciamento de repositórios remotos e aplicação de fluxos de trabalho avançados como o GitFlow.

---

## 1. Fundamentos e Interação com Repositórios Remotos

### Setup e Fluxo de Trabalho Essencial
* **Gestão de Repositórios Remotos:** Habilidade em criar e configurar repositórios no GitHub, servindo como o ponto central de colaboração.
* **Clonagem e Sincronização:** Domínio do `git clone` para iniciar um projeto local a partir de um repositório remoto. Proficiência no fluxo de trabalho fundamental para sincronização:
    * `git push`: Enviar *commits* locais para o repositório remoto, compartilhando o progresso.
    * `git pull`: Receber e mesclar atualizações do repositório remoto, mantendo o ambiente de trabalho atualizado.
* **Autenticação Segura:** Capacidade de configurar a comunicação com o GitHub de forma segura, utilizando **HTTPS**, **Tokens de Acesso Pessoal (PATs)** e o **GitHub CLI** para autenticação e gerenciamento simplificado.
* **Gestão de Versões e Branches:** Proficiência na criação e gerenciamento de **Tags** para marcar versões importantes (releases) e na manipulação de **branches** diretamente no ambiente do GitHub.

### Ferramentas e Boas Práticas
* **GitHub CLI:** Uso da interface de linha de comando do GitHub para otimizar a interação com repositórios, pull requests e issues.
* **GitHub Desktop:** Competência no uso do cliente gráfico **GitHub Desktop** como alternativa visual para executar operações Git/GitHub complexas.
* **Correção de Autoria:** Habilidade em corrigir a autoria de *commits* (`user.name` e `user.email`) para garantir a atribuição correta das contribuições.

---

## 2. Colaboração e Fluxos de Trabalho Avançados

### Contribuição em Projetos (Fork & Pull Request)
* **Forking:** Domínio do fluxo de trabalho com **Fork**, criando uma cópia pessoal de um repositório para trabalhar em alterações sem impactar o projeto original.
* **Pull Requests (PRs):** Habilidade essencial em criar e gerenciar **Pull Requests**, propondo a integração de novas funcionalidades ou correções ao repositório principal. Este processo é central para a revisão de código (*code review*) e a colaboração em equipe.

### Estratégia de Branches com GitFlow
* **Compreensão do Modelo GitFlow:** Profundo entendimento do GitFlow como um modelo robusto de ramificação para gerenciar o ciclo de vida do desenvolvimento de software.
* **Branches Principais:** Domínio sobre o propósito das branches `main` (código de produção estável) e `develop` (linha de desenvolvimento principal).
* **Branches de Suporte:** Aplicação prática de branches auxiliares para um desenvolvimento organizado:
    * **Feature Branches:** Isolar o desenvolvimento de novas funcionalidades a partir da `develop`.
    * **Release Branches:** Preparar, testar e documentar novas versões para produção.
    * **Hotfix Branches:** Corrigir bugs críticos diretamente na `main` e garantir a propagação da correção para a `develop`.
* **Ciclo de Vida do GitFlow:** Competência para executar o fluxo completo, desde a criação de uma *feature* até o *merge* final na `main` através de Pull Requests.

### Recursos Adicionais do GitHub
* **GitHub Pages:** Capacidade de publicar e hospedar sites estáticos diretamente de um repositório, ideal para portfólios, documentação de projetos e páginas de demonstração.
