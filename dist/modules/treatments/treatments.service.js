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
exports.TreatmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const treatments_schema_1 = require("./schema/treatments.schema");
let TreatmentService = class TreatmentService {
    constructor(treatmentModule) {
        this.treatmentModule = treatmentModule;
    }
    async getAll() {
        return await this.treatmentModule.find().exec();
    }
    async getByIdBranch(auxIdBranch) {
        const idBranch = new mongoose_2.default.Types.ObjectId(auxIdBranch);
        return await this.treatmentModule.find({ idBranch: idBranch }).exec();
    }
    async create(treatments) {
        try {
            const created_treatment = await this.treatmentModule.create(treatments);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_treatment,
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
    async update(id, updatedTreatmentData) {
        try {
            const updatedTreatment = await this.treatmentModule.findByIdAndUpdate(id, updatedTreatmentData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedTreatment,
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
            const deletedTreatment = await this.treatmentModule.findByIdAndDelete(id);
            if (!deletedTreatment) {
                status = 404;
                message = 'Treatment with ID ${id} not found';
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
exports.TreatmentService = TreatmentService;
exports.TreatmentService = TreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(treatments_schema_1.Treatments.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TreatmentService);
//# sourceMappingURL=treatments.service.js.map