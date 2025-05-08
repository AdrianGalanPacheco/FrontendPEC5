import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

// Names validator
function nameArticleValidator(
  control: AbstractControl
): ValidationErrors | null {
  const forbiddenNames = ['prueba', 'test', 'mock', 'fake'];
  const value = control.value?.toLowerCase();

  if (value && forbiddenNames.includes(value)) {
    return { forbiddenName: { value: control.value } };
  }
  return null;
}

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css'],
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;
  submitted = false;

  private urlPattern =
    /^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}\/[a-zA-Z0-9\-\.]+(\.[a-zA-Z]{2,4})$/i;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, nameArticleValidator]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: [
        '',
        [Validators.required, Validators.pattern(this.urlPattern)],
      ],
      isOnSale: [false],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.articleForm.valid) {
      console.log('Datos del formulario recogidos correctamente:');
      console.log('Nombre del artículo:', this.articleForm.get('name')?.value);
      console.log('Precio:', this.articleForm.get('price')?.value);
      console.log('URL de la imagen:', this.articleForm.get('imageUrl')?.value);
      console.log('En oferta:', this.articleForm.get('isOnSale')?.value);
    } else {
      console.log('Hay campos sin rellenar');
    }
  }
}
