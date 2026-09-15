# Bloqueos obligatorios antes de publicar AAK Legacy

Este documento forma parte del control de lanzamiento de la web definitiva. Ningún punto abierto puede darse por supuesto.

## Bloqueo principal: Seguridad, punto 8

- [ ] Auditar la configuración real de producción de Cloudflare D1.
- [ ] Confirmar jurisdicción, residencia efectiva, réplicas y transferencias internacionales.
- [ ] Documentar los encargados del tratamiento y sus funciones.
- [ ] Sustituir en los cinco idiomas el texto provisional del punto 8 por la afirmación final comprobada.
- [ ] Obtener aprobación expresa de Enric para publicar esa redacción.

Variable necesaria para una compilación definitiva: `SECURITY_RESIDENCY_AUDITED=1`.

## Privacidad y lista privada

- [ ] Aprobar la política de privacidad legal definitiva en los cinco idiomas.
- [ ] Definir conservación, supresión, portabilidad, base jurídica y comunicaciones de lanzamiento.
- [ ] Conectar `PUBLIC_WAITLIST_ENDPOINT` a un endpoint HTTPS propio de AAK.
- [ ] Añadir validación de email, rate limiting, honeypot y doble confirmación en el servidor.
- [ ] Registrar fecha, fuente, idioma y versión del consentimiento sin guardar más datos de los necesarios.
- [ ] Verificar el límite real de los primeros 100 miembros y las condiciones del 25 % de descuento de por vida.

Variables necesarias para una compilación definitiva: `PRIVACY_POLICY_APPROVED=1` y `PUBLIC_WAITLIST_ENDPOINT=https://…`.

## Regla de publicación

La preview se compila con `PUBLIC_PREVIEW=1` y continúa con `noindex`. Una compilación definitiva queda bloqueada automáticamente mientras falte cualquiera de los requisitos anteriores.

