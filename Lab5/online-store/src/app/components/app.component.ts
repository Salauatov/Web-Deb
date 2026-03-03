import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title='online-store';

}
