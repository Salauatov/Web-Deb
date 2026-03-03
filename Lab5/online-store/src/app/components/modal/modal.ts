import {Component, input, output} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  product = input.required<Product>();
  isOpen = input<boolean>(false);
  closeModal = output<void>();

  onBackdropClick() {
    this.closeModal.emit();
  }

  onClose() {
    this.closeModal.emit();
  }

}
