import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  ra: number = 0;
  nome: string = '';
  email: string = '';
  celular: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    if (this.verificaCampos()){
      alert(
          'Nome: ' + this.nome
        + '\nTelefone: ' + this.celular
        + '\nE-mail: ' + this.email
        + '\nRA: ' + this.ra
      );
    } else {
      alert('Por favor, verifique os valores dos campos.');
    }
  }

  verificaCampos(): boolean {
    return this.nome    != null && 
           this.email   != null && 
           this.ra      > 0 && this.ra      <= 999999 &&
           this.celular > 0 && this.celular <= 99999999999;
  }

}
