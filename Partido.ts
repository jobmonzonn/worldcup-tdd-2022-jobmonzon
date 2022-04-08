import { Equipo } from "./Equipo";
import { Grupos } from "./Grupos";

export class Partido {
    public numPartido: Number;
    public grupo: Grupos;
    public equipoLocal: Equipo;
    public equipoVisitante: Equipo;
    public finalizar: boolean = false;

    constructor() {
    }

    public creacionPartidos(pNum: Number, pGrupo: Grupos, pLocal: Equipo, pVisitante: Equipo){
        for (let i = 0; i < 4; i++) {
            if (pGrupo.Equipos[i].GetNombre() == pLocal.GetNombre()) {
                for (let j = 0; j < 4; j++) {
                    if (pGrupo.Equipos[j].GetNombre() == pVisitante.GetNombre()) {
                        this.numPartido = pNum;
                        this.grupo = pGrupo;
                        this.equipoLocal = pLocal;
                        this.equipoVisitante = pVisitante;
                    }
                }
            }
        }
    }

    public devolverPartido(partido: Partido): string {
        return "Local: " + partido.equipoLocal.GetNombre() + " Visitante: " + partido.equipoVisitante.GetNombre();

    }
    public sumarGolLocal() {
        if (this.finalizar == false) {
            this.equipoLocal.sumarGol();
        }
    }
    public sumarGolVisitante() {
        if (this.finalizar == false) {
            this.equipoVisitante.sumarGol();
        }
    }
}

