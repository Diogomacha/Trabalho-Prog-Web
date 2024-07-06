import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [];

  constructor() { }

  adicionarProduto(produto: Produto): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        produto.id = this.produtos.length + 1;
        this.produtos.push(produto);
        resolve(produto.id);
      } catch (error) {
        reject(error);
      }
    });
  }

  atualizarProduto(id: number, produtoEditado: Produto): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index !== -1) {
          this.produtos[index] = { ...produtoEditado, id };
          resolve(1); // Indica sucesso na atualização
        } else {
          resolve(0); // Produto não encontrado
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  buscarProdutoPorId(id: number): Promise<Produto | undefined> {
    return new Promise((resolve, reject) => {
      const produto = this.produtos.find(p => p.id === id);
      if (produto) {
        resolve(produto);
      } else {
        reject(new Error('Produto não encontrado'));
      }
    });
  }
  buscarProdutos(): Promise<Produto[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.produtos);
      } catch (error) {
        reject(error);
      }
    });
  }

  removerProduto(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.produtos = this.produtos.filter(prod => prod.id !== id);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}





