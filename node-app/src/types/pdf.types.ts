export type UpsertPDF = {
    id?: string;
    userId: string;
    filePath: string;
    fileType: string;
    title: string;
    filename: string;
    uploadedOn: Date;
    legalDocNumber: number;
}