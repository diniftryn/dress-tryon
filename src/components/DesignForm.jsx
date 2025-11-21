import React, { useState } from "react";

export default function DesignForm({ onSubmit }) {
  const [data, setData] = useState({
    dressLength: "Midi",
    sleeve: "Short Puff",
    neckline: "Round",
    fit: "Slightly tailored",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Dress Design Details</h2>

      <div className="flex flex-col gap-3">
        <label>
          Dress Length
          <select
            className="border p-2 w-full"
            name="dressLength"
            value={data.dressLength}
            onChange={handleChange}
          >
            <option>Mini</option>
            <option>Midi</option>
            <option>Maxi</option>
          </select>
        </label>

        <label>
          Sleeve Style
          <select
            className="border p-2 w-full"
            name="sleeve"
            value={data.sleeve}
            onChange={handleChange}
          >
            <option>Short Puff</option>
            <option>Short Flare</option>
            <option>Long Sleeve</option>
            <option>Sleeveless</option>
          </select>
        </label>

        <label>
          Neckline
          <select
            className="border p-2 w-full"
            name="neckline"
            value={data.neckline}
            onChange={handleChange}
          >
            <option>Round</option>
            <option>V-neck</option>
            <option>Square</option>
            <option>Scoop</option>
          </select>
        </label>

        <label>
          Fit
          <select
            className="border p-2 w-full"
            name="fit"
            value={data.fit}
            onChange={handleChange}
          >
            <option>Straight</option>
            <option>Slightly tailored</option>
            <option>Fitted</option>
          </select>
        </label>

        <button
          className="bg-blue-600 text-white py-2 rounded mt-3"
          onClick={() => onSubmit(data)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}