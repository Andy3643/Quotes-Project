export class Quote {

    public showDetails: boolean | undefined;
    public submitDate: Date;


    constructor(
        public id: number,
        public enterQuote: string,
        public author: string,
        public upVote: number,
        public downVote:number,
        public yourName: string,) {

            this.submitDate = new Date();
    }

}