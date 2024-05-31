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
exports.SpecialtiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const specialties_schema_1 = require("./schema/specialties.schema");
let SpecialtiesService = class SpecialtiesService {
    constructor(specialtyModule) {
        this.specialtyModule = specialtyModule;
    }
    async getAll() {
        return await this.specialtyModule.find().exec();
    }
    async create(specialties) {
        try {
            const created_specialtie = await this.specialtyModule.create(specialties);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_specialtie,
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
    async update(id, updatedSpecialtyData) {
        try {
            const updatedSpecialty = await this.specialtyModule.findByIdAndUpdate(id, updatedSpecialtyData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedSpecialty,
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
            const deletedSpecialty = await this.specialtyModule.findByIdAndDelete(id);
            if (!deletedSpecialty) {
                status = 404;
                message = 'specialty with ID ${id} not found';
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
exports.SpecialtiesService = SpecialtiesService;
exports.SpecialtiesService = SpecialtiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(specialties_schema_1.Specialties.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SpecialtiesService);
//# sourceMappingURL=specialties.service.js.map