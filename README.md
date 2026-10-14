# GEAGRO · sitio comercial

Landing comercial completa de **GEAGRO**, producto de la Cooperativa GENEOS.
Dominio previsto: **geagro.ar**. Todavía **no está publicada**.

Es un sitio estático e independiente: no depende de archivos ni rutas del sitio de GENEOS.
Las rutas son relativas, así que funciona en la raíz de un dominio, en una subcarpeta
o con un servidor local.

## Estructura

- `index.html`: la landing completa (hero, cómo funciona, módulos, planes y precios, preguntas frecuentes, formulario de demo).
- `assets/css/`: `styles.css` (base visual de GENEOS), `product.css` (componentes de producto y temas de color) y `site.css` (header y footer propios).
- `assets/js/`: `main.js` (menú móvil, marquesina de logos) y `product.js` (formulario de demo por WhatsApp y preguntas frecuentes).
- `assets/img/`, `assets/descargas/`: solo las imágenes y archivos que usa la página.
- `404.html`, `robots.txt` y `sitemap.xml`.
- `.github/workflows/pages.yml`: publicación en GitHub Pages (se ejecuta a mano).

## Ver localmente

```bash
python3 -m http.server 8000
```

y abrir http://localhost:8000/

## Editar

- Textos, precios e imágenes: directamente en `index.html`.
- Colores del producto: `assets/css/product.css`, bloque `.pp-theme-geagro`.
- Formulario de demo: arma un mensaje de WhatsApp al +54 9 249 452-1418 (`assets/js/product.js`). Cuando exista un backend, cambiar el `action` del formulario.

## Publicar (cuando se decida)

1. Crear un repositorio nuevo (por ejemplo `geagro-web`) y subir esta carpeta.
2. En el repositorio: Settings → Pages → Source: **GitHub Actions**, y ejecutar el workflow "Publicar en GitHub Pages" desde la pestaña Actions.
3. Revisar el sitio en la dirección de prueba de GitHub Pages. Mientras sea de prueba, cambiar en `index.html` el meta `robots` a `noindex, nofollow`.
4. Para usar geagro.ar: renombrar `CNAME.example` a `CNAME`, cargar el dominio en Settings → Pages → Custom domain y apuntar el DNS a GitHub Pages (registros A a 185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153, o un CNAME de `www` a `<usuario>.github.io`). **Esto reemplaza la web que hoy esté publicada en ese dominio: hacerlo solo al lanzar.**
5. Volver `robots` a `index, follow` y dar de alta el dominio en Google Search Console con `sitemap.xml`.
