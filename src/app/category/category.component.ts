import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi"
  categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Bilgisayar" },
    { id: 3, name: "İletişim" },
    { id: 4, name: "Müzik" },
    { id: 5, name: "İçeçek" }

  ]
  ngOnInit(): void {
  }

}
