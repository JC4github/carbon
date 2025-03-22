import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCardModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs = [
    {
      category: 'Products & Materials',
      questions: [
        {
          question: 'What is carbon fiber?',
          answer:
            "Carbon fiber is a strong, lightweight material made of thin crystalline filaments of carbon. It's known for its high strength-to-weight ratio, making it ideal for automotive and performance applications.",
        },
        {
          question: 'Are your products genuine carbon fiber?',
          answer:
            'Yes, all our products are made with authentic carbon fiber materials, carefully crafted to meet the highest quality standards.',
        },
        {
          question: 'How durable are carbon fiber products?',
          answer:
            'Carbon fiber products are extremely durable and resistant to fatigue. With proper care, they can last for many years while maintaining their structural integrity.',
        },
      ],
    },
    {
      category: 'Orders & Shipping',
      questions: [
        {
          question: 'What are your shipping times?',
          answer:
            'Standard shipping typically takes 3-5 business days within the continental US. International shipping times vary by location.',
        },
        {
          question: 'Do you offer international shipping?',
          answer:
            'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
        },
        {
          question: 'What is your return policy?',
          answer:
            'We offer a 30-day return policy for unused items in their original packaging. Custom orders are non-returnable.',
        },
      ],
    },
    {
      category: 'Installation & Maintenance',
      questions: [
        {
          question: 'Do you offer installation services?',
          answer:
            'We provide installation guides for all our products. For complex installations, we recommend professional installation services.',
        },
        {
          question: 'How should I care for carbon fiber products?',
          answer:
            'Clean with mild soap and water, avoid harsh chemicals, and protect from extreme temperatures. Regular waxing can help maintain the finish.',
        },
        {
          question: 'Are your products UV resistant?',
          answer:
            'Yes, our products are treated with UV-resistant coating to prevent yellowing and degradation from sun exposure.',
        },
      ],
    },
  ];
}
