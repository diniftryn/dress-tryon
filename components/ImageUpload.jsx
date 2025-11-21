import React, { useState } from "react";
import { generateDressPreview } from "../services/processImages";

export default function ImageUpload({ designData }) {
  const [bodyImg, setBodyImg] = useState(null);
  const [fabricImg, setFabricImg] = useState(null);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    const output = await generateDressPreview(bodyImg, fabricImg, designData);
    setResult(output);
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Upload Images</h2>

      <div className="flex flex-col gap-4">
        <label>
          Full Body Photo
          <input type="file" accept="image/*" onChange={(e) => setBodyImg(e.target.files[0])} />
        </label>

        <label>
          Fabric Pattern Photo
          <input type="file" accept="image/*" onChange={(e) => setFabricImg(e.target.files[0])} />
        </label>

        <button
          className="bg-green-600 text-white py-2 rounded"
          onClick={handleGenerate}
          disabled={!bodyImg || !fabricImg}
        >
          Generate Dress Preview
        </button>

        {result && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Preview</h3>
            <img src={result} alt="Dress preview" className="rounded shadow" />
          </div>
        )}
      </div>
    </div>
  );
}