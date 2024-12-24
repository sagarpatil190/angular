import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.words({ min: 1, max: 10 })
  enteredText = '';
  inputClassName = 'input is-info';
  timer = 0;
  getEnteredText(e: any) {
    if(e.length == 1){
    }
   this.enteredText = e.target.value;   
  }

  getClassName(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter){
      return "has-text-info";
    }
    this.inputClassName = randomLetter=== enteredLetter ? "input is-success" : "input is-danger"
    return randomLetter=== enteredLetter ? "has-text-success" : "has-text-danger"
  }
  getInputClassName() {
    return this.inputClassName;
  }
  toggleModal() {
    this.enteredText = '';
    window.location.reload();
  }
}
