import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home, title: 'عدسة - الرئيسية' },
  { path: '**', component: Notfound, title: 'عدسة - الصفحة غير موجودة' },
];
