import { News } from "../models/news";

export const NEWS: News[] = [
    {
        title: 'Oggi iniziano gli Europei di calcio',
        description: 'Gli Europei di calcio del 2020 sono finalmente iniziati!',
        publishDate: new Date(2021, 5, 11),
        important: false
    },
    {
        title: 'L\'Europeo entra nel vivo',
        description: 'Oggi iniziano le fasi a eliminazione degli Europei di calcio 2021, con Galles - Danimarca alle 18.00',
        publishDate: new Date(2021, 5, 26),
        important: true
    }
];