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
        <figure>
          <h2>{item.fields.name}</h2>
          <h2>{item.fields.race}</h2>
          <h2>{item.fields.class}</h2>
          <article>
            <Markdown>{item.fields.description}</Markdown>
          </article>
          <article>
            <Markdown>{item.fields.backstory}</Markdown>
          </article>

          <div
            className={s.hero}
            style={{
              backgroundImage: `url(${item.fields.hero.fields.file.url})`,
            }}
            alt={item.fields.hero.fields.file.title}
          ></div>
        </figure>
      ))}
    </section>
  );
};
