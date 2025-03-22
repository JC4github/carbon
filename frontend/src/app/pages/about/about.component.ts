import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  companyHistory = [
    {
      year: 2010,
      title: 'Foundation',
      description:
        'Carbon Fiber was founded with a vision to revolutionize the automotive industry through innovative carbon fiber solutions.',
    },
    {
      year: 2015,
      title: 'Expansion',
      description:
        'Expanded into motorcycle and bicycle components, bringing our expertise to new markets.',
    },
    {
      year: 2020,
      title: 'Innovation',
      description:
        'Launched our lifestyle product line, making carbon fiber accessible to everyday consumers.',
    },
  ];
}
