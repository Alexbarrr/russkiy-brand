import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, CATEGORIES, CATEGORY_ORDER, type CategoryId } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const items = [];
  for (const id of CATEGORY_ORDER) {
    const entries = await getCollection(id, ({ data }) => !data.draft);
    for (const entry of entries) {
      items.push({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.pubDate,
        link: `/${id}/${entry.id}/`,
        categories: [CATEGORIES[id as CategoryId].title, ...(entry.data.tags ?? [])],
      });
    }
  }
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items,
    customData: '<language>ru-RU</language>',
  });
}
