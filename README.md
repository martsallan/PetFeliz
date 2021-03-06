<h1 align="center">
    PetFeliz
</h1>

## 🚀 Descrição

Projeto de um site e-commerce para PetShop realizado durante a disciplina de Programação Web ministrada pelo professor Carlos Bazilio (UFF).
<br>

- [Veja o conceito de telas aqui](https://www.figma.com/file/Ju7cT18t7xf5hnAjrfMehC/PetFeliz?node-id=0%3A1)

## Tecnologias

- HTML5
- CSS
- JavaScript
- PHP
- MySQL

## Alunos

- Allan Martins
- Pablo Montel

## 💿 Rodando o projeto

- Instale as dependencias:

Frontend (a partir da pasta raiz):

```bash
  cd petfeliz-frontend
  #then
  npm install
  #or
  yarn install
```

- Inicie o servidor:

```bash
  npm run serve
  #or
  yarn serve
```

Backend (a partir da pasta raiz):

```bash
  cd petfeliz-backend
  #then
  composer install
  #then
  php artisan key:generate
```

- Inicie o servidor:

```bash
  php artisan serve
```

- Para o frontend acesse no browser [http://localhost:8080](http://localhost:8080).
- Para o backend acesse no browser [http://localhost:8000](http://localhost:8000).

## Deploy

- Veja o deploy do projeto [neste link](https://) (não implementado ainda)

## 💻 Desafios

1. Criação de interface com HTML, CSS e JS para a aplicação (frontend): tela(s) de cadastro de produtos e tela(s) do e-commerce.
2. Criação de um servidor (backend) para persistir o conteúdo da aplicação. A persistência pode ser feita por banco ou qualquer outro meio.
3. A comunicação entre frontend e backend deve ser feita via API (serviço).
4. A aplicação deve realizar atualização automática a cada confirmação de compra. Cada usuário conectado precisa receber a atualização de forma assíncrona (sem o usuário dar refresh na tela). Esta implementação é feita usando AJAX (Asynchronous JavaScript And XML), que mais recentemente pode ser feito pelo comando fetch do JS.
5. O projeto no backend deve implementar o padrão MVC ou algum outro padrão de forma a deixar o código mais organizado e manutenível.
6. Na realização da compra um e-mail deve ser fornecido pelo comprador de forma que o comprovante da compra deva ser enviado para este e-mail. O comprador também deve informar o CEP para entrega. Vocês devem usar o serviço https://viacep.com.br/ para obter detalhes do CEP informado.
7. O projeto deve estar armazenado no Github desde o primeiro dia.
8. A demonstração do sistema pode ser realizada usando Docker (opcional).

<!--
<p align="center">
  <img alt="" src="" width="100%">
</p> -->
