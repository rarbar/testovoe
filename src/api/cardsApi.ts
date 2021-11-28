import axios from 'axios';
import {objApiType} from '../components/type';

export const getCards = (countPage: number, id: number) => {
    return axios.get<objApiType>(`https://news.itmo.ru/api/news/list/?ver=2.0&per_page=${countPage}&lead=true&language_id=${id}`)
}
