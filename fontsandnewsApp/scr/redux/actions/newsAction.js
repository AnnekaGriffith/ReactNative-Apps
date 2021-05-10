export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        const result = await fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-09&sortBy=publishedAt&apiKey=e2ea72acf14c4ad68daf736c8d5eecf2');

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
        
    }
}