import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Article } from 'src/app/models/article';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  id = Number(this.route.snapshot.paramMap.get('id'))

  article: Article | undefined;

  async ngOnInit() {
    this.article = await lastValueFrom(this.httpService.getById(this.id))
  }
}
