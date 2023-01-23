import { Client } from '@notionhq/client';

import { NOTION_API_KEY, NOTION_DB_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';

type CatImage = {
  url: string;
  title: string;
  created: string;
};

const notion = new Client({ auth: NOTION_API_KEY });

export const load: PageServerLoad = async () => {
  const data = await notion.databases.query({
    database_id: NOTION_DB_ID
  });

  const results: CatImage[] = data.results.map((image) => {
    return {
      url: (<any>image).properties.file.files[0].file.url,
      title: (<any>image).properties.Name.title[0].plain_text,
      created: (<any>image).created_time
    };
  });

  return { images: results };
};
