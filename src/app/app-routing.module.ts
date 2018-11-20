import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
{
  path: '',
  loadChildren: './listing/listing.module#ListingModule'
},
{
  path: 'create',
  loadChildren: './create/create.module#CreateModule'
},
{
  path: 'update',
  loadChildren: './update/update.module#UpdateModule'
},
{
  path: 'delete',
  loadChildren: './delete/delete.module#DeleteModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
