# BlogApp Frontend (Angular)

Frontend simples para o projeto **BlogApp**, utilizado para testar a API feita em .NET. Permite cadastro, login e criação de postagens.

## Tecnologias
- Angular 17 (standalone)
- TypeScript
- RxJS
- CSS básico

## Funcionalidades
- Cadastro de usuário
- Login (simples, baseado em localStorage)
- Criação de postagens
- Listagem de postagens
- Logout
- Proteção de rotas com AuthGuard

## Instalação

```bash
npm install
```

## Execução

```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

## Estrutura de Diretórios

```
src/
  app/
    components/
      login/
      register/
      home/
    services/
      auth.service.ts
      post.service.ts
    guards/
      auth.guard.ts
    app.routes.ts
    app.ts
  main.ts
```

## Observações
- Certifique-se que a API esteja rodando localmente em `https://localhost:5001` (ou configure a URL base no `environment.ts`).
- O projeto é apenas uma interface para testes do backend.

---
Projeto criado para fins de estudo e avaliação técnica.