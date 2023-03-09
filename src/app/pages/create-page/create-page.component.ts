import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {

  constructor(
    private httpService: HttpService
  ) { }

  article: Article = {    
    title: "",
    miniText: "",
    text: "",
    type1: "Коты",
    type2: "За глазами",
    pictureUrl: ""
  }

  pets = [
    "Коты", "Собаки", "Грызуны"
  ]

  protections = [
    "За глазами", "За ушами", "За шерстию"
  ]

  async save() {
    this.httpService.createArticle(this.article)
  }
}
