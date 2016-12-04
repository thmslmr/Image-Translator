export class Translator {

    apiKeys = {
        cloudVision : 'AIzaSyC3k2LjEetQPZBoH9U7XZ4EdeJgpkzl1d0',
        translate : 'AIzaSyC3k2LjEetQPZBoH9U7XZ4EdeJgpkzl1d0'
    };

    apiUrls = {
        cloudVision : 'https://vision.googleapis.com/v1/images:annotate?key=',
        translate : 'https://www.googleapis.com/language/translate/v2?key='
    };

    languages = [
        {
            name : 'French',
            code : 'fr'
        },
        {
            name : 'Spanish',
            code : 'es'
        },
        {
            name : 'Chinese',
            code : 'zh-CN'
        },
        {
            name : 'Arabic',
            code : 'ar'
        },
        {
            name : 'Portuguese',
            code : 'pt'
        },
        {
            name : 'German',
            code : 'de'
        },
        {
            name : 'Russian',
            code : 'ru'
        },
        {
            name : 'Italian',
            code : 'it'
        }
    ];

    visionPostObj = {
        requests : [
            {
                image : {
                    content : ''
                },
                features: {
                    type: 'LABEL_DETECTION',
                    maxResults: 1
                }
            }
        ]
    };

    constructor(){ }
}
