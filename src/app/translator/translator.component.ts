import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../translator.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.css'],
    providers : [TranslatorService]
})

export class TranslatorComponent implements OnInit {

    selectedLanguage;
    labels : Array<any> = [];
    translations : Array<any> = [];
    choseLang : boolean = false;
    loading : boolean = false;

    constructor(private translatorService : TranslatorService) {
            this.selectedLanguage = translatorService.getLanguages()[0];
    }

    newTranslation(){
        this.translations = this.labels = [];
        let photo  : any = document.querySelector('#snap');
        photo.setAttribute('src', '');
    }

    toggleChoseLang(){
        this.choseLang = !this.choseLang;
    }

    setSelectedLanguage( lang : Object ){
        this.selectedLanguage = lang;

        console.log(this.labels)
        if(this.labels.length > 0)
        this.getTranslation();

        this.choseLang = false;
    }

    takePicture(){
        let canvas : any = document.querySelector('#canvas'),
            video  : any = document.querySelector('#video'),
            photo  : any = document.querySelector('#snap'),
            width  : number = video.clientWidth,
            height  : number = video.clientHeight;

        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);

        let image = canvas.toDataURL('image/jpeg', 1);
        photo.setAttribute('src', image);

        this.loading = true;
        this.getVision( image.replace('data:image/jpeg;base64,', '') );
    }

    getVision(image : string){
        this.translatorService.getVisionLabels(image)
        .subscribe( (sub) => {
            this.labels = sub.responses[0].labelAnnotations;
            this.getTranslation();
        });
    }

    getTranslation(){
        console.log('translate');
        this.labels.forEach( (label) => {
            let translation = {search : label.description, result : ''};

            this.translatorService.getTranslation( label.description, this.selectedLanguage.code)
            .subscribe( (sub) => {
                translation.result= sub.data.translations[0].translatedText;
                this.loading = false;
                this.translations = [];
                this.translations.push(translation);
            });

        })
    }

    get languages() {
        return this.translatorService.getLanguages();
    }

    ngOnInit() {
        let video   : any = document.querySelector('#video'),
            w       : any = window,
            n       : any = navigator;

        n.getMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);

        n.getMedia(
            {
                video: true,
                audio: false
            },
            function(stream) {
                if(n.mozGetUserMedia){
                    video.mozSrcObject = stream;
                }else{
                    var vendorURL = w.URL || w.webkitURL;
                    video.src = vendorURL.createObjectURL(stream);
                }
                video.play();
            },
            function(err) {
                console.log("An error occured! " + err.message);
            }
        );
    }

}
