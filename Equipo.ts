export class Equipo{
    private Nombre: string;
    private Codigo: string;
    public goles: number = 0;

    constructor(nombre: string, codigo: string){
        this.Nombre = nombre;
        this.Codigo = codigo;
    }

    public GetNombre(): string{
        return this.Nombre;
    }
    public GetCodigo(): string{
        return this.Codigo;
    }
    public sumarGol(){
        this.goles = this.goles + 1;
    }
}