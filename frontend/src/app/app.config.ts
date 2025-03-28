import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { ProductService } from './pages/products/services/product.service';
import { MockProductService } from './pages/products/services/mock-product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: ProductService, useClass: MockProductService },
  ],
};
