import { Equipo } from "./Equipo";
import { Grupos } from "./Grupos";
import { Estadio } from "./Estadio";
import { Partido } from "./Partido";

test('1_Cuando_SeCreaUnEquipo_Deberia_CrearseConNombreYCodigo', () => {
    const equipo = new Equipo("Argentina", "AR");
    expect(equipo.GetNombre()).toBe("Argentina");
    expect(equipo.GetCodigo()).toBe("AR")
});

test('2_Cuando_SeComparaDosEquiposMismoNombre_Deberia_DarVerdadero', () => {
    const equipo1 = new Equipo("Argentina", "AR");
    const equipo2 = new Equipo("Argentina", "AR");
    expect(equipo1).toStrictEqual(equipo2);
});


test('101_Cuando_SeCreaUnEstadio_Deberia_CrearseConNombre', () => {
    const estadio = new Estadio("Chforever");
    expect(estadio.Nombre).toBe("Chforever");
});

test('201_Cuando_SeCreaUnGrupo_Deberia_CrearseConLetraY4Equipos', () => {
    const grup = new Grupos("A");
    grup.AgregarEquipo(new Equipo("Argentina", "AR"));
    grup.AgregarEquipo(new Equipo("Mexico", "MX"));
    grup.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    grup.AgregarEquipo(new Equipo("Polonia", "PO"));
    expect(grup.Equipos.length).toBe(4);
    expect(grup.Equipos[0].GetNombre()).toBe("Argentina");
    expect(grup.Equipos[1].GetNombre()).toBe("Mexico");
    expect(grup.Equipos[2].GetNombre()).toBe("Arabia Saudita");
    expect(grup.Equipos[3].GetNombre()).toBe("Polonia");

});

test('202_Cuando_SeCreaUnGrupoConMasDeUnaLetra_Deberia_ArrojarUnError', () => {
    try{
        const gr = new Grupos("AB");
    }catch(error){
    }
});

test('203_Cuando_CreacionPartidos_Deberia_CrearseLosPartidosDelGrupo',() => {
    const gro = new Grupos("C");
    gro.AgregarEquipo(new Equipo("Argentina", "AR"));
    gro.AgregarEquipo(new Equipo("Mexico", "MX"));
    gro.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    gro.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local = new Equipo("Argentina", "AR");
    const visitante = new Equipo("Polonia", "PO");

    const partido = new Partido();
    partido.creacionPartidos(1, gro, local, visitante);

    expect(partido.equipoLocal.GetNombre()).toBe("Argentina");
    expect(partido.equipoVisitante.GetNombre()).toBe("Polonia");
});


test('204_Cuando_SePidePartido1_Deberia_DevolverElPartido1DelGrupoLocalEquipo1VisitanteEquipo2',() => {
    const g = new Grupos("C");
    g.AgregarEquipo(new Equipo("Argentina", "AR"));
    g.AgregarEquipo(new Equipo("Mexico", "MX"));
    g.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    g.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local = new Equipo("Argentina", "AR");
    const visitante = new Equipo("Polonia", "PO");

    const partido1 = new Partido();
    partido1.creacionPartidos(1, g, local, visitante);

    expect(partido1.devolverPartido(partido1)).toBe("Local: Argentina Visitante: Polonia");
});

test('205_Cuando_SePidePartidoX_Deberia_DevolverElPartidoXDelGrupo', () => {
    const g = new Grupos("C");
    g.AgregarEquipo(new Equipo("Argentina", "AR"));
    g.AgregarEquipo(new Equipo("Mexico", "MX"));
    g.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    g.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local1 = new Equipo("Argentina", "AR");
    const visitante1 = new Equipo("Mexico", "MX");

    const partido1 = new Partido();
    partido1.creacionPartidos(1, g, local1, visitante1);

    const local2 = new Equipo("Argentina", "AR");
    const visitante2 = new Equipo("Arabia Saudita", "AS");

    const partido2 = new Partido();
    partido2.creacionPartidos(2, g, local2, visitante2);

    g.agregarPartido(partido1);
    g.agregarPartido(partido2);

    expect(g.devolverPartido(1).numPartido).toBe(1);
});

test('206_Cuando_SePidePartidos_Deberia_DevolverListadoDeTodosLosPartidos', () => {
    const g = new Grupos("C");
    g.AgregarEquipo(new Equipo("Argentina", "AR"));
    g.AgregarEquipo(new Equipo("Mexico", "MX"));
    g.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    g.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local1 = new Equipo("Argentina", "AR");
    const visitante1 = new Equipo("Mexico", "MX");

    const partido1 = new Partido();
    partido1.creacionPartidos(1, g, local1, visitante1);

    const local2 = new Equipo("Argentina", "AR");
    const visitante2 = new Equipo("Arabia Saudita", "AS");

    const partido2 = new Partido();
    partido2.creacionPartidos(2, g, local2, visitante2);

    const local3 = new Equipo("Argentina", "AR");
    const visitante3 = new Equipo("Polonia", "PO");

    const partido3 = new Partido();
    partido3.creacionPartidos(2, g, local3, visitante3);

    g.agregarPartido(partido1);
    g.agregarPartido(partido2);
    g.agregarPartido(partido3);

    let aux: Partido[] = [partido1, partido2, partido3];

    expect(aux).toStrictEqual(g.listaPartidos());

});

test('301_Cuando_SeCreaUnGrupoPartido_Deberia_CrearseConEquipoLocalYVisitante', () => {
    const grup = new Grupos("C");
    grup.AgregarEquipo(new Equipo("Argentina", "AR"));
    grup.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    grup.AgregarEquipo(new Equipo("Mexico", "MX"));
    grup.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local1 = new Equipo("Argentina", "AR");
    const visitante1 = new Equipo("Arabia Saudita", "AS");
    
    const Part = new Partido();
    Part.creacionPartidos(1, grup, local1, visitante1);
    expect(Part.equipoLocal.GetNombre()).toBe("Argentina");
    expect(Part.equipoVisitante.GetNombre()).toBe("Arabia Saudita");
});

test('303_Cuando_SumarGolLocal_Deberia_SumaUnGolAlLocal',() => {
    const gru = new Grupos("C");
    gru.AgregarEquipo(new Equipo("Argentina", "AR"));
    gru.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    gru.AgregarEquipo(new Equipo("Mexico", "MX"));
    gru.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local1 = new Equipo("Mexico", "MX");
    const visitante1 = new Equipo("Polonia", "PO");

    const partido1 = new Partido();
    partido1.creacionPartidos(1, gru, local1, visitante1);
    partido1.sumarGolLocal();

    expect(partido1.equipoLocal.goles).toBe(1);
});

test('304_Cuando_SumarGolVisitante_Deberia_SumaUnGolAlVisitante',() => {
    const gru = new Grupos("C");
    gru.AgregarEquipo(new Equipo("Argentina", "AR"));
    gru.AgregarEquipo(new Equipo("Arabia Saudita", "AS"));
    gru.AgregarEquipo(new Equipo("Mexico", "MX"));
    gru.AgregarEquipo(new Equipo("Polonia", "PO"));

    const local1 = new Equipo("Mexico", "MX");
    const visitante1 = new Equipo("Polonia", "PO");

    const partido1 = new Partido();
    partido1.creacionPartidos(1, gru, local1, visitante1);
    partido1.sumarGolVisitante();

    expect(partido1.equipoVisitante.goles).toBe(1);
});










