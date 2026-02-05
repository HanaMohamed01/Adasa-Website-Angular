import { Component, Input } from '@angular/core';
import { HomeCategories } from '../home-category';

@Component({
  selector: 'app-homecategories',
  imports: [],
  templateUrl: './homecategories.html',
  styleUrl: './homecategories.css',
})
export class Homecategories {
  @Input() categories: HomeCategories[] = [];

  getIcon(categoryName: string): string {
    switch (categoryName) {
      case 'إضاءة':
        return 'fa-gear';
      case 'بورتريه':
        return 'fa-user';
      case 'مناظر طبيعية':
        return 'fa-mountain-sun';
      case 'تقنيات':
        return 'fa-sliders';
      case 'معدات':
        return 'fa-gear';
      default:
        return 'fa-folder-open';
    }
  }
}
