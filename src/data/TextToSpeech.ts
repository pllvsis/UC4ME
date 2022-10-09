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