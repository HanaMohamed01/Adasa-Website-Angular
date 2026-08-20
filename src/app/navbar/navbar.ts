import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchOpen = false;
  searchQuery = '';
  private document = inject(DOCUMENT);

  constructor(private router: Router) {}

  submitSearch() {
    const query = this.searchQuery.trim();

    if (!query) {
      return;
    }

    this.searchOpen = false;
    const menu = this.document.getElementById('navbarSupportedContent');
    const toggler = this.document.querySelector('.navbar-toggler');
    menu?.classList.remove('show');
    toggler?.setAttribute('aria-expanded', 'false');

    this.router.navigate(['/bloghome'], {
      queryParams: { search: query },
      fragment: 'article-search',
    });
  }
}
