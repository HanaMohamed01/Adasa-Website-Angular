import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PostsData } from '../posts-data';
import { PostsList } from '../posts-list';

@Component({
  selector: 'app-detailspage',
  imports: [RouterLink],
  templateUrl: './detailespage.html',
  styleUrl: './detailespage.css',
})
export class Detailspage implements OnInit {
  private postsService = inject(PostsData);
  private route = inject(ActivatedRoute);

  post: PostsList | undefined;
  relatedPosts: PostsList[] = [];
  sections: { id: string; title: string }[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const article = params.get('article');
      if (article) {
        this.loadPost(article);
      }
    });
  }

  loadPost(article: string) {
    this.post = this.postsService.posts.find((p) => p.article === article);

    if (this.post) {
      this.relatedPosts = this.postsService.posts
        .filter((p) => p.id !== this.post?.id)
        .slice(0, 3);
      this.extractSections();
    }
  }

  extractSections() {
    if (!this.post) return;
    const lines = this.post.content.split('\n');
    this.sections = lines
      .filter((line) => line.startsWith('## '))
      .map((line, index) => ({
        id: `section-${index + 1}`,
        title: line.replace('## ', ''),
      }));
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
