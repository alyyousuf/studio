export function generatePrompt(data: any) {
  const {
    lyrics,
    genre,
    vocal,
    bpm,
    intensity
  } = data;

  return `
Create a ${genre} song.
Vocal style: ${vocal}.
Tempo: ${bpm} BPM.
Emotional intensity: ${intensity}/10.
Language: Arabic lyrics.

Structure the song professionally with verses, chorus, and bridge.
Use cinematic dynamics and expressive delivery.

Lyrics:
${lyrics}
`;
}