export class News {
    title: string;
    description: string;
    publishDate: Date;
    important: boolean;
    author?: string;
    category?: string
}

export class KeyText {
    key: string;
    text: string;
}

export class NewsSchema {
    key: string;
    required: boolean;
    label: string;
    order: number;
    type: string;
    format?: string;
    lookupSource?: string;
}