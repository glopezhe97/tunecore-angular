import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tunecore-angular';
}
