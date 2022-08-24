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

    let modPhrase = phrase.replace("_A", "Ahe");
    modPhrase = modPhrase.replace("'_", " Prime");
    modPhrase = modPhrase.replace("_", "");

    speech.current.text = modPhrase;
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
    window.speechSynthesis.onvoiceschanged = () => {
      speech.current.voice = window.speechSynthesis.getVoices()[0];
    }

    speech.current.voice = null;
    speech.current.lang = "en";
    handleAudio();
    init.current.initDone = true;
  }, []);
  return <></>;
};
