import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];


  salvar (pessoaForm): void {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;
    console.log (this.pessoa);
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
