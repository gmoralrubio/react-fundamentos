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
- Un repo global
- varios paquetes dentro
- indicamos en package.json los workspaces (aqui podemos definir backend, frontend, etc)
