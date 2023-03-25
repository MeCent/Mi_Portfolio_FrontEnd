export class Experiencia {
    id?: number;
    nombreE: string;
    inicioE: string;
    finE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string, inicioE: string, finE: string) {
        this.nombreE = nombreE;
        this.inicioE = inicioE;
        this.finE = finE
        this.descripcionE = descripcionE;
    }
}
