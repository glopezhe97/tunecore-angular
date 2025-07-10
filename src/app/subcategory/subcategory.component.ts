import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SubcategoryServiceService } from '../services/subcategory/subcategory-service.service';
import { SubcategoryInterface } from '../shared/interfaces/subcategory/subcategory-interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css'
})
export class SubcategoryComponent implements OnInit{
  public subcategories$!: Observable<SubcategoryInterface[]>;
  category!: string;

  constructor(private subcategoryService: SubcategoryServiceService, private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.subcategories$ = this.subcategoryService.getAllSubcategoriesByCategory(this.category);  }
}
