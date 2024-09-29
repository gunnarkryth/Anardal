import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useEffect, useState } from "react";

export const Memories = () => {
  const [memory, setMemory] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "memory" }).then((res) => setMemory(res));
  }, []);
  return(
<section>
{memory?.}
</section>
  )
};
