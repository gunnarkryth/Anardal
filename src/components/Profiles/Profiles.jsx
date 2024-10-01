import * as contentful from "contentful";
import { useEffect, useState, useRef } from "react";
import Markdown from "react-markdown";
import s from "./Style.module.scss";

export const Profiles = () => {
  const [profile, setProfile] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({ content_type: "profile" })
      .then((res) => setProfile(res));
  }, []);
  console.log(profile);

  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section>
      {profile?.items?.map((item) => (
        <figure className={s.Profile}>
          <div className={s.overview}>
            <div className={s.img_container}>
              <div
                className={s.hero}
                style={{
                  backgroundImage: `url(${item.fields.hero.fields.file.url})`,
                }}
                alt={item.fields.hero.fields.file.title}
              ></div>
            </div>
            <figcaption>
              <h2 className={s.name}>{item.fields.name}</h2>
              <hgroup>
                {item.fields.titles.map((item) => (
                  <h3>{item}</h3>
                ))}
                <h3>{item.fields.race}</h3>
                <h3>{item.fields.class}</h3>
              </hgroup>
              <div className={s.audio_player}>
                <audio ref={audioPlayer} loop>
                  <source
                    // src={item.fields.theme.fields.file.url}
                    src="https://www.youtube.com/watch?v=rMsTiz9HdaA"
                  />
                </audio>
                <button onClick={toggleMusic}>{isPlaying ? "❚❚" : "▶"}</button>
              </div>
              <section>
                <article>
                  <Markdown>{item.fields.description}</Markdown>
                </article>
              </section>
            </figcaption>
          </div>

          {/* <div className={s.backstory}>
            <div className={s.img_container}>
              <div className={s.hero}></div>
            </div>
            <Markdown className={s.markdown}>{item.fields.backstory}</Markdown>
          </div> */}
        </figure>
      ))}
    </section>
  );
};
