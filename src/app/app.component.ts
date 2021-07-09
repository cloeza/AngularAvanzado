import { Component } from '@angular/core';
import { Menu } from './models/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = true;

  public menus: Menu[] = [{
    title: 'Modulos',
    key: 'modulos',
    children: [
      {
        title: 'Componente de Modulos Externos',
        path: 'external_componente'
      },{
        title: 'Componentes Externos Web',
        path: 'componentes_externo_web'
      },{
        title: 'Modulo Carga Lenta',
        path: 'editor'
      },{
        title: 'Componente Interno',
        path: 'internal_component'
      }
    ] 
  },
  {
    title: 'Routing',
    key: 'routing',
    children: [{
      title: 'Parametros',
      path: 'routing_params'
    },{
      title:'Productos',
      path:'productos'
    }
  ]

  },
  {  
    title: 'Usuario',
    path: 'usuarios'
  }]

}