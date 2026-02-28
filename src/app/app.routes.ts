import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';
import { RouterModule } from '@angular/router';
import { Bloghome } from './bloghome/bloghome';
import { Aboutmain } from './aboutmain/aboutmain';
import { Detailspage } from './detailespage/detailespage';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home, title: 'عدسة - الرئيسية' },
  { path: 'bloghome', component: Bloghome, title: 'عدسة - المدونة' },
  { path: 'aboutmain', component: Aboutmain, title: 'عدسة - من نحن' },
  {
    path: 'detailspage/:article',
    component: Detailspage,
    title: 'عدسة - التفاصيل',
  },
  { path: '**', component: Notfound, title: 'عدسة - الصفحة غير موجودة' },
];

RouterModule.forRoot(routes, { useHash: true });
