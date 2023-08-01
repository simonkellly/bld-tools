import { useEffect, useRef } from "react";
import { useAudioStore } from "../stores/audio-store";
import { useSettingsStore } from "../stores/settings-store";

export const AudioHandler = () => {
  const toSay  = useAudioStore(store => store.toSay);
  const tts = useSettingsStore(store => store.tts);
  const volume = useSettingsStore(store => store.volume);

  const settings = useRef({tts, volume});

  const speech = useRef(new SpeechSynthesisUtterance());
  const init = useRef({initDone: false}); 

  const sayPhrase = async (phrase: string) => {
    if (!settings.current.tts) {
      return;
    }

    let modPhrase = phrase.replaceAll("'_", " Prime");
    modPhrase = modPhrase.replaceAll("_", "");

    speech.current.text = modPhrase;
    console.log(speech.current);
    window.speechSynthesis.speak(speech.current);
    await new Promise(resolve => speech.current.onend = resolve);
  }

  const handleAudio = async () => {
    while(true) {
      await new Promise(resolve => setTimeout(resolve));
      if (speech.current.voice == null) continue
      while(toSay.length > 0) {
        const phrase = toSay.shift();
        phrase && await sayPhrase(phrase);
      }
    }
  }

  useEffect(() => {
    settings.current = {tts, volume};
    speech.current.volume = volume! / 150;
  }, [tts, volume])

  useEffect(() => {
    if (init.current.initDone) return;
    speech.current.voice = null;
    speech.current.lang = "en";
    speech.current.rate *= 1.2;
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      const chosenVoice = voices.find(v => v.name == "Google US English") ?? voices[0];
      speech.current.voice = chosenVoice;
    }

    handleAudio();
    init.current.initDone = true;
  }, []);
  return <></>;
};
