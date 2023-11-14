import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {
  formApolice : FormGroup;

  tipos = [
    { value:'F',name:'Feminino'  },
    { value:'M',name:'Masculino' },
  ];

  menorIdade = 18;

  constructor() { 
    this.formApolice = new FormGroup({
      nome :      new FormControl('',Validators.required),
      sexo :      new FormControl(this.tipos[0],Validators.required),
      idade:      new FormControl(18,[Validators.max(90),Validators.min(18)]),
      valorCarro: new FormControl(0,Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.formApolice.valid) {
      let objSexo = this.formApolice.get('sexo').value;
      let objIdade = this.formApolice.get('idade').value;
      let objValor = this.formApolice.get('valorCarro').value;

      if(objSexo == 'M' && objIdade <= 25) {
        alert(( 'Valor da apólice: ' + objValor * 0.15));
      }
      else if(objSexo == 'M' && objIdade > 25) {
        alert(( 'Valor da apólice: ' + objValor * 0.10));
      }
      else if(objSexo == 'F') {
        alert(( 'Valor da apólice: ' + objValor * 0.08));
      }
      
    }
  }

}
