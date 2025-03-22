import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CartComponent,
  ],
  template: `
    <mat-toolbar color="primary">
      <div class="header-content">
        <!-- Mobile Navigation -->
        <div class="mobile-nav">
          <button mat-icon-button [matMenuTriggerFor]="mobileMenu">
            <mat-icon>menu</mat-icon>
          </button>
          <mat-menu #mobileMenu="matMenu">
            <div class="mobile-menu">
              <a mat-button routerLink="/products" routerLinkActive="active"
                >Products</a
              >
              <a mat-button routerLink="/about" routerLinkActive="active"
                >About</a
              >
              <a mat-button routerLink="/contact" routerLinkActive="active"
                >Contact</a
              >
              <a mat-button routerLink="/faq" routerLinkActive="active">FAQ</a>
            </div>
          </mat-menu>
        </div>

        <a routerLink="/" class="logo">
          <mat-icon>carbon</mat-icon>
          <span>Carbon Fiber</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-links desktop-nav">
          <a mat-button routerLink="/products" routerLinkActive="active"
            >Products</a
          >
          <a mat-button routerLink="/about" routerLinkActive="active">About</a>
          <a mat-button routerLink="/contact" routerLinkActive="active"
            >Contact</a
          >
          <a mat-button routerLink="/faq" routerLinkActive="active">FAQ</a>
        </nav>

        <div class="header-actions">
          <button mat-icon-button [matMenuTriggerFor]="profileMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
          <mat-menu #profileMenu="matMenu">
            <div class="profile-menu">
              <a mat-button routerLink="/profile">My Profile</a>
              <a mat-button routerLink="/orders">My Orders</a>
              <a mat-button routerLink="/settings">Settings</a>
            </div>
          </mat-menu>

          <app-cart></app-cart>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      mat-toolbar {
        background-color: #1a1a1a;
        color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 500;

        mat-icon {
          font-size: 1.5rem;
          color: #4caf50;
        }
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;

        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;

          &.active {
            background-color: rgba(255, 255, 255, 0.1);
          }

          &:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          color: white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }

      .profile-menu {
        padding: 0.5rem;
        min-width: 200px;
        background-color: white;

        a {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.5rem 1rem;
          color: #333;
          text-decoration: none;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .mobile-nav {
        display: none;

        button {
          color: white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }

      .mobile-menu {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        padding: 0.5rem;

        a {
          color: #333;
          text-decoration: none;
          padding: 0.5rem 1rem;
          text-align: left;

          &:hover {
            background-color: #f5f5f5;
          }

          &.active {
            background-color: #e0e0e0;
          }
        }
      }

      @media (max-width: 768px) {
        .desktop-nav {
          display: none;
        }

        .mobile-nav {
          display: block;
          margin-right: 0.5rem;
        }

        .header-content {
          padding: 0 0.5rem;
          justify-content: flex-start;
        }

        .logo {
          margin: 0 auto;

          span {
            display: none;
          }
        }

        .header-actions {
          margin-left: auto;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  categories = ['AUTOMOTIVE', 'ACCESSORIES', 'LIFESTYLE'];
  isMobile = false;
  isMenuOpen = false;
  private resizeListener: () => void;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.resizeListener = () => this.checkScreenSize();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
