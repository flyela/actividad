import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // La variable 'display' almacena la expresión que se mostrará en la calculadora.
  display: string = '';

  // El arreglo 'buttons' contiene los botones que se mostrarán en la calculadora.
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  // Maneja los clics en los botones de la calculadora.
  onButtonClick(button: string) {
    if (button === '=') {
      // Si se hace clic en '=', realiza el cálculo.
      this.calculate();
    } else if (button === 'C') {
      // Si se hace clic en 'C', borra la pantalla.
      this.clearDisplay();
    } else {
      // Para otros botones, simplemente agrega el valor al 'display'.
      this.display += button;
    }
  }

  // Realiza el cálculo de la expresión actual y actualiza la pantalla.
  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      // Maneja errores durante la evaluación de la expresión.
      this.display = 'Error';
    }
  }

  // Borra la pantalla.
  clearDisplay() {
    this.display = '';
  }

  // Asigna una clase CSS específica al botón '=' para estilizarlo de manera diferente.
  buttonClass(button: string): string {
    return button === '=' ? 'operator' : '';
  }
}
