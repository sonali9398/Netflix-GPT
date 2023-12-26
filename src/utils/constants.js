export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_IMG='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6JDnnyEO4kbiGGzRAzRyxRDgoaDJ_UWwdz3LLKsLMXHa4duef7HSgrYqJONVpDSOYFg&usqp=CAU'

export const WALLPAPER_IMG='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

export const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
        },   
};

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [{identifier:'en',name:'English'},{identifier:'hin',name:'Hindi'},{identifier:'span',name:'Spanish'} ]

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY ;