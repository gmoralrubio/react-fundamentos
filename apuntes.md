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
