import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Article } from 'src/app/models/article';
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


  pets = [
    "Коты", "Собаки", "Грызуны"
  ]

  protections = [
    "За глазами", "За ушами", "За шерстию"
  ]

  articles: Article[] = []
  search = ""


  async ngOnInit() {
    this.articles = await lastValueFrom(this.httpService.getAll())
  }

  async getSearch() {
    this.articles = await lastValueFrom(this.httpService.getAllBySeach(this.search))
  }
  
}
