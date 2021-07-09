export class News {
    title: string;
    description: string;
    publishDate: Date;
    important: boolean;
    author?: string;
    // category: KeyText
}

export class KeyText {
    key: string;
    text: string;
}