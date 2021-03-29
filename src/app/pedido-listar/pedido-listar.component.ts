import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {

  items = [
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"1"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"2"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"3"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"4"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"5"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"6"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"7"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"8"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"9"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"10"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"11"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"12"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"13"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"14"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"15"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"16"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"17"},
  {"numero":"1000","data":"2703/2020","situacao":"ABERTO","razao":"meu nome","cnpj":"123456","qtdProdutos":"15","qtdItens":"20","total":"1000","id":"18"}
];

  pageOfItems: Array<any>;

  constructor() { }
  
  ngOnInit(): void {
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
