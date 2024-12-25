import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  receiverName = '';
  paymentDate = '';
  amount = '';
  height='';

  receiverNameChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.receiverName = target.value;
    }
    
  }

  paymentDateChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.paymentDate = target.value;
    }
    
  }

  amountChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.amount = target.value;
    }
    
  }

  heightChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.height = target.value;
    }
  }
  
}
