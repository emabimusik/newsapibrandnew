import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../news-api.service';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';
import {RemovePipe} from '../uniques.pipe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    title = 'Category Page ';
    mArticles: Array<any>;
    mSources: Array<any>;
    mCategory: Array<any>;
    dataset: string;

    constructor(private newsapi: NewsApiService, private  route: ActivatedRoute, private router: Router) {
        // console.log('app component constructor called');
    }
    ngOnInit() {
        // load articles
        this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
       // this.newsapi.initCategories().subscribe(data => console.log(data['sources']));
        // load news sources
        this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }
     getParam(datacategory: string) {
       console.log('from :navbar ' + datacategory);
       this.router.navigate(['/category', datacategory]);
    }
}
