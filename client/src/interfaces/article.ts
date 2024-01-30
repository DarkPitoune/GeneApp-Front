export interface Article {
  Titre: string;
  Description: string;
  Categorie: string;
}

export interface ArticleResponse {
  id: number;
  attributes: Article;
}
