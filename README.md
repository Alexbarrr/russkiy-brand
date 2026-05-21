# Русский бренд

Медиа о российских брендах: истории создателей, интервью, обзоры и новости индустрии.

Сделано на [Astro](https://astro.build) + Tailwind CSS v4 + MDX. Деплой через GitHub Actions на GitHub Pages.

## Запуск локально

```bash
npm install
npm run dev
```

Открыть [http://localhost:4321](http://localhost:4321).

## Как добавить статью

1. Создайте `.md` или `.mdx` файл в нужной папке:
   - `src/content/stories/` — истории брендов
   - `src/content/interviews/` — интервью с основателями
   - `src/content/reviews/` — обзоры и подборки
   - `src/content/news/` — новости индустрии
2. Заполните frontmatter:

   ```markdown
   ---
   title: "Заголовок"
   description: "Короткое описание для превью и SEO"
   pubDate: 2026-05-21
   author: "Имя автора"
   cover: "/covers/название-картинки.svg"
   coverAlt: "Описание обложки"
   tags: ["тег1", "тег2"]
   draft: false
   ---

   Текст статьи в Markdown.
   ```

3. Положите обложку в `public/covers/`.
4. Закоммитьте и запушьте — деплой произойдёт автоматически.

## Структура

- `src/pages/` — страницы и маршруты
- `src/layouts/` — общие шаблоны
- `src/components/` — переиспользуемые блоки
- `src/content/` — статьи в Markdown
- `src/content.config.ts` — схемы коллекций
- `src/consts.ts` — общие константы (название, рубрики)

## Команды

| Команда           | Что делает                       |
| ----------------- | -------------------------------- |
| `npm run dev`     | Запустить dev-сервер             |
| `npm run build`   | Собрать прод-версию в `./dist/`  |
| `npm run preview` | Предпросмотр собранной версии    |
