const isPreview = process.env.PUBLIC_PREVIEW === "1";

if (!isPreview) {
  const blockers = [];

  if (process.env.SECURITY_RESIDENCY_AUDITED !== "1") {
    blockers.push("Punto 8: auditar y aprobar la residencia y jurisdicción efectivas de producción.");
  }

  if (process.env.PRIVACY_POLICY_APPROVED !== "1") {
    blockers.push("Validar y aprobar la política de privacidad legal definitiva.");
  }

  if (!process.env.PUBLIC_WAITLIST_ENDPOINT?.startsWith("https://")) {
    blockers.push("Configurar un endpoint HTTPS propio para la lista privada.");
  }

  if (blockers.length) {
    console.error("\nPUBLICACIÓN DEFINITIVA BLOQUEADA\n");
    for (const blocker of blockers) console.error(`- ${blocker}`);
    console.error("\nLa preview sí puede compilarse con PUBLIC_PREVIEW=1.\n");
    process.exit(1);
  }
}

