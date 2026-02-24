import { useState } from "react"

function generatePrompts(data:any){
const base = `Create a ${data.genre} Arabic song.
Vocal style: ${data.vocal}.
Tempo: ${data.bpm} BPM.
Emotional intensity: ${data.intensity}/10.
Structure dynamically with cinematic flow.

Lyrics:
${data.lyrics}`

return {
  universal: base,
  cinematic: base + "\nFocus on orchestral depth and dramatic build.",
  rhythm: base + "\nEmphasize groove and percussive drive.",
  vocal: base + "\nHighlight vocal expression and emotional articulation."
}
}

export default function App(){

const [lyrics,setLyrics]=useState("")
const [formats,setFormats]=useState<any>(null)
const [data,setData]=useState({
genre:"Cinematic",
vocal:"Emotional Male Vocal",
bpm:90,
intensity:7
})

function handleGenerate(){
setFormats(generatePrompts({...data,lyrics}))
}

return(
<div className="max-w-7xl mx-auto p-6">

<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-bold text-primary">🎛 استديو علي</h1>
<span className="text-sm text-gray-400">SaaS Dark Edition</span>
</div>

<div className="grid grid-cols-3 gap-6">

<div className="col-span-2 bg-surface p-6 rounded-2xl shadow-xl">
<h3 className="mb-4 font-semibold">محرر الكلمات</h3>
<textarea
rows={12}
className="w-full bg-gray-800 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
placeholder="اكتب كلمات الأغنية هنا..."
value={lyrics}
onChange={e=>setLyrics(e.target.value)}
/>
</div>

<div className="bg-surface p-6 rounded-2xl shadow-xl">
<h3 className="mb-4 font-semibold">أدوات المخرج</h3>

<div className="grid grid-cols-2 gap-3 mb-4">

<select className="bg-gray-800 p-3 rounded-xl"
value={data.genre}
onChange={e=>setData({...data,genre:e.target.value})}>
<option>Cinematic</option>
<option>Shaabi Dramatic</option>
<option>Conscious Rap</option>
</select>

<select className="bg-gray-800 p-3 rounded-xl"
value={data.vocal}
onChange={e=>setData({...data,vocal:e.target.value})}>
<option>Emotional Male Vocal</option>
<option>Powerful Female Vocal</option>
<option>Epic Choir Vocal</option>
</select>

<input type="number"
className="bg-gray-800 p-3 rounded-xl"
value={data.bpm}
onChange={e=>setData({...data,bpm:Number(e.target.value)})} />

<input type="number" min="1" max="10"
className="bg-gray-800 p-3 rounded-xl"
value={data.intensity}
onChange={e=>setData({...data,intensity:Number(e.target.value)})} />

</div>

<button
onClick={handleGenerate}
className="w-full bg-primary hover:bg-purple-700 transition p-3 rounded-xl font-semibold">
توليد البرومبت الاحترافي
</button>

</div>
</div>

{formats && (
<div className="grid grid-cols-2 gap-6 mt-8">

{Object.entries(formats).map(([key,value])=>(
<div key={key}
className="bg-surface p-6 rounded-2xl shadow-lg">
<h4 className="text-accent font-semibold mb-3 capitalize">{key}</h4>
<pre className="text-sm text-gray-300 whitespace-pre-wrap">{String(value)}</pre>
</div>
))}

</div>
)}

</div>
)
}