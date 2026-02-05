import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { PostsData } from './posts-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  siteInfo: any;
  protected readonly title = signal('photographyPage');
  private postsService = inject(PostsData);
  ngOnInit(): void {
    this.siteInfo = this.postsService.siteInfo;
  }
}
