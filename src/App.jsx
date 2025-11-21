import React, { useState } from "react";
import DesignForm from "./components/DesignForm";
import ImageUpload from "./components/ImageUpload";

export default function App() {
  const [designData, setDesignData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-center max-w-2xl">
        Visualise your dress before sewing them in 2 simple steps:
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-xl">
        1. Fill up dress design<br />
        2. Upload a full-body photo of you & your fabric pattern
      </p>

      <DesignForm onSubmit={setDesignData} />

      {designData && <ImageUpload designData={designData} />}
    </div>
  );
}