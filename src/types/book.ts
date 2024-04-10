interface Book {
  book: BookContent;
  status: number;
}

interface BookContent {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: number;
  published: number;
  title: string;
}

export type { Book, BookContent };
