import axios from 'axios';
import type { Article } from '../types/article';

interface ArticleHttpResponse {
  hits: Article[];
  nbPages: number;
}
const API_URL = import.meta.env.VITE_API_URL;

export const fetchArticles = async (
  topic: string,
  page: number
): Promise<Article[]> => {
  const response = await axios.get<ArticleHttpResponse>(API_URL, {
    params: { query: topic, page },
  });
  return response.data.hits;
};
