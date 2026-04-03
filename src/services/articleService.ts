import axios from 'axios';
import type { Article } from '../types/article';

interface ArticleHttpResponse {
  hits: Article[];
}
const API_URL = import.meta.env.VITE_API_URL;

export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticleHttpResponse>(
    `${API_URL}?query=${topic}`
  );
  return response.data.hits;
};
