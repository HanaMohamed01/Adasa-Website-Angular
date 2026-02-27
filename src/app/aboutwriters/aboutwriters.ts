import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsData } from '../posts-data';

@Component({
  selector: 'app-aboutwriters',
  imports: [CommonModule],
  templateUrl: './aboutwriters.html',
  styleUrl: './aboutwriters.css',
})
export class Aboutwriters implements OnInit {
  private postsService = inject(PostsData);
  writers: any[] = [];

  ngOnInit(): void {
    const allAuthors = this.postsService.posts.map((post) => post.author);
    this.writers = allAuthors.filter(
      (author, index, self) =>
        index === self.findIndex((a) => a.name === author.name),
    );
  }
}
