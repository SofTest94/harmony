"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const partners_schema_1 = require("./schema/partners.schema");
let PartnerService = class PartnerService {
    constructor(partnerModule) {
        this.partnerModule = partnerModule;
    }
    async getAll() {
        return await this.partnerModule.find().exec();
    }
    async create(partners) {
        try {
            const created_partner = await this.partnerModule.create(partners);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_partner,
                },
            ];
        }
        catch (error) {
            return [
                {
                    status: 500,
                    message: error.message,
                    items: [],
                },
            ];
        }
    }
    async update(id, updatedPartnerData) {
        try {
            const updatedPartner = await this.partnerModule.findByIdAndUpdate(id, updatedPartnerData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedPartner,
                },
            ];
        }
        catch (error) {
            return [
                {
                    status: 500,
                    message: error.message,
                    items: [],
                },
            ];
        }
    }
    async delete(id) {
        try {
            let response = [];
            let status, message;
            const deletedPartner = await this.partnerModule.findByIdAndDelete(id);
            if (!deletedPartner) {
                status = 404;
                message = 'Partner with ID ${id} not found';
            }
            else {
                status = 200;
                message = 'success';
            }
            return [
                {
                    status,
                    message,
                },
            ];
        }
        catch (error) {
            return [
                {
                    status: 500,
                    message: 'Error: ' + error.message,
                },
            ];
        }
    }
};
exports.PartnerService = PartnerService;
exports.PartnerService = PartnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(partners_schema_1.Partners.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PartnerService);
//# sourceMappingURL=partners.service.js.map