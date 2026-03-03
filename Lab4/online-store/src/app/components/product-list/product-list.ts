import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
 selector: 'app-product-list',
 standalone: true,
 imports: [NgFor],
 templateUrl: './product-list.html',
 styleUrl: './product-list.css',
})
export class ProductList {
 products = [
   {
     id: 1,
     name: 'iPhone 15',
     description: 'Latest Apple smartphone.',
     price: 600000,
     rating: 4.8,
     image: 'https://via.placeholder.com/200',
     link: 'https://kaspi.kz'
   }
 ];
 share(product: any) {
   const url = encodeURIComponent(product.link);
   window.open(
     `https://wa.me/?text=Check this product: ${url}`,
     '_blank'
   );
 }
}