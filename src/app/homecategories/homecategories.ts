import { Component, Input, OnInit } from '@angular/core';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-homecategories',
  imports: [],
      templateUrl: './homecategories.html',
  styleUrl: './homecategories.css',
})
export class Homecategories  {
  @Input() categories: PostsList[] = [];


}
