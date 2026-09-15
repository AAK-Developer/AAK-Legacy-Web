---
locale: fr
translationKey: recovery-kit
slug: recovery-kit-confidentialite-responsabilite
title: "Recovery Kit : la confidentialité implique aussi une responsabilité"
description: Ce que protège le Recovery Kit, pourquoi AAK n’en conserve aucune copie utilisable et comment le garder.
category: Sécurité et confidentialité
tags: [Recovery Kit, chiffrement, récupération]
pubDate: 2026-09-10
author: AAK Developer
---

Un système Zero Knowledge doit empêcher le fournisseur de lire votre contenu. Cette protection implique qu’il ne peut pas non plus reconstruire seul ce que vous perdez.

## Une voie externe de récupération

Le Recovery Kit contient un secret aléatoire de 256 bits créé sur votre appareil. Un QR constitue le format principal, avec un texte de secours. Il permet une récupération entièrement hors ligne.

AAK Legacy n’en conserve aucune copie utilisable. Le kit doit rester hors de l’application et séparé des appareils autorisés.

## Quand devient-il indispensable ?

Vos appareils autorisés donnent normalement accès au Legacy. Le Recovery Kit devient essentiel si vous perdez tous ces appareils et devez restaurer l’accès.

Si les appareils autorisés et le kit sont tous perdus, le contenu devient cryptographiquement irrécupérable. Ni AAK, ni Apple, ni l’assistance ne peuvent le restaurer. C’est la conséquence directe d’un système sans clé maîtresse.
