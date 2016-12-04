export class Translator {

    apiKeys = {
        cloudVision : 'YOUR_API_KEY',
        translate : 'YOUR_API_KEY'
    };

    apiUrls = {
        cloudVision : 'https://vision.googleapis.com/v1/images:annotate?key=',
        translate : 'https://www.googleapis.com/language/translate/v2?key='
    };

    languages = [
        {
            name : 'Arabic',
            code : 'ar'
        },
        {
            name : 'Chinese',
            code : 'zh-CN'
        },
        {
            name : 'French',
            code : 'fr'
        },
        {
            name : 'German',
            code : 'de'
        },
        {
            name : 'Italian',
            code : 'it'
        },
        {
            name : 'Portuguese',
            code : 'pt'
        },
        {
            name : 'Russian',
            code : 'ru'
        },
        {
            name : 'Spanish',
            code : 'es'
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
