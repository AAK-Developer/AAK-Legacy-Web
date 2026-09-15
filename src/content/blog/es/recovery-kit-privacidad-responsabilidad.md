---
locale: es
translationKey: recovery-kit
slug: recovery-kit-privacidad-responsabilidad
title: "Recovery Kit: privacidad también significa responsabilidad"
description: Qué protege el Recovery Kit, por qué AAK no conserva una copia utilizable y cómo debe entenderse su custodia.
category: Seguridad y privacidad
tags: [Recovery Kit, cifrado, recuperación]
pubDate: 2026-09-10
author: AAK Developer
---

Un sistema Zero Knowledge debe impedir que el proveedor pueda leer tu contenido. Esa protección tiene una consecuencia importante: tampoco puede reconstruir por su cuenta aquello que tú pierdas.

## Una vía externa de recuperación

El Recovery Kit contiene un secreto aleatorio de 256 bits generado en tu dispositivo. Se presenta mediante un QR como vía principal y un texto de respaldo. Está preparado para permitir una recuperación completamente offline.

AAK Legacy no conserva una copia utilizable. El kit debe guardarse fuera de la aplicación y separado de los dispositivos autorizados.

## Cuándo puede ser necesario

Tus dispositivos autorizados permiten acceder normalmente al Legacy. El Recovery Kit se convierte en esencial si cambias o pierdes todos esos dispositivos y necesitas recuperar el acceso.

## La advertencia que debe ser clara

Si pierdes todos los dispositivos autorizados y también el Recovery Kit, el contenido será criptográficamente irrecuperable. Ni AAK, ni Apple ni el equipo de soporte podrán recuperarlo.

No es una limitación escondida: es el resultado directo de diseñar el sistema para que AAK no tenga una llave maestra sobre tu vida digital.
