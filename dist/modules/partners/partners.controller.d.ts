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
import { PartnersDTO } from './dto/partners.dto';
import { PartnerService } from './partners.service';
export declare class PartnersController {
    private partnersService;
    constructor(partnersService: PartnerService);
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/partners.schema").PartnersDocument> & import("./schema/partners.schema").Partners & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(partners: PartnersDTO): Promise<{
        status: number;
        message: string;
        items: import("mongoose").Document<unknown, {}, import("./schema/partners.schema").PartnersDocument> & import("./schema/partners.schema").Partners & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    updatePartner(id: string, updatedPartnerData: Partial<PartnersDTO>): Promise<{
        status: number;
        message: string;
        items: import("mongoose").Document<unknown, {}, import("./schema/partners.schema").PartnersDocument> & import("./schema/partners.schema").Partners & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }[] | {
        status: number;
        message: any;
        items: any[];
    }[]>;
    deletePartner(id: string): Promise<{
        status: any;
        message: any;
    }[]>;
}
