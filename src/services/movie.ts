import { AxiosInstance, AxiosResponse } from 'axios';

import { ListMoviesResponse, Movie as MovieType } from '../types/movie';
import { ListQuotesResponse } from '../types/quote';

export default class Movie {
  private static readonly BASE_PATH = '/movie';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(): Promise<ListMoviesResponse> {
    return this.client
      .get(Movie.BASE_PATH)
      .then((response: AxiosResponse<ListMoviesResponse>) => response.data);
  }

  get(id: string): Promise<MovieType> {
    return this.client
      .get(`${Movie.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListMoviesResponse>) => response.data.docs[0],
      );
  }

  getQuotes(id: string): Promise<ListQuotesResponse> {
    return this.client
      .get(`${Movie.BASE_PATH}/${id}/quote`)
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }
}
