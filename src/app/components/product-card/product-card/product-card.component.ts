import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  @Output() details = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goDetails(id) {
    this.details.emit(id)
  }
}
