import { Component, inject, OnInit } from '@angular/core';
import { Homearticles } from '../homearticles/homearticles';
import { Homecategories } from '../homecategories/homecategories';
import { HomeCategory } from '../home-category';
import { PostsData } from '../posts-data';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-home',
  imports: [Homearticles, Homecategories],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private postsService = inject(PostsData);
  posts: PostsList[] = [];
  categories: any[] = [];

  homeCategoryNumbers: HomeCategory[] = [
    {
      number: `50+`,
      icon: `<i class="fa-solid fa-newspaper"></i>`,
      title: 'مقالة',
    },
    {
      number: `10+الف`,
      icon: `<i class="fa-solid fa-user"></i>`,
      title: 'قارئ',
    },
    {
      number: `4`,
      icon: `<i class="fa-solid fa-folder-open"></i>`,
      title: 'تصنيفات',
    },
    {
      number: `6`,
      icon: `<i class="fa-solid fa-pen-nib"></i>`,
      title: 'كاتب',
    },
  ];

  ngOnInit(): void {
    this.posts = this.postsService.posts;
    this.categories = this.postsService.categories;
  }
}
