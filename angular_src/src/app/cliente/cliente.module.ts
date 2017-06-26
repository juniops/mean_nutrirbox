import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClienteComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteComponent],
  exports: [
    RouterModule
  ]
})
export class ClienteModule { }
