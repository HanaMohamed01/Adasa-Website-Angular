import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsData } from '../posts-data';
import { PostsList } from '../posts-list';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogcontent',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './blogcontent.html',
  styleUrl: './blogcontent.css',
})
export class Blogcontent implements OnInit {
  private postsData = inject(PostsData);
  private route = inject(ActivatedRoute);

  allPosts: PostsList[] = [];
  filteredPosts: PostsList[] = [];
  paginatedPosts: PostsList[] = [];
  categories: string[] = ['جميع المقالات'];
  selectedCategory: string = 'جميع المقالات';
  searchQuery: string = '';

  viewMode: 'grid' | 'list' = 'grid';

  currentPage: number = 1;
  pageSize: number = 9;
  totalPages: number = 1;
  pageNumbers: number[] = [];

  ngOnInit() {
    this.allPosts = this.postsData.posts;
    this.filteredPosts = this.allPosts;

    const uniqueCategories = [
      ...new Set(this.allPosts.map((post) => post.category)),
    ];
    this.categories = ['جميع المقالات', ...uniqueCategories];

    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery = params.get('search') ?? '';
      this.currentPage = 1;
      this.applyFilters();
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPosts = this.allPosts.filter((post) => {
      const matchesCategory =
        this.selectedCategory === 'جميع المقالات' ||
        post.category === this.selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    this.totalPages = Math.ceil(this.filteredPosts.length / this.pageSize);
    this.calculatePageNumbers();
    this.updatePaginatedPosts();
  }

  updatePaginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex);
  }

  calculatePageNumbers() {
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedPosts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  onSearchChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
}
