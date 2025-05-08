# ¿Qué son, para qué sirven y cómo se utilizan `FormControl`, `FormGroup` y `FormBuilder`?
`FormControl` es una clase que representa un campo individual del formulario. Sirve para crear un campo de entrada y aplicar validaciones en él. Se usa de la siguiente manera: `const control = new FormControl('');` en TypeScript y `<input [formControl]="control" />` en HTML.
`FormGroup` es una clase que agrupa varios `FormControl`. Sirve para tratar varios campos como un solo grupo. Se usa de la siguiente manera: `const form = new FormGroup({name: new FormControl(...), surname: new FormControl(...)});` en TypeScript y `<form [formGroup]="form"> <input .../> <input .../> </form>` en HTML.
`FormBuilder` es un servicio que facilita la creación de `FormControl` y `FormGroup`. Sirve para reducir la cantidad de código para crear formularios. Se usa de la siguiente manera: `constructor(private fb: FormBuilder){} this.form = this.fb.group({name: [''], surname[''],});`

# Busca en la página oficial de Angular (o utiliza un recurso de O'Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios recreativos. Construye una tabla de resumen de estos.

| Validador                               | Resumen                                                                                          |
|-----------------------------------------|--------------------------------------------------------------------------------------------------|
| `Validators.min(min: number)`           | Valida que el valor numérico sea mayor o igual que `min`.                                        |
| `Validators.max(max: number)`           | Valida que el valor numérico sea menor o igual que `max`.                                        |
| `Validators.required`                   | Valida que el campo no esté vacío.                                                               |
| `Validators.requiredTrue`               | Valida que el valor sea `true` (usado normalmente con checkboxes).                               |
| `Validators.email`                      | Valida que el valor tenga formato de correo electrónico.                                         |
| `Validators.minLength(minLength)`       | Valida que la longitud mínima del valor sea `minLength`.                                         |
| `Validators.maxLength(maxLength)`       | Valida que la longitud máxima del valor sea `maxLength`.                                         |
| `Validators.pattern(pattern)`           | Valida que el valor coincida con una expresión regular o patrón proporcionado.                   |
| `Validators.nullValidator`              | No realiza ninguna validación; siempre devuelve válido (`null`).                                 |
| `Validators.compose(validators[])`      | Combina varios validadores en uno solo.                                                          |
| `Validators.composeAsync(validators[])` | Combina varios validadores asincrónicos en uno solo.                                             |

# ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?
Los estados en los formularios reactivos son propiedades booleanas que permiten saber cómo se encuentran los controles o grupos de controles en un momento determinado.
1. **`valid`:** El campo cumple con las validaciones.
2. **`invalid`:** El campo no cumple con alguna validación.
3. **`pending`:** El campo tiene una validación asíncrona en marcha.
4. **`disabled`:** El campo está deshabilitado.
5. **`enabled`:** El campo está habilitado.
6. **`touched`:** El campo ha sido enfocado (focus).
7. **`untouched`:** El campo nunca ha sido enfocado.
8. **`dirty`:** El valor del campo se ha modificado.
9. **`pristine`:** El valor del campo no se ha modificado.