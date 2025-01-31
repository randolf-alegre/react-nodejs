import ORM from "../lib/ORM"
import { UserDBO } from "./user"
import { PdfDBO } from "./pdf"

export const instantiateUser = () => new UserDBO(ORM)
export const instantiatePdf = () => new PdfDBO(ORM)