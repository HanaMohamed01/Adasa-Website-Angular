import { Component, Input } from '@angular/core';
import { PostsList } from '../posts-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homearticles',
  imports: [RouterLink],
  templateUrl: './homearticles.html',
  styleUrl: './homearticles.css',
})
export class Homearticles {
  @Input() posts: PostsList[] = [];
}
