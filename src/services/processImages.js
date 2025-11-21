export async function generateDressPreview(bodyImg, fabricImg, designData) {
  const formData = new FormData();
  formData.append("body", bodyImg);
  formData.append("fabric", fabricImg);
  formData.append("design", JSON.stringify(designData));

  const res = await fetch("https://your-backend.com/api/generate", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to generate dress preview");
  }

  const data = await res.json();
  return data.outputImage;
}