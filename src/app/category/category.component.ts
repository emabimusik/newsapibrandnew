import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    title ="Category Page"
    mArticles: Array<any>;
    mSources: Array<any>;
    datasource
    constructor(private newsapi: NewsApiService,private  route: ActivatedRoute, private router: Router) {
       // console.log('app component constructor called');
        // console.log(this.mCategory)
    }
    ngOnInit() {
        // load articles
        this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
        // this.newsapi.initCategories().subscribe(data => console.log(data['sources']));
        // load news sources
        this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
          //const datasource = this.route.snapshot.paramMap.get("source");
      this.route.paramMap.subscribe(params => {
        this.datasource = params.get("source")
      })
        this.newsapi.getArticlesByID(this.datasource).subscribe(data=> this.mSources = data['sources'])
    }


}
