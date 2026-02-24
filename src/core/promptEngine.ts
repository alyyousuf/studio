export function generateAllFormats(data:any){

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
  rhythm: base + "\nEmphasize groove, rhythm clarity, and percussive drive.",
  vocal: base + "\nHighlight vocal expression and emotional articulation."
}
}