export default function ExportCards({formats}:any){

if(!formats) return null

return(
<div className="cards">
<div className="card">
<h4>Universal</h4>
{formats.universal}
</div>

<div className="card">
<h4>Cinematic</h4>
{formats.cinematic}
</div>

<div className="card">
<h4>Rhythm Focus</h4>
{formats.rhythm}
</div>

<div className="card">
<h4>Vocal Optimized</h4>
{formats.vocal}
</div>
</div>
)
}