import { Client } from '@notionhq/client';

import { NOTION_API_KEY, NOTION_DB_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';

type CatImage = {
  url: string;
  title: string;
  created: string;
};

// export const prerender = true;
const notion = new Client({ auth: NOTION_API_KEY });

export const load: PageServerLoad = async () => {
  const results: CatImage[] = [];
  const data = await notion.databases.query({
    database_id: NOTION_DB_ID
  });

  data.results.forEach((image) => {
    const mappedProps: CatImage = {
      url: (<any>image).properties.file.files[0].file.url,
      title: (<any>image).properties.Name.title[0].plain_text,
      created: (<any>image).created_time
    };

    results.push(mappedProps);
  });

  return { images: results };
};
