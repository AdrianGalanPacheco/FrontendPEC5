import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css'],
})
export class ArticleNewTemplateComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Print article in console
      const formData = form.value.article;
      console.log('Datos del formulario recogidos correctamente:');
      console.log('Nombre del artículo:', formData.name);
      console.log('Precio:', formData.price + '€');
      console.log('URL de imagen:', formData.imageUrl);
      console.log('En oferta:', formData.isOnSale);
    } else {
      console.log('Hay campos sin rellenar');
    }
  }
}
