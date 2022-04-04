export class Card {
    id : number;
    subject: string;
    question: string;
    answer: string;
    relevant_topics: string[];
    extra_resources: string[];
    relevant_cards: string[];
    created_by: string;

    constructor(
        id: number,
        subject: string,
        question: string,
        answer: string,
        relevant_topics: [],
        extra_resources: [],
        relevant_cards: [],
        created_by: string
    ) {
        this.id = id;
        this.subject = subject;
        this.answer = answer;
        this.question = question;
        this.relevant_topics = relevant_topics;
        this.extra_resources = extra_resources;
        this.relevant_cards = relevant_cards;
        this.created_by = created_by;
    }
}
