import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: string = '';
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  onButtonClick(button: string) {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.clearDisplay();
    } else {
      this.display += button;
    }
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clearDisplay() {
    this.display = '';
  }

  buttonClass(button: string): string {
    return button === '=' ? 'operator' : '';
  }
}
