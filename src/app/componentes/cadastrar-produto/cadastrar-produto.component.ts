import { Component, OnInit } from '@angular/core';
import { ProdutoService } from "../../app-core/servicos/produto-service.service";
import { Produto } from "../../app-core/model/produto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var $ : any;
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  produtoVisualizar: Produto | null = null;
  form: FormGroup;
  produtoAtual: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nomeProduto: ['', Validators.required],
      descricaoProduto: ['', Validators.required],
      precoProduto: ['', Validators.required],
      quantidadeProduto: ['', Validators.required],
      imagemProduto: [''],
      id: [0]
    });
  }

  openModal() {
    $('#add-produto').modal('show');
  }

  closeModal() {
    $('#add-produto').modal('hide');
  }

  salvarFormProduto() {
    if (this.form.valid) {
      const novoProduto: Produto = {
        id: 0,
        nome: this.form.value.nomeProduto,
        descricao: this.form.value.descricaoProduto,
        preco: this.form.value.precoProduto,
        quantidade: this.form.value.quantidadeProduto,
        imagem: this.form.value.imagemProduto
      };

      this.produtoService.adicionarProduto(novoProduto).then(response => {
        if (response > 0) {
          Swal.fire('Sucesso', 'Produto cadastrado com sucesso!', 'success');
          this.form.reset();
          this.closeModal();
          this.listarProdutos();
        }
      }).catch(error => {
        Swal.fire('Erro', 'Não foi possível cadastrar o produto.', 'error');
        console.error(error);
      });
    } else {
      Swal.fire('Atenção', 'Por favor, preencha todos os campos corretamente.', 'warning');
    }
  }

  editarFormProduto() {
    if (this.form.valid) {
      const produtoEditado: Produto = {
        id: this.form.value.id,
        nome: this.form.value.nomeProduto,
        descricao: this.form.value.descricaoProduto,
        preco: this.form.value.precoProduto,
        quantidade: this.form.value.quantidadeProduto,
        imagem: this.form.value.imagemProduto
      };

      this.produtoService.atualizarProduto(produtoEditado.id, produtoEditado).then(response => {
        if (response > 0) {
          Swal.fire('Sucesso', 'Produto atualizado com sucesso!', 'success');
          this.form.reset();
          this.closeModal();
          this.listarProdutos();
        }
      }).catch(error => {
        Swal.fire('Erro', 'Não foi possível atualizar o produto.', 'error');
        console.error(error);
      });
    } else {
      Swal.fire('Atenção', 'Por favor, preencha todos os campos corretamente.', 'warning');
    }
  }

  listarProdutos() {
    this.produtoService.buscarProdutos().then(response => {
      this.produtos = response;
    }).catch(error => {
      console.error(error);
    });
  }

  setProdutoAtual(produto: Produto) {
    this.produtoVisualizar = produto;
    this.form.patchValue({
      id: produto.id,
      nomeProduto: produto.nome,
      descricaoProduto: produto.descricao,
      precoProduto: produto.preco,
      quantidadeProduto: produto.quantidade,
      imagemProduto: produto.imagem
    });
    this.openModal();
  }
  editarProduto(produto: Produto) {
    this.produtoService.buscarProdutoPorId(produto.id).then(produto => {
      if (produto) {
        this.produtoAtual = produto;
        this.form.patchValue({
          nomeProduto: produto.nome,
          descricaoProduto: produto.descricao,
          precoProduto: produto.preco,
          quantidadeProduto: produto.quantidade,
          imagemProduto: produto.imagem
        });
        this.openModal(); // Abre o modal de edição
      } else {
        Swal.fire('Erro', 'Produto não encontrado.', 'error');
      }
    }).catch(error => {
      console.error(error);
      Swal.fire('Erro', 'Não foi possível buscar o produto.', 'error');
    });
  }

  excluirProduto(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar produto!',
      confirmButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.removerProduto(id).then(() => {
          Swal.fire('Deletado!', 'O produto foi deletado.', 'success');
          this.listarProdutos();
        }).catch(error => {
          Swal.fire('Erro', 'Não foi possível deletar o produto.', 'error');
          console.error(error);
        });
      }
    });
  }

  isCampoValido(inputNome: string): boolean {
    const campo = this.form.get(inputNome);
    return campo ? campo.invalid && (campo.dirty || campo.touched) : false;
  }

  submitForm() {
    if (this.form.value.id > 0) {
      this.editarFormProduto();
    } else {
      this.salvarFormProduto();
    }
  }

  ngOnInit(): void {
    this.listarProdutos();
  }
}


