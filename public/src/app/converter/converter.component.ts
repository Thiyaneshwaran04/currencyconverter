import { Component, OnInit } from '@angular/core';
// import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
currency=['USD','INR','EURO','AED','GBP','KWD']
show=false
option:any
op1:any
amount:any
conveted:any
a:any
show1=true
private exchangeRate:Record <string,number>={
  USD:1,
  INR:82.65,
  EURO: 0.910651,
  AED:3.67250,
  GBP:0.785086,
  KWD:0.308
};

fromRate:any
toRate:any
fromCurrency:any
toCurrency:any

  constructor() {

    
  }
  ngOnInit() { 
  }
  

  convert(): void {
    const fromRate = this.exchangeRate[this.option];
    const toRate = this.exchangeRate[this.op1];
    this. a=this.amount/fromRate*toRate
    console.log(this.a);
    this.show=true
    this.show1=false
    
  }}
