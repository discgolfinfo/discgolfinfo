import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Без названия",
    description: "Без описания",
  },
  components: {
    backlinks: {
      title: "Обратные ссылки",
      noBacklinksFound: "Обратные ссылки не найдены",
    },
    themeToggle: {
      lightMode: "Светлая тема",
      darkMode: "Тёмная тема",
    },
    explorer: {
      title: "Проводник",
    },
    footer: {
      createdWith: "Создано с помощью",
    },
    graph: {
      title: "Граф",
    },
    recentNotes: {
      title: "Недавние заметки",
      seeRemainingMore: ({ remaining }) => `Посмотреть ${remaining} ещё →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Часть ${targetSlug}`,
      linkToOriginal: "Ссылка на оригинал",
    },
    search: {
      title: "Поиск",
      searchBarPlaceholder: "Найти что-нибудь",
    },
    tableOfContents: {
      title: "Оглавление",
    },
  },
  pages: {
    rss: {
      recentNotes: "Недавние заметки",
      lastFewNotes: ({ count }) => `Последние ${count} заметки`,
    },
    error: {
      title: "Страница не найдена",
      notFound: "Эта страница приватная или не существует",
    },
    folderContent: {
      folder: "Папка",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 элемент в папке" : `${count} элементов в папке`,
    },
    tagContent: {
      tag: "Тэг",
      tagIndex: "Индекс тегов",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 элемент с таким тэгом" : `${count} элементов с таким тегом`,
      showingFirst: ({ count }) => `Показываются первые ${count} тэгов`,
      totalTags: ({ count }) => `Всего найдено ${count} тэгов`,
    },
  },
} as const satisfies Translation
