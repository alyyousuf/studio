export default function LyricsPanel({lyrics,setLyrics}:any){
return(
<div className="panel">
<h3>محرر الكلمات</h3>
<textarea rows={10}
placeholder="اكتب كلمات الأغنية هنا..."
value={lyrics}
onChange={e=>setLyrics(e.target.value)} />
</div>
)
}