import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PGDAComponent } from './components/PGDA/pgda.component';

const routes: Routes = [
  { path: '', redirectTo: '/pgda', pathMatch: 'full' },
  { path: 'pgda', component: PGDAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
