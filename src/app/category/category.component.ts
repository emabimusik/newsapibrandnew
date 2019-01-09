import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';
import {groupBy} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    title ='Category Page'
    mArticles: Array<any>;
    mSources: Array<any>;
    datasource: string;
    constructor(private newsapi: NewsApiService, private  route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        // load articles
        this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
        // this.newsapi.initCategories().subscribe(data => console.log(data['sources']));
        // load news sources
        this.newsapi.initSources().subscribe(data => console.log(data['sources']));


        this.datasource = this.route.snapshot.paramMap.get("source");

        console.log('from: category' + this.datasource);

    }
    getParam(datacategory: string) {
        console.log('from :category componet ' + datacategory);

        console.log(this.mSources)
        this.newsapi.getArticlesByID(datacategory).subscribe(data => this.mArticles = data['articles']);
    }

}



