import { Component, OnInit } from '@angular/core';
import {ItemsService} from  '../items.service'
import {ShopItemService} from '../shop-item.service';
import { debug } from 'util';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cartShow:Array<any>=[];
public arrfinal :Array<any>=[];
public cartItems :Array<any>;
public btn:boolean =true;
  constructor (private itemShop:ShopItemService , private Items:ItemsService) {
this.cartItems=[];
    this.cartShow = this.Items.getUrlHistoryObj();
    console.log(this.cartShow);
    this.itemShop.getServer('../../assets/Items.Json').subscribe(
      (res) => {
        this.arrfinal = res;
        debugger;
        for (var i=0; i<this.cartShow.length ;i++ ){
          for(var k=0;k<this.arrfinal.length;k++){
          if(this.cartShow[i] == this.arrfinal[k].id){
            this.cartItems[i]={src:this.arrfinal[k].src , Title:this.arrfinal[k].Title, price:this.arrfinal[k].price};
            console.log(this.cartItems);
           
          }
          this.btn=false;
          console.log("ana if")
        
          }
         
        }
      },
      (error) => {console.log(error)}
    );
  
   }
  ngOnInit() {
   
  }

}
