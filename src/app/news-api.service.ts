import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class NewsApiService {

    api_key = 'a0c51553e6c3458eb5cd9b113b56f015';


    constructor(private http: HttpClient) { }


    initSources() {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    }
    initCategories() {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    }
    initArticles() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    }

    getArticlesByID(source: string) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);


    }


}

