# VendamaisUi

Projeto gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão 10.0.0-next.0.

#### Pré-requisitos
- [Node.js](https://nodejs.org/en/download/)
- [Angular 10](https://cli.angular.io/)

#### Instalando angular com npm:

```
npm i -g @angular/cli@10.0.0-next.0
```

#### Acessar a raiz do projeto e instalar as dependências
```
npm install
```
> se em algum momento aconteccer o erro: 
>`The Angular Compiler requires TypeScript >=3.4.0 and <3.5.0 but 3.5.3 was found instead` 
> executar o comando:
```
npm i -D typescript@3.9.5
```
#### Gerar a build do projeto se quiser subir em um servidor web local
```
ng build
```
> Copiar a pasta `/dist` para a pasta do servidor, como por exemplo a pasta `htdocs` do [XAMPP](https://www.apachefriends.org/pt_br/index.html)

#### Para executar e testar com o servidor embutido
```
ng serve
```

#### Depois que o servidor estiver iniciado
> Acesse `http://localhost:4200/`
