import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
// import {  items } from './items/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private urlHistory: Array<any>;
  private cart:Array<any>;
  private cartIndex:Array<any>;

 constructor() {
    this.urlHistory = [];
    this.cart =[];
    this.cartIndex=[];
  }

  public setUrlHistoryObj(val: Array<any>): void {
      this.urlHistory = val;
  }

  public getUrlHistoryObj(): Array<any> {
      return this.urlHistory;
  }

  public setSelectedCart(cartArray: Array<any>): void {
       this.cart =cartArray;
  }

  public getSelectedCart(): Array<any> {
      return this.cart;
  }


 
}

