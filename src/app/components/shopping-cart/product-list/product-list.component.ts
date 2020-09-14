import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productItem :Product


  constructor(private msg: MessengerService,private route:Router) { }

  ngOnInit(): void {
  }
  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    window.alert('Your product has been added to cart');
  }

}
