import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category/category-service.service';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../shared/interfaces/category/category-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  public categories$!: Observable<CategoryInterface[]>;

  constructor(private categoryService: CategoryServiceService, private router: Router) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  goToSubcategories(category: string): void {
    this.router.navigate(['categories/subcategories', category]);
  }
}
