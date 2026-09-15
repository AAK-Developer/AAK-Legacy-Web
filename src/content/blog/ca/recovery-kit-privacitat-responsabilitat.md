---
locale: ca
translationKey: recovery-kit
slug: recovery-kit-privacitat-responsabilitat
title: "Recovery Kit: privacitat també significa responsabilitat"
description: Què protegeix el Recovery Kit, per què AAK no en conserva cap còpia utilitzable i com s’ha de guardar.
category: Seguretat i privacitat
tags: [Recovery Kit, xifratge, recuperació]
pubDate: 2026-09-10
author: AAK Developer
---

Un sistema Zero Knowledge ha d’impedir que el proveïdor pugui llegir el contingut. Aquesta protecció implica que tampoc no pot reconstruir tot sol allò que l’usuari perdi.

## Una via externa de recuperació

El Recovery Kit conté un secret aleatori de 256 bits creat al dispositiu. El QR és el format principal i hi ha un text de suport. Està preparat per a una recuperació completament fora de línia.

AAK Legacy no en conserva cap còpia utilitzable. El kit s’ha de guardar fora de l’app i separat dels dispositius autoritzats.

## Quan és necessari

Els dispositius autoritzats donen accés normal al Legacy. El Recovery Kit esdevé essencial si tots aquests dispositius es perden o se substitueixen.

Si perds tots els dispositius autoritzats i també el kit, el contingut serà criptogràficament irrecuperable. Ni AAK, ni Apple ni el suport el podran restaurar. És la conseqüència directa de no disposar d’una clau mestra.
