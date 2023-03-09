import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "http://localhost:4200/api"

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Article[]>(this.baseURL + "/Article")
  }

  getAllBySeach(search: string) {
    return this.http.get<Article[]>(this.baseURL + "/Article/getBySearch/" + search)
  }

  getById(id: number) {
    return this.http.get<Article>(this.baseURL + "/Article/getById/" + id)
  }

  createArticle(article: Article) {
    return this.http.post<boolean>(this.baseURL + "/Article", article)
  }
}
