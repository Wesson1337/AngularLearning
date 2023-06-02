import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularLearning';
  products: IProduct[] = []
  loading = true

  constructor(private productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}
