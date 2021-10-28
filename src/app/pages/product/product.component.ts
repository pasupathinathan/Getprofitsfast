import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import pro from "../../../assets/products.json";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:any[];

  pro_d:any;
  name:any;

  constructor(public Activate_route: ActivatedRoute) { 
    this.Activate_route.params.subscribe((res:any)=>{
      this.name=res.name;
      console.log(res);
      this.view();
    })

   
  }

  ngOnInit(): void {
    
  }

  view(){
    this.products =pro;
    this.products.forEach(ele=>{
      if(ele.name == this.name){
        this.pro_d = ele;
      }
    });
    console.log(this.pro_d);
  }

}
