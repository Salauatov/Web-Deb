import {Component, Input, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import {Modal} from '../modal/modal';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})


export class ProductCard {
  @Input()
  product!: Product;
  likes = 0;
  delete = output<number>();


  shareToWhatsApp() {
    const url = 'https://wa.me{encodeURIComponent(\'Check this out: \' + this.product.link)}';
    window.open(url, '_blank');
  }

  shareToTelegram() {
    const url = `https://t.me{encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  newLike() {
    this.likes += 1;
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }

  quickView = output<Product>();






}
