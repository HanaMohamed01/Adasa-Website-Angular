import { Component, Input } from '@angular/core';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-homelatestarticles',
  imports: [],
  templateUrl: './homelatestarticles.html',
  styleUrl: './homelatestarticles.css',
})
export class Homelatestarticles {
  @Input() latestarticles: PostsList[] = [];
}
  