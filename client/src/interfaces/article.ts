export interface Article {
  id: string;
  title: string;
  description: string;
  photos?: string[];
}

export interface ArticleResponse {
  id: number;
  attributes: Article;
}
