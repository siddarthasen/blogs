import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'results' , component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ResultComponent]