import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public category:string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.category= this.activatedRoute.snapshot.queryParams.category;
    this.activatedRoute.queryParams.subscribe(queryParams=>{
      this.category=queryParams.category;
      console.log(queryParams);
    })
  }

}
