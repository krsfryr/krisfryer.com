export class Tag {
    static readonly HTML = new Tag('HTML', "blue");
    static readonly CSS = new Tag('CSS', "blue");
    static readonly MOBILE = new Tag('Mobile', "blue");
    static readonly RESPONSIVE = new Tag('Responsive', "blue");
    static readonly PROTOTYPING = new Tag('Prototyping', "blue");
    static readonly MVPDESIGN = new Tag('MVP Design', "blue");

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}