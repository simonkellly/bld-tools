import { useContext, useEffect, useRef } from "react";
import { AudioPlayerContext } from "../context/AudioPlayerContext";
import { SettingsContext } from "../context/SettingsContext";

export const AudioHandler = () => {
  const audioPlayerContext = useContext(AudioPlayerContext);
  const settingsContext = useContext(SettingsContext);

  const settings = useRef(settingsContext);
  const speech = useRef(new SpeechSynthesisUtterance());
  const init = useRef({initDone: false}); 

  const sayPhrase = async (phrase: string) => {
    if (!settings.current.ttsEnabled) {
      return;
    }

    let modPhrase = phrase.replace("_A", "Ahe");
    modPhrase = modPhrase.replace("_", "");

    speech.current.text = modPhrase;
    window.speechSynthesis.speak(speech.current);
    await new Promise(resolve => speech.current.onend = resolve);
  }

  const handleAudio = async () => {
    while(true) {
      await new Promise(resolve => setTimeout(resolve));
      if (speech.current.voice == null) continue
      while(audioPlayerContext.toSay.length > 0) {
        const phrase = audioPlayerContext.toSay.shift();
        phrase && await sayPhrase(phrase);
      }
    }
  }

  useEffect(() => {
    settings.current = settingsContext;
    speech.current.volume = settingsContext.volume! / 150;
  }, [settingsContext])

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
