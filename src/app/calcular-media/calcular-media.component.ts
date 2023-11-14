import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {
  ac1: number = 0;
  ac2: number = 0;
  af: number = 0;
  ag: number = 0;

  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    if (this.verificaCampos()) {
      this.resultado = ((this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45));
    } else {
      alert('Por favor, verifique os valores dos campos. Eles devem estar entre 0 e 10.');  
    }
  }

  verificaCampos(): boolean{
    return this.ac1 >= 0 && this.ac1 <= 10 &&
           this.ac2 >= 0 && this.ac2 <= 10 &&
           this.af  >= 0 && this.af <= 10 &&
           this.ag  >= 0 && this.ag <= 10;
  }

}
