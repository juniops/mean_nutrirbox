import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { TelefoneComponent } from '../telefone/telefone.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClienteComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteComponent, TelefoneComponent],
  exports: [
    RouterModule
  ]
})
export class ClienteModule { }
