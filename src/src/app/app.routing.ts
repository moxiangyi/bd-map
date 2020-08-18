import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { DetailComponent } from './pages/components/detail/detail.component';
import { LoginComponent } from './login/login.component';
// import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
