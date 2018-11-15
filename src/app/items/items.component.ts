import { Component, OnInit } from '@angular/core';
import {ShopItemService} from '../shop-item.service';
import {ItemsService} from  '../items.service'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
public obj:Array<any>;
public id :string;
public arrCart :Array<any>;
  constructor(private itemShop:ShopItemService , private Items:ItemsService) {
    this.arrCart =[];
    this.itemShop.getServer('../../assets/Items.Json').subscribe(
      (res) => {
        console.log(res);
        this.obj = res;
      },
      (error) => {console.log(error)}
    );
  
  }
  addCart(id){
this.arrCart.push(id);
this.Items.setUrlHistoryObj(this.arrCart);

  }
  
  ngOnInit() {
   
  }

 
 
 
  }

