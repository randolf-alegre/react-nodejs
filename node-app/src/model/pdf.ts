import { PDF } from "@prisma/client";
import ORM from "../lib/ORM";
import { UpsertPDF } from "../types/pdf.types";

export interface IpdfDBO {
    getPDFById(id: string): Promise<PDF | null>
    getAllPDFs(): Promise<PDF[]>
    addPDF(payload: UpsertPDF): Promise<PDF>
}

export class PdfDBO implements IpdfDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getPDFById(id: string): Promise<PDF | null> {
        return await this.ORM.pDF.findUnique({
            where: {
                id
            }
        });
    }

    public async addPDF(payload: PDF): Promise<PDF> {
        return await this.ORM.pDF.create({
            data: {...payload}
        });
    }

    async getAllPDFs(): Promise<PDF[]> {
        return (await this.ORM.pDF.findMany({
            orderBy: [
                {
                    legalDocNumber: 'asc',
                },
            ],
        }));
    }
}