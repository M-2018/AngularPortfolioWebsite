export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node,JS', 'brown');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
    static readonly REACT = new Tag('React', 'darkpink');
    static readonly C= new Tag('C', 'darkgreen');
    static readonly ASP= new Tag('Asp', 'darkblue');
    static readonly EXPRESS= new Tag('Express', 'darkpink');
    static readonly HTML= new Tag('HTML', 'darkorange');
    static readonly CSS= new Tag('CSS', 'golden');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key
    }

}

