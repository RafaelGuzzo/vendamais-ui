import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PedidoProduto } from '../models/pedido-produto';
import { Resumo } from '../models/resumo';

@Component({
  selector: 'app-pedido-novo',
  templateUrl: './pedido-novo.component.html',
  styleUrls: ['./pedido-novo.component.css']
})
export class PedidoNovoComponent implements OnInit {
  @ViewChild('closemodalbutton') closemodalbutton;
  @ViewChild('openmodalbutton') openmodalbutton;
  produtos = []
  produto = new PedidoProduto();
  resumo = new Resumo();
  editaProduto = false;
  indiceProduto = null;

  constructor() { }

  ngOnInit(): void {
  }

  salvarProdutoForm(produtoForm: NgForm){
    var temp = Object.assign([],this.produtos);
    temp.push(this.produtoNovo(this.produto));
    this.produtos = temp;
    produtoForm.reset();
    this.closemodalbutton.nativeElement.click();
    this.atualizaResumo();
  }

  delete(i){
    this.produtos.splice(i,1);
    this.atualizaResumo();
  }

  editaPedidoProduto(i:number){
    this.editaProduto = true;
    this.produto = this.produtos[i];
    this.indiceProduto = i;
    this.openmodalbutton.nativeElement.click();
  }

  submitFormProduto(produtoForm: NgForm){
    if(this.editaProduto){
      this.editaProduto = false;
      this.produtos[this.indiceProduto] = this.produtoNovo(this.produto);
      this.closemodalbutton.nativeElement.click();
      this.atualizaResumo();
      produtoForm.reset();
    }else{
      this.salvarProdutoForm(produtoForm);
    }
  }

  produtoNovo(produto: PedidoProduto){
    var produtoNovo = new PedidoProduto();
    produtoNovo.idpedidoproduto = produto.idpedidoproduto;
    produtoNovo.produtoId =produto.produtoId;
    produtoNovo.produtoCodigo = produto.produtoCodigo;
    produtoNovo.produtoDescricao = produto.produtoDescricao;
    produtoNovo.produtoPreco = produto.produtoPreco;
    produtoNovo.quantidade = produto.quantidade;
    produtoNovo.totalProduto = (produto.produtoPreco * produto.quantidade);

    return produtoNovo;
  }

  atualizaResumo(){
    this.resumo.qtdProdutos = this.produtos.length;
    this.resumo.qtdItens = this.produtos.reduce((qtdItens, produto) => {
      return qtdItens + produto.quantidade
    },0);
    this.resumo.totalPedido = this.produtos.reduce((totalPedido, produto) => {
      return totalPedido + produto.totalProduto
    },0);
    
  }

}
