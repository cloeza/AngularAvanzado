import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    QuillModule.forRoot()
  ]
})
export class EditorModule { }
