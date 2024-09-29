import * as contentful from "contentful";
import { useEffect, useState } from "react";
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
                <h3>{item.fields.race}</h3>
                <h3>{item.fields.class}</h3>
              </hgroup>
              <section>
                <article>
                  <Markdown>{item.fields.description}</Markdown>
                </article>
              </section>
            </figcaption>
          </div>

          <article className={s.backstory}>
            <Markdown>{item.fields.backstory}</Markdown>
          </article>
        </figure>
      ))}
    </section>
  );
};
