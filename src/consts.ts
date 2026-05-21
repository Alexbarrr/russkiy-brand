export const SITE = {
  title: 'Русский бренд',
  description:
    'Медиа о российских брендах: истории создателей, интервью, обзоры и новости индустрии.',
  author: 'Русский бренд',
  lang: 'ru',
} as const;

export type CategoryId = 'stories' | 'interviews' | 'reviews' | 'news';

export const CATEGORIES: Record<
  CategoryId,
  { title: string; slug: CategoryId; description: string; hint: string }
> = {
  stories: {
    slug: 'stories',
    title: 'Истории брендов',
    description:
      'Большие материалы о том, как создавались и развивались российские бренды.',
    hint: 'Истории',
  },
  interviews: {
    slug: 'interviews',
    title: 'Интервью с основателями',
    description: 'Разговоры с теми, кто строит бренды своими руками.',
    hint: 'Интервью',
  },
  reviews: {
    slug: 'reviews',
    title: 'Обзоры и подборки',
    description: 'Тематические подборки и обзоры — что попробовать и куда смотреть.',
    hint: 'Обзоры',
  },
  news: {
    slug: 'news',
    title: 'Новости индустрии',
    description: 'Короткие заметки о том, что происходит на рынке российских брендов.',
    hint: 'Новости',
  },
};

export const CATEGORY_ORDER: CategoryId[] = [
  'stories',
  'interviews',
  'reviews',
  'news',
];
