/* Exercise 7: Import Input, Output, EventEmitter, ChangeDetectionStrategy */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Article } from '../models/article';
/* Exercise 7: Import ArticleQuantityChange */
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  /* Exercise 7: Change Detection */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent {
  // Defines an article
  /* Exercise 7: Receives an Article as an Input */
  @Input() article!: Article;

  /* Exercise 7: Emits an event when the quantity changes */
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  changeQuantity(quantity: number) {
    this.quantityChange.emit({
      article: this.article,
      quantityChange: quantity,
    });
  }
}
