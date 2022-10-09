import { TextToSpeech } from '@capacitor-community/text-to-speech';

export async function speakInstruction(instruction: string) {
  await TextToSpeech.speak({
    text: instruction,
    lang: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  });
}

export async function demo() {
  speakInstruction("Turn left now")
  await delay(1000);
  speakInstruction("Stairs ahead")
  await delay(1000);
  speakInstruction("Stairs ascending 3 steps")
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}