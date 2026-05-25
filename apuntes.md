# Vite

- Builder y transpilador
- Creamos el proyecto con TS y React Compiler
- en eslint.config, modificamos -> `tseslint.configs.recommended` por:

```
  tseslint.configs.strict,
  tseslint.configs.stylistic,
```

# Monorepo multipaquete

- Package.json global
<<<<<<< HEAD
- Un repo global, varios paquetes dentro
- Indicamos en package.json los workspaces (aquí podemos definir backend, frontend, etc)

````
  "workspaces": [
  		"projects/*"
  	],
  	```
````

- Investigar como hacerlo con `pnmp`

# React

- La carpeta `public` es transparente
- `src` es donde va el código fuente
- `index.html` va fuera de `src`
- Es client side rendering por defecto y se enfoca a SPA
- Con `npm run dev` levantamos el entorno de desarrollo
    - No es bueno en performance
    - No es el producto final
- Con `npm run build` construimos el producto final
    - Prepara los ficheros que realmente se van a descargar
    - El resultado se almacena en `dist` con todo lo necesario para que la app funcione
    - Minifica, ofusca y optimiza
- Con `npm run preview` levanta un servidor con el resultado de build y lo previsualiza
- Todo el css se importa en los componentes, no se enlaza ningún css en index.html
- Este css es compartido por toda la app

## Props

- Son inmutables
- Se pasan de padre a hijo
- Se pueden usar para pasar datos, funciones, etc

## Hooks

- Funciones que nos proporciona react
- Nos permiten usar funcionalidades de react sin necesidad de crear una clase
- Los hooks los pueden usar componentes funcionales
- Deben empezar por use, para que react los reconozca como hooks
- Se llaman dentro de los componentes, no fuera
- No pueden ser llamados dentro de condicionales o bucles, deben estar en el nivel superior del componente
- Siempre se ejecutan en el mismo orden, para que react pueda asociar el estado correcto a cada hook
- Siempre se invocan desde el mismo componente o en otro hook, no pueden ser llamados desde otro componente
- Se pueden crear nuestros propios hooks, para reutilizar lógica entre componentes

### useState

- Nos permite tener estado en un componente funcional
- Devuelve un array con el estado actual y una función para actualizarlo
- El estado puede ser de cualquier tipo: primitivo, objeto, array, etc
- Al actualizar el estado, el componente se vuelve a renderizar con el nuevo estado, pero no se actualiza inmediatamente, sino en el siguiente renderizado, por eso es asíncrono

# Screaming architecture

- También se llama vertical slicing o feature-based architecture
- Se organiza el código por funcionalidades, no por tipo de archivo
- Refleja el dominio en las carpetas:
    - features
        - users
            - components
            - hooks
            - services
        - products
            - components
            - hooks
            - services
    - shared
        - components
        - hooks
        - services
=======
- Un repo global
- varios paquetes dentro
- indicamos en package.json los workspaces (aqui podemos definir backend, frontend, etc)
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)
