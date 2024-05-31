/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Model } from 'mongoose';
import { Users, UsersDocument } from './schema/users.schema';
import { UsersDTO } from './dto/users.dto';
import { SpecialtiesDocument } from '../specialties/schema/specialties.schema';
export declare class UserService {
    private userModule;
    private specialtyModule;
    constructor(userModule: Model<UsersDocument>, specialtyModule: Model<SpecialtiesDocument>);
    getByIdBranch(auxIdBranch: string): Promise<any[]>;
    getAll(): Promise<any[]>;
    create(users: UsersDTO): Promise<{
        status: number;
        message: string;
        items: mongoose.Document<unknown, {}, UsersDocument> & Users & mongoose.Document<any, any, any> & {
            _id: mongoose.Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    update(id: string, updatedUserData: Partial<UsersDTO>): Promise<{
        status: number;
        message: string;
        items: mongoose.Document<unknown, {}, UsersDocument> & Users & mongoose.Document<any, any, any> & {
            _id: mongoose.Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    delete(id: string): Promise<{
        status: any;
        message: any;
    }[]>;
}
