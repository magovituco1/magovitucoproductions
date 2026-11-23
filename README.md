# MAGO VITUCO PRODUCTIONS — Premium V13.3 SEO & Performance

Base: Premium V12 SEO. Sitio estático para GitHub Pages, https://www.magovituco.com/.

## Cambios V13
- Imagen hero nativa, prioridad alta, precarga responsive y variantes WebP. Se conserva la foto, encuadre y animación.
- Logo WebP optimizado y variantes responsive de fotos. Originales conservados.
- Dimensiones intrínsecas de imágenes y ajuste de proporciones de tarjetas y logos.
- Fuentes no bloqueantes con fallback sin JavaScript; CSS/JS con versión de caché.
- Enlaces EN/ES rastreables; regreso desde agradecimiento en el idioma elegido.
- Se conservan Formspree, Vimeo (lazy), canonical, hreflang, sitemap, robots y JSON-LD.
- La política de caché HTTP y cabeceras de seguridad de GitHub Pages no se pueden modificar mediante HTML/CSS; no se promete una puntuación Lighthouse concreta.

## Publicación
Subir el contenido de este ZIP a la raíz de main del repositorio magovituco1/magovitucoproductions, incluyendo assets/ y es/. Mantener CNAME y cualquier archivo de verificación que ya exista en GitHub. No cambiar DNS ni dominio.
Comprobar ambas páginas, cambio de idioma, Vimeo y formulario. Repetir PageSpeed Insights móvil y ordenador. No hace falta reenviar el sitemap si no cambia.

## V13.1 — Performance Fix
Reproductor Vimeo bajo demanda, con imagen local y aviso de conexión. El parámetro dnt=1 reduce el seguimiento, pero Vimeo puede usar cookies esenciales al reproducir. Puede afectar al descubrimiento automático del vídeo por Google. Se conservan SEO, formulario, imágenes y navegación. Repetir PageSpeed tras publicar.

## V13.2
- CSS principal integrado en ambas páginas para evitar una solicitud bloqueante; style.css se conserva para thanks.html. Si se modifica CSS, sincronizar las copias integradas.
- Variantes responsive de logo e ilusiones; imagen de visión y hero móvil optimizadas.
- Se elimina la reescritura redundante del HTML por JS: los idiomas ya tienen páginas estáticas propias. Lectura inicial de scroll en requestAnimationFrame.
- llms.txt informativo opcional; comprobar que devuelve HTTP 200 tras publicar. No garantiza posicionamiento ni corrige fallos del servidor.
- Se conserva Vimeo bajo demanda. Caché HTTP depende de GitHub Pages.
- Validar diseño, vídeo, navegación, formulario y PageSpeed en ambos idiomas tras publicar.

## V13.3
- Reproductor panorámico 16:9 con imagen independiente del botón y sin deformación; mantiene Vimeo bajo demanda.
