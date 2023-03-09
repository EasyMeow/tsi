import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Filter } from 'src/app/models/filter';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent {

  constructor(
    private httpService: HttpService
  ) { }

  filters: Filter[] = [
    {
      name: "pets",
      items: [
        { isChosen: true, name: "Коты" },
        { isChosen: true, name: "Собаки" },
        { isChosen: true, name: "Грызуны" }
      ]
    },
    {
      name: "protections",
      items: [
        { isChosen: true, name: "За глазами" },
        { isChosen: true, name: "За ушами" },
        { isChosen: true, name: "За шерстью" }
      ]
    },
  ]

  articles: Article[] = []
  search = ""


  async ngOnInit() {
    this.articles = await lastValueFrom(this.httpService.getAll())
  }

  async getSearch() {
    if (this.search != "") {
      this.articles = await lastValueFrom(this.httpService.getAllBySeach(this.search))
    } else {
      this.articles = await lastValueFrom(this.httpService.getAll())
    }
  }

  async filter() {
    this.articles = await lastValueFrom(this.httpService.getArticlesByFilter(this.filters))
  }
}
