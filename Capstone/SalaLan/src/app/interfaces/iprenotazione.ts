import { Data } from "@angular/router";

export interface IPrenotazione {
    idPrenotazione?: number;
    nomeUtente?: string;
    pc?: string;
    sale?: string;
    data?: Data;
    pagamento?: boolean;
}