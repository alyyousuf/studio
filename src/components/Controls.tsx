import { useState } from "react";

export default function Controls({ onGenerate }: any) {
  const [lyrics, setLyrics] = useState("");
  const [genre, setGenre] = useState("Cinematic");
  const [vocal, setVocal] = useState("Emotional Male Vocal");
  const [bpm, setBpm] = useState(90);
  const [intensity, setIntensity] = useState(7);

  return (
    <div className="card">
      <h3>الإعدادات</h3>

      <textarea
        rows={4}
        placeholder="أدخل كلمات الأغنية هنا..."
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
      />

      <div className="grid grid-2">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option>Cinematic</option>
          <option>Shaabi Dramatic</option>
          <option>Conscious Rap</option>
        </select>

        <select onChange={(e) => setVocal(e.target.value)}>
          <option>Emotional Male Vocal</option>
          <option>Female Powerful Vocal</option>
          <option>Choir Epic Vocal</option>
        </select>
      </div>

      <div className="grid grid-2">
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
        />

        <input
          type="number"
          value={intensity}
          min={1}
          max={10}
          onChange={(e) => setIntensity(Number(e.target.value))}
        />
      </div>

      <button
        onClick={() =>
          onGenerate({ lyrics, genre, vocal, bpm, intensity })
        }
      >
        توليد البرومبت
      </button>
    </div>
  );
}