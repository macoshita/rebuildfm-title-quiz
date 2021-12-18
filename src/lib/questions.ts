export interface Question {
  episode: number;
  title: string;
  subtitle: string;
  answers: string[];
}

export async function getQuestions(): Promise<Question[]> {
  return [
    {
      episode: 323,
      title: 'Metaverse and ### (hak)',
      answers: ['Chill'],
      subtitle:
        'Hakuro Matsuda さんをゲストに迎えて、メタバース、チップ、Pixel 6 Pro, MacBook Pro などについて話しました。'
    },
    {
      episode: 322,
      title: 'Dialog with the ### (yuka)',
      answers: ['Algorithm'],
      subtitle:
        'Yuka Ohishi さんをゲストに迎えて、MacBook Pro, Twitter Blue, YouTube, 一時帰国、Apple TV+ などについて話しました。'
    },
    {
      episode: 321,
      title: 'Socially Distanced ### ### (kenn)',
      answers: ['Menu', 'Bar'],
      subtitle:
        'Kenn Ejima さんをゲストに迎えて、MacBook Pro, Meta, Copilot, ビッグテックなどについて話しました。'
    },
    {
      episode: 320,
      title: '### ### Chart (hak)',
      answers: ['Jeff', 'Bezos'],
      subtitle:
        'Hakuro Matsuda さんをゲストに迎えて、Apple イベント、MacBook Pro, Pixel 6 などについて話しました。'
    },
    {
      episode: 319,
      title: '### Podcasting (N)',
      answers: ['Improvised'],
      subtitle:
        'Naoki Hiroshima さんをゲストに迎えて、MacBook Pro, ニューヨーク、ビッグテック、Apple Watch, iPhone 13 Pro などについて話しました。'
    },
    {
      episode: 318,
      title: '### Todo List (naan)',
      answers: ['Evergreen'],
      subtitle:
        'Kazuho Okui さんをゲストに迎えて、近況、Safari 15, iPad, ファイルシステム、Astro, プロダクティビティ、カフェインなどについて話しました。'
    }
  ];
}
