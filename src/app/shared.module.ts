import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
// import { NotFoundComponent } from './core/not-found/not-found.component';
// import { UnderConstructionComponent } from './core/under-construction/under-construction.component';

@NgModule({
  declarations: [
    //NotFoundComponent,
    //UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
