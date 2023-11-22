import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalculadoraPage {
  mostrar: string = '';
  botones: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'];

  agregar(value: string) {
    this.mostrar += value;
  }

  calculate() {
    try {
      this.mostrar = eval(this.mostrar);
    } catch (error) {
      this.mostrar = 'Error';
    }
  }
}
