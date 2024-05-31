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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ServicesDTO } from './dto/service.dto';
import { ServiceService } from './service.service';
export declare class ServicesController {
    private serviceService;
    constructor(serviceService: ServiceService);
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServicesDocument> & import("./schema/service.schema").Services & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getByIdBranch(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServicesDocument> & import("./schema/service.schema").Services & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(services: ServicesDTO): Promise<{
        status: number;
        message: string;
        items: import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServicesDocument> & import("./schema/service.schema").Services & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    updateReview(id: string, updatedServiceData: Partial<ServicesDTO>): Promise<{
        status: number;
        message: string;
        items: import("mongoose").Document<unknown, {}, import("./schema/service.schema").ServicesDocument> & import("./schema/service.schema").Services & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    deleteReview(id: string): Promise<{
        status: any;
        message: any;
    }[]>;
}
