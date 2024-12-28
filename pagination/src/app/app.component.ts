import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentPage = 0;
  

  images = [
    {
      name : "puzzle",
      url: "https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name : "sword",
      url: "https://images.unsplash.com/photo-1440711085503-89d8ec455791?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name : "teddy bear",
      url: "https://images.unsplash.com/photo-1533859583213-c4e11b597ee0?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name : "doll",
      url: "https://images.unsplash.com/photo-1488219435247-cd511605cf3c?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name : "chess",
      url: "https://images.unsplash.com/photo-1683645480614-55a5957b6343?w=310&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ]
}
