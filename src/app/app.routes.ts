import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadComponent: () => 
            import('./home/home.component').then(m => m.HomeComponent),
    },
    {path: 'products/list',
        loadComponent: () => 
            import('./product/product-list/product-list.component').then(m => m.ProductListComponent),
    }
];
