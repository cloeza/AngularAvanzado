import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponenteComponent } from './pages/external-componente/external-componente.component';
import { WebComponentComponent} from './pages/web-component/web-component.component';
import { InternalComponentsComponent} from './pages/internal-components/internal-components.component';
import { RoutingParamsComponent} from './pages/routing-params/routing-params.component';

import { PostsComponent } from './pages/routing-params/posts/posts.component';
import { AboutComponent } from './pages/routing-params/about/about.component';
import {FriendsComponent} from './pages/routing-params/friends/friends.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [{
  path: 'external_componente',
  component: ExternalComponenteComponent
},{
  path:'web_component',
  component: WebComponentComponent
},
  { path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule) },
  {
    path:'internal_component',
    component: InternalComponentsComponent
  },
  {
    path:'routing_params',
    component: RoutingParamsComponent,
    children:[
    {
      path: 'posts',
      component: PostsComponent
    },{
      path:'about',
      component:AboutComponent
    },{
      path:'friends/:usuario_id',
      component:FriendsComponent
    },  
    { path: "", pathMatch: "full", redirectTo: "posts" },
    { path: "**", redirectTo: "posts" }
  ]
  },
  {path : 'productos', component:ProductosComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
