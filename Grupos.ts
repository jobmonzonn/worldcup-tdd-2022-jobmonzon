import { Equipo } from "./Equipo";
import { Partido } from "./Partido";

export class Grupos {

    public Nombre: string;
    public Equipos: Equipo[] = [];
    public partidos: Partido[] = []; 

    constructor(nombre: string) {
        if (nombre.length==1){
            this.Nombre = nombre;
        }

    }
    AgregarEquipo(equipo: Equipo){
        if(equipo != null){
            this.Equipos.push(equipo);
            return true;
        }
        else{
            return false;
        }
    }
    public agregarPartido(pPartido: Partido) {
        if (pPartido != null) {
            this.partidos.push(pPartido);
        }
    }
    devolverPartido(num: number): Partido{
        return this.partidos[num - 1];
        
    }
    public listaPartidos(): Partido[] {
        for (let i = 0; i < this.partidos.length; i++) {
            console.log("Partido: " + this.partidos[i].numPartido + "Local: " + this.partidos[i].equipoLocal + "Visitante: " + this.partidos[i].equipoVisitante);
            return this.partidos;
        }
    }

}



