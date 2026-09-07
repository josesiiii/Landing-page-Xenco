# XENCO — Landing demo (React + Vite + Tailwind + Framer Motion)

Demo de frontend para la nueva landing de XENCO S.A., con datos "quemados" (mock).
Sin backend ni lógica real: es una maqueta visual funcional.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura

- `src/data/content.js` — **todo** el contenido de texto/mock (misión, visión,
  servicios, testimonios, equipo, clientes, políticas). Edítalo aquí primero.
- `src/components/Navbar.jsx` — navbar horizontal (mezcla de mini-navbar +
  resizable-navbar de 21st.dev).
- `src/components/PoliciesSidebar.jsx` — panel vertical de políticas (kinetic
  navigation adaptada a vertical).
- `src/components/HillsBackground.jsx` — fondo animado del Hero (aproximación
  a glsl-hills con SVG; ver notas abajo).
- `src/components/NeuralBackground.jsx` — fondo animado del login (canvas,
  paleta multicolor de la marca).
- `src/components/InfiniteClientSlider.jsx` — slider infinito de logos de
  clientes (placeholders — reemplazar con logos reales).
- `src/pages/LoginPage.jsx`, `src/pages/DashboardPage.jsx` — login simulado +
  dashboard mock tras "iniciar sesión".

## Pendientes para dejarlo 100% real

1. **Logos de clientes**: el slider ya está listo para mostrarlos — solo falta
   que coloques los archivos en `public/logos/` con estos nombres exactos:
   `flamingo.svg`, `yamaha-motors-finance.svg`, `epm.svg`, `ruta-n.svg`,
   `plaza-mayor.svg`, `tdea.svg`. Mientras no exista el archivo, el slider
   muestra el nombre en texto como respaldo (no se rompe la demo).
2. **Colores exactos**: en `tailwind.config.js`, sección `theme.extend.colors.xenco`,
   ajustar los HEX si tienes los oficiales del manual de marca (por ahora son
   una aproximación tomada de las capturas de la intranet).
3. **Logo real**: hoy el logo es solo texto ("Xenco" con la X en dorado). Si
   tienes el archivo del logo (SVG/PNG), reemplázalo en `Navbar.jsx`,
   `Footer.jsx` y `LoginPage.jsx`.
4. **Contenido de SGSST / SIG / Conocimiento / Registros**: hoy solo están
   como entradas de navegación (`policyLinks` en `content.js`) que apuntan a
   anclas `#`. Cuando me pases las capturas/texto de la intranet, armamos el
   contenido real de cada una (puede ser una sección propia o una página aparte
   por ítem).
5. **GLSL real**: `HillsBackground.jsx` es una aproximación con SVG animado
   en la paleta de la marca. Si quieres el shader GLSL real de
   `@designali-in/glsl-hills`, se puede portar usando `three.js` u `ogl`
   (instalar el paquete y reemplazar este componente).
6. **Equipo**: agregar fotos reales en `Team.jsx` (hoy son iniciales sobre
   fondo neutro).
