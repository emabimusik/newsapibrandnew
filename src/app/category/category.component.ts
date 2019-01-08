import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    title ="Category Page"
    mArticles: Array<any>;
    mSources: Array<any>;
    mCategory: Array<any>;

    constructor(private newsapi: NewsApiService) {
        console.log('app component constructor called');
        console.log(this.mCategory)
    }
    ngOnInit() {
        // load articles
        this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
        this.newsapi.initCategories().subscribe(data => console.log(data['sources']));
        // load news sources
        this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);


    }


}
