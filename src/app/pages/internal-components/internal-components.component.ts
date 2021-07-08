import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Models from '../../models';

@Component({
  selector: 'app-internal-components',
  templateUrl: './internal-components.component.html',
  styleUrls: ['./internal-components.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalComponentsComponent implements OnInit {

  usuarios: Models.Usuario[]=[
    {
    name:'pedro',
    type: 'web'
  },  {
    name:'pedro',
    type: 'art'
  }, {
    name:'pedro',
    type: 'admin'
  }, {
    name:'pedro',
    type: 'manager'
  },{
    name: 'Pedro',
    type: 'web'
  }, {
    name: 'Pedro',
    type: 'art'
  }, {
    name: 'Pedro',
    type: 'admin'
  }, {
    name: 'Pedro',
    type: 'manager'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
