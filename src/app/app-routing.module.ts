import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'catalog', component: CatalogPageComponent},
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'create', component: CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
