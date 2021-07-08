import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponenteComponent } from './pages/external-componente/external-componente.component';
import { WebComponentComponent} from './pages/web-component/web-component.component';
import { InternalComponentsComponent} from './pages/internal-components/internal-components.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
