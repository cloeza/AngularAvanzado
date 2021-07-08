import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario} from '../../models/usuario';
@Component({
  selector: 'app-internal-components',
  templateUrl: './internal-components.component.html',
  styleUrls: ['./internal-components.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalComponentsComponent implements OnInit {

  usuarios: Usuario[]=[
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
  }
]

  constructor() { }

  ngOnInit() {
  }

}
