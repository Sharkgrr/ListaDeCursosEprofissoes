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
  cursos = ['Administração', 'Ciência da Computação', 'Medicina', 'Direito', 'Engenharia'];
  professores = ['Rodrigo Bossini', 'Igor Moreira', 'Elcio Abrahão'];


  salvar (pessoaForm): void {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;
    this.pessoa.cursos = pessoaForm.value.cursos;
    this.pessoa.professores = pessoaForm.value.professores;
    console.log(this.pessoa);

  }   

  constructor() {

  }

  ngOnInit(): void {

  }

  mensagem(){
    return console.log("Adicionado com sucesso!");
  }
}
