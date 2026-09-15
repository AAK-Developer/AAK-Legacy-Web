---
locale: pt
translationKey: recovery-kit
slug: recovery-kit-privacidade-responsabilidade
title: "Recovery Kit: privacidade também significa responsabilidade"
description: O que protege o Recovery Kit, porque a AAK não guarda uma cópia utilizável e como deve conservá-lo.
category: Segurança e privacidade
tags: [Recovery Kit, cifragem, recuperação]
pubDate: 2026-09-10
author: AAK Developer
---

Um sistema Zero Knowledge deve impedir que o fornecedor leia o conteúdo. Essa proteção implica que também não pode reconstruir sozinho aquilo que o utilizador perder.

## Uma via externa de recuperação

O Recovery Kit contém um segredo aleatório de 256 bits criado no dispositivo. O QR é o formato principal e existe um texto alternativo. Foi concebido para recuperação totalmente offline.

O AAK Legacy não guarda uma cópia utilizável. O kit deve permanecer fora da app e separado dos dispositivos autorizados.

## Quando é necessário

Os dispositivos autorizados dão acesso normal ao Legacy. O Recovery Kit torna-se essencial se todos esses dispositivos forem perdidos ou substituídos.

Se perder todos os dispositivos autorizados e também o kit, o conteúdo torna-se criptograficamente irrecuperável. Nem a AAK, nem a Apple, nem o suporte o podem restaurar. É a consequência direta de não existir uma chave-mestra.
