import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Article } from 'src/app/models/article';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(
    private httpService: HttpService
  ) { }

  article: Article | undefined;

  async ngOnInit() {
    this.article = await lastValueFrom(this.httpService.getById(1))
  }
}
