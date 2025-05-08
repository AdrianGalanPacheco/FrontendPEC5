# ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

1. **Estilo de desarrollo:** Los templates están basados en HTML y directivas, mientras que los reactivos están basados en TypeScript y clases.
2. **Ubicación:** Los templates se ubican en la propia plantilla, mientras que los reactivos se encuentran en el componente.
3. **Tipo de aplicaciones:** Los templates funcionan bien para formularios simples, mientras que los reactivos funcionan mejor para formularios complejos y dinámicos.
4. **Tipo de enlace:** Los templates usan un enlace bidireccional para controlar el campo de entrada, mientras que los reactivos usan un enlace unidireccional.
4. **Validación:** Los templates realizan las validaciones en la propia plantilla, mientras que los reactivos realizan las validaciones en la clase de componente y las pueden personalizar.

# ¿Qué son, para qué sirven y cómo se utilizan las directivas `ngModel` y `ngModelChange`?
`ngModel` es una directiva que permite el enlace entre una propiedad del componente y un campo del formulario. Sirve para sincronizar el valor de un campo de entrada con una variable del componente. Se utiliza con la sintaxis de enlace bidireccional `[(ngModel)]`.
`ngModelChange` es un evento que se dispara cuando cambia el valor vinculado a `ngModel`. Sirve para ejecutar una función personalizada cuando cambia el valor del campo de entrada. Se utiliza junto con `ngModel` para escuchar los cambios `(ngModelChange)="funcion($evento)"`.

# ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
Los estados son propiedades, que se añaden como nombres de clase, de los controles del formulario usados para saber cómo se está comportando un campo de entrada.
1. **`ng-touched`:** El campo ha sido enfocado (focus).
2. **`ng-untouched`:** El campo nunca ha sido enfocado.
3. **`ng-dirty`:** El valor del campo se ha modificado.
4. **`ng-pristine`:** El valor del campo no se ha modificado.
5. **`ng-valid`:** El campo cumple con las validaciones.
6. **`ng-invalid`:** El campo no cumple con alguna validación.
Los estados permiten gestionar mensajes de error, aplicar estilos CSS específicos, habilitar/deshabilitar campos de entrada, saber si la interacción con el usuario se realiza correctamente, etc.

# ¿Qué ventajas aportan los `FormGroup` en la composición de formularios?
1. Permiten agrupar campos relacionados lógicamente y mantener una estructura organizada.
2. Permiten controlar múltiples campos a la vez.
3. Permiten validar múltiples campos a la vez.
4. Permiten reutilizar múltiples campos en otros fomrularios.