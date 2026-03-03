import {Component, computed, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Modal} from '../modal/modal';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard, Modal],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productService = inject(ProductService);
  categories = this.productService.categories();
  selectedProduct = signal<Product | null>(null);
  selectedCategoryId = signal<number>(0);
  isModalOpen = signal(false);

  filteredProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    const allProducts = this.productService.products();

    if (categoryId === 0) {
      return allProducts;
    }

    return allProducts.filter((product) => product.categoryId === categoryId);
  })

  openQuickView(product: Product) {
    this.selectedProduct.set(product);
    this.isModalOpen.set(true);
  }

  closeQuickView() {
    this.isModalOpen.set(false);

  }

  setCategory(categoryId: number) {
    this.selectedCategoryId.update(current => current === categoryId ? 0 : categoryId);
  }

  deleteCard(productId: number) {
    this.productService.deleteProduct(productId);
  }
}
