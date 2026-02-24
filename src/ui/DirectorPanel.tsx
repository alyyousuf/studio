export default function DirectorPanel({data,setData,onGenerate}:any){

return(
<div className="panel">
<h3>أدوات المخرج</h3>

<div className="controls-grid">
<select value={data.genre}
onChange={e=>setData({...data,genre:e.target.value})}>
<option>Cinematic</option>
<option>Shaabi Dramatic</option>
<option>Conscious Rap</option>
</select>

<select value={data.vocal}
onChange={e=>setData({...data,vocal:e.target.value})}>
<option>Emotional Male Vocal</option>
<option>Powerful Female Vocal</option>
<option>Epic Choir Vocal</option>
</select>

<input type="number" value={data.bpm}
onChange={e=>setData({...data,bpm:Number(e.target.value)})} />

<input type="number" min="1" max="10"
value={data.intensity}
onChange={e=>setData({...data,intensity:Number(e.target.value)})} />
</div>

<button onClick={onGenerate} style={{marginTop:"12px"}}>
توليد البرومبت الاحترافي
</button>
</div>
)
}