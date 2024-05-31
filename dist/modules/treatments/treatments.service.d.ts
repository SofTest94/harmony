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
import { Treatments, TreatmentsDocument } from './schema/treatments.schema';
import { TreatmentsDTO } from './dto/treatments.dto';
export declare class TreatmentService {
    private treatmentModule;
    constructor(treatmentModule: Model<TreatmentsDocument>);
    getAll(): Promise<(mongoose.Document<unknown, {}, TreatmentsDocument> & Treatments & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    getByIdBranch(auxIdBranch: string): Promise<(mongoose.Document<unknown, {}, TreatmentsDocument> & Treatments & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    create(treatments: TreatmentsDTO): Promise<{
        status: number;
        message: string;
        items: mongoose.Document<unknown, {}, TreatmentsDocument> & Treatments & mongoose.Document<any, any, any> & {
            _id: mongoose.Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    update(id: string, updatedTreatmentData: Partial<TreatmentsDTO>): Promise<{
        status: number;
        message: string;
        items: mongoose.Document<unknown, {}, TreatmentsDocument> & Treatments & mongoose.Document<any, any, any> & {
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
