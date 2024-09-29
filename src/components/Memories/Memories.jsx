import * as contentful from "contentful";
import { useEffect, useState } from "react";
import s from "./Style.module.scss";

export const Memories = () => {
  const [memory, setMemory] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "memory" }).then((res) => setMemory(res));
  }, []);
  console.log(memory);

  return (
    <section className={s.Memories}>
      {memory?.items?.map((item) => (
        <figure>
          
          {/* <img src={item.fields.thumbnail.fields.file.url} alt="" /> */}
          <figcaption>
            <article>
              <hgroup>
                <h2>{item.fields.title}</h2>
              </hgroup>
              <p>{item.fields.content}</p>
            </article>
          </figcaption>
          <div
            className={s.img_container}
            style={{
              backgroundImage: `url(${item.fields.thumbnail.fields.file.url})`,
            }}
          ></div>
        </figure>
      ))}
    </section>
  );
};
