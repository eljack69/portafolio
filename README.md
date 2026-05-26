# Studio Gona Live — Portafolio

Página índice que reúne 13 demos y casos en vivo desplegados en GitHub Pages.

**URL pública**: https://eljack69.github.io/portafolio/

## Estructura

```
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js
└── README.md
```

## Stack

HTML5 + CSS moderno + JS vanilla. Sin build step. Fraunces + Inter (Google Fonts). Filtros por categoría con un solo handler.

## Categorías

- **Turismo** (4): Huancayo Tours, Portafolio Viajes, Komodo, Kalimantan
- **Dental** (5): Aura, Sonrisa Suite, Smile Design Redux, COE, The Dental Clinic
- **Agencia** (2): Gona Chatbots, FlujosIA
- **Estudios** (2): Smile Design Clon, Territorio Huanca Clon

## Despliegue

```powershell
gh repo create eljack69/portafolio --public --source . --remote origin --push
gh api -X POST repos/eljack69/portafolio/pages -f source.branch=main -f source.path=/
```

## TODO próxima iteración

- Reemplazar glifos de cards con screenshots reales (script Playwright)
- Agregar sección "Antes / Después" para los casos de rediseño
- Sumar 1-2 demos rubros faltantes (restaurante, gimnasio, inmobiliaria)
