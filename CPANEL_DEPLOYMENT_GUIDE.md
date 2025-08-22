# Guía de Deployment para cPanel

## Resumen
Esta aplicación React/Vite está configurada para funcionar perfectamente en hosting compartido con cPanel.

## Pasos para Deployment en cPanel

### 1. Construir la aplicación
En tu computadora local, ejecuta:

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Construir para producción
npm run build
```

Esto creará una carpeta `dist` con todos los archivos optimizados.

### 2. Subir archivos a cPanel

**Método A: File Manager de cPanel**
1. Accede a tu cPanel
2. Abre "File Manager"
3. Navega a `public_html` (o `public_html/tudominio.com` si tienes addon domains)
4. Sube TODOS los archivos del directorio `dist` a esta carpeta
   - **IMPORTANTE**: Sube el CONTENIDO de la carpeta `dist`, no la carpeta misma

**Método B: FTP**
1. Conecta vía FTP a tu hosting
2. Navega a `public_html`
3. Sube todos los archivos de `dist/` a la raíz del dominio

### 3. Archivos que se subirán
Después del build, tendrás estos archivos en `dist/`:
- `index.html` (archivo principal)
- `assets/` (carpeta con CSS, JS e imágenes optimizadas)
- `.htaccess` (configuración de Apache - muy importante)
- Otros archivos estáticos

### 4. Verificación
- El archivo `.htaccess` se incluye automáticamente y configurará el servidor
- Visita tu dominio - debería cargar la página principal
- Prueba la navegación interna - todas las rutas deberían funcionar

## Configuración Especial para cPanel

### .htaccess incluido
El proyecto incluye un archivo `.htaccess` optimizado que:
- Maneja el routing client-side de React
- Agrega headers de seguridad
- Habilita compresión GZIP
- Configura cache del navegador

### Optimizaciones para hosting compartido
- Assets optimizados y minificados
- Chunks separados para mejor caching
- Configuración de fallback para SPA

## Actualizaciones Futuras

Para actualizar el sitio:
1. Haz cambios en el código
2. Ejecuta `npm run build`
3. Reemplaza los archivos en `public_html` con el nuevo contenido de `dist/`

## Troubleshooting

**PROBLEMA MÁS COMÚN: Página completamente en blanco**
**Causas y soluciones**:
1. **Archivo .htaccess faltante**: Asegúrate de que esté en la raíz
2. **Archivos mal subidos**: Sube el CONTENIDO de la carpeta `dist`, no la carpeta completa
3. **JavaScript bloqueado**: Revisa la consola del navegador (F12 → Console) para errores
4. **Permisos incorrectos**: Archivos deben ser 644, carpetas 755

**Problema**: CSS no carga
**Solución**: Asegúrate de subir la carpeta `assets/` completa

**Problema**: Rutas no funcionan al recargar
**Solución**: El archivo `.htaccess` debe estar en la raíz del dominio

## Formulario de Contacto

El formulario actualmente muestra mensajes de éxito pero no envía emails reales. Para activar el envío de emails, se requiere configuración adicional del backend.

## Soporte

Si tienes problemas:
1. Verifica que todos los archivos se hayan subido correctamente
2. Confirma que el `.htaccess` esté en la raíz
3. Revisa los logs de error en cPanel si están disponibles