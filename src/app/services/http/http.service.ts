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
}
