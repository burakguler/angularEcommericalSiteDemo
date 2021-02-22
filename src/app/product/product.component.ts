import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [
    { id: 1, name: "Laptop", price: 5000, categoryId: 1, description: "HP Probook", imageUrl: "https://productimages.hepsiburada.net/s/26/200/10159057862706.jpg" },
    { id: 2, name: "Gaming Laptop", price: 3500, categoryId: 1, description: "Monster Notebook", imageUrl: "https://productimages.hepsiburada.net/s/53/200/11143767949362.jpg" },
    { id: 1, name: "Laptop", price: 5000, categoryId: 1, description: "HP Probook", imageUrl: "https://productimages.hepsiburada.net/s/26/200/10159057862706.jpg" },
    { id: 2, name: "Gaming Laptop", price: 3500, categoryId: 1, description: "Monster Notebook", imageUrl: "https://productimages.hepsiburada.net/s/53/200/11143767949362.jpg" },
    { id: 1, name: "Laptop", price: 5000, categoryId: 1, description: "HP Probook", imageUrl: "https://productimages.hepsiburada.net/s/26/200/10159057862706.jpg" },
    { id: 2, name: "Gaming Laptop", price: 3500, categoryId: 1, description: "Monster Notebook", imageUrl: "https://productimages.hepsiburada.net/s/53/200/11143767949362.jpg" },
    { id: 1, name: "Laptop", price: 5000, categoryId: 1, description: "HP Probook", imageUrl: "https://productimages.hepsiburada.net/s/26/200/10159057862706.jpg" },
    { id: 2, name: "Gaming Laptop", price: 3500, categoryId: 1, description: "Monster Notebook", imageUrl: "https://productimages.hepsiburada.net/s/53/200/11143767949362.jpg" },
    { id: 1, name: "Laptop", price: 5000, categoryId: 1, description: "HP Probook", imageUrl: "https://productimages.hepsiburada.net/s/26/200/10159057862706.jpg" },
    { id: 2, name: "Gaming Laptop", price: 3500, categoryId: 1, description: "Monster Notebook", imageUrl: "https://productimages.hepsiburada.net/s/53/200/11143767949362.jpg" },
  ]

  ngOnInit(): void {
  }

}
