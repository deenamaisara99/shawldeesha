import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    // Call API Service
    this.dataService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => console.log(error)
    })
  }

  showDetail(id) {
    this.router.navigateByUrl(`/product/${id}`)
  }
}
