import { Component, Input } from '@angular/core';
import { PostsList } from '../posts-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homelatestarticles',
  imports: [RouterLink],
  templateUrl: './homelatestarticles.html',
  styleUrl: './homelatestarticles.css',
})
export class Homelatestarticles {
  @Input() latestarticles: PostsList[] = [];
}
