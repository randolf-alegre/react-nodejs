import { User } from "@prisma/client";
import ORM from "../lib/ORM";

interface IUserDBO {
    getUser(email: string): Promise<User | null>
}


export class UserDBO implements IUserDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getUser(email: string): Promise<User | null> {
        return await this.ORM.user.findUnique({
            where: {
                email
            }
        });
    }
}