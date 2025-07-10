import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadComponent: () => 
            import('./home/home.component').then(m => m.HomeComponent),
    },
    {path: 'categories',
        loadComponent: () => 
            import('./category/category.component').then(m => m.CategoryComponent),
    },
    {path: 'categories/subcategories/:category',
        loadComponent: () => 
            import('./subcategory/subcategory.component').then(m => m.SubcategoryComponent),
    },
    {path: 'products/list',
        loadComponent: () => 
            import('./product/product-list/product-list.component').then(m => m.ProductListComponent),
    }
];
