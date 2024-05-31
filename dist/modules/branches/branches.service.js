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
exports.BranchesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const branches_schema_1 = require("./schema/branches.schema");
let BranchesService = class BranchesService {
    constructor(branchModule) {
        this.branchModule = branchModule;
    }
    async getAll() {
        try {
            return await this.branchModule.find().exec();
        }
        catch (error) {
            console.error('Error al obtener los datos de los usuarios:', error);
            throw error;
        }
    }
    async create(branch) {
        try {
            const created_branches = await this.branchModule.create(branch);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_branches,
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
    async update(id, updatedBranchData) {
        try {
            const updatedBranch = await this.branchModule.findByIdAndUpdate(id, updatedBranchData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedBranch,
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
            const deletedBranch = await this.branchModule.findByIdAndDelete(id);
            if (!deletedBranch) {
                status = 404;
                message = 'Branch with ID ${id} not found';
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
exports.BranchesService = BranchesService;
exports.BranchesService = BranchesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(branches_schema_1.Branches.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BranchesService);
//# sourceMappingURL=branches.service.js.map