import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      main {
        min-height: calc(
          100vh - 64px - 300px
        ); /* viewport height - header - footer */
        padding: 20px 0;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Carbon Fiber';
}
