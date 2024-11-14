export class Campaign {
    constructor(init: {
        id?: string;
        name: string;
        subject: string;
        textContent: string;
        htmlContent: string;
    }) {
        Object.assign(this, init);
    }

    public readonly id!: string;
    public name!: string;
    public subject!: string;
    public textContent!: string;
    public htmlContent!: string;
}
