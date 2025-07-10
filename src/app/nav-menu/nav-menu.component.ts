import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  public routes = [
    { path: '', label: 'Home' },
    { path: 'categories', label: 'Categories' },
    { path: 'about', label: 'About' }
  ];
}
