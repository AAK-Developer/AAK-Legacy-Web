---
locale: en
translationKey: recovery-kit
slug: recovery-kit-privacy-responsibility
title: "Recovery Kit: privacy also means responsibility"
description: What the Recovery Kit protects, why AAK keeps no usable copy, and how its safekeeping should be understood.
category: Security and privacy
tags: [Recovery Kit, encryption, recovery]
pubDate: 2026-09-10
author: AAK Developer
---

A Zero Knowledge system must prevent the provider from reading your content. That protection has an important consequence: the provider cannot independently rebuild what you lose either.

## An external recovery path

The Recovery Kit contains a random 256-bit secret generated on your device. A QR is the primary format, with text as a fallback. It is designed to support fully offline recovery.

AAK Legacy keeps no usable copy. The kit must be stored outside the application and separately from authorized devices.

## When it may be needed

Your authorized devices normally provide access to the Legacy. The Recovery Kit becomes essential if all those devices are changed or lost and you need to restore access.

## A warning that must remain clear

If every authorized device and the Recovery Kit are lost, the content becomes cryptographically unrecoverable. Neither AAK, Apple, nor support can restore it.

This is not a hidden limitation. It follows directly from designing AAK Legacy without a master key to your digital life.
