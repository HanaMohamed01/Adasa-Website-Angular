import { Component, Input } from '@angular/core';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-homearticles',
  imports: [],
  templateUrl: './homearticles.html',
  styleUrl: './homearticles.css',
})
export class Homearticles {
  @Input() posts: PostsList[] = [];
}
