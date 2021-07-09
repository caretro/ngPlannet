import { KeyText, News, NewsSchema } from "../models/news";

export const NEWS: News[] = [
    {
        title: 'Oggi iniziano gli Europei di calcio',
        description: 'Gli Europei di calcio del 2020 sono finalmente iniziati!',
        publishDate: new Date(2021, 5, 11),
        important: false,
        category: "02"
    },
    {
        title: 'L\'Europeo entra nel vivo',
        description: 'Oggi iniziano le fasi a eliminazione degli Europei di calcio 2021, con Galles - Danimarca alle 18.00',
        publishDate: new Date(2021, 5, 26),
        important: true,
        category: "02"
    }
];

export const NEWS_CATEGORIES: KeyText[] = [
    { key: "01", text: "Sport" },
    { key: "02", text: "Calcio" }
]

export const NEWS_SCHEMA: NewsSchema[] = [
    { "key": "title", "required": true, "label": "Titolo", order: 1, type: "string" },
    { "key": "description", "required": true, "label": "Descrizione", order: 2, type: "string" },
    { "key": "publishDate", "required": true, "label": "Data", order: 3, type: "date", format: "EEE dd/MM/yyyy" },
    { "key": "important", "required": false, "label": "Importante", order: 5, type: "boolean" },
    { "key": "author", "required": false, "label": "Autore", order: 4, type: "string" },
    { "key": "category", "required": false, "label": "Categoria", order: 6, type: "lookup", lookupSource: "categories" }
];