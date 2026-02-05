import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-homesubscribesection',
  imports: [RouterLink],
  templateUrl: './homesubscribesection.html',
  styleUrl: './homesubscribesection.css',
})
export class Homesubscribesection {
  @Input() images: PostsList[] = [];
}
