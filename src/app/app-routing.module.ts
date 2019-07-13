
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'home-search', component: HomeSearchComponent },
  { path: '', redirectTo: '/home-search', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
