import {useState} from 'react'
import LyricsPanel from './ui/LyricsPanel'
import DirectorPanel from './ui/DirectorPanel'
import ExportCards from './ui/ExportCards'
import {generateAllFormats} from './core/promptEngine'

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
const result = generateAllFormats({...data,lyrics})
setFormats(result)
}

return(
<div className="container">

<div className="header">
<h1>🎛 استديو علي</h1>
<span>الإصدار الاحترافي - Dark</span>
</div>

<div className="layout">
<LyricsPanel lyrics={lyrics} setLyrics={setLyrics} />
<DirectorPanel data={data} setData={setData} onGenerate={handleGenerate} />
</div>

<ExportCards formats={formats} />

</div>
)
}