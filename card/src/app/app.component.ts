import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyCardComponent } from "./my-card/my-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hotels = [
    {
      name : "Sayaji Pune",
      description : "Sayaji Pune is celebrated by guests for its inviting atmosphere, with its clean, cozy rooms and thoughtful amenities often highlighted.",
      imageUrl : 'assets/sayaji.png'
    },
    {
      name : "Ginger Pune",
      description : "dfasfda dsafdasf asdgdasf asgdadsf agadads",
      imageUrl : 'assets/ginger.png'
    },
    {
      name : "Spree Hotel Pune",
      description : "dasfdasf adsfdas adgdasg agdasf agdsda",
      imageUrl : 'assets/spree.png'
    }
  ];
}
