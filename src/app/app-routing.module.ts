import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { orderComponent } from './pages/order/ordercomponent';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FoodComponent } from './pages/food/food.component';
import { VendorComponent } from './pages/vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: 'order',
    component: orderComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'vendor',
    component: VendorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
