import { Injectable } from '@angular/core';
import { Translator } from './translator';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TranslatorService {

    translator : Translator = new Translator();

    constructor( private http : Http ) { }

    getLanguages() {
        return this.translator.languages;
    }

    getVisionLabels( image : string ){
        let url = this.translator.apiUrls.cloudVision + this.translator.apiKeys.cloudVision;
        let post = this.translator.visionPostObj;
        post.requests[0].image.content = image;

        return this.http.post(url, post).map( (res) => res.json());
    }

    getTranslation( label : string, code : string ){
        let url = this.translator.apiUrls.translate + this.translator.apiKeys.translate + '&q=' + label + '&source=en&target=' + code;
        return  this.http.get(url).map( (res) => res.json());
    }
}
