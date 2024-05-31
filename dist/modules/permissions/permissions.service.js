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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const permissions_schema_1 = require("./schema/permissions.schema");
let PermissionsService = class PermissionsService {
    constructor(permissionModule) {
        this.permissionModule = permissionModule;
    }
    async getAll() {
        return await this.permissionModule.find().exec();
    }
    async create(permissions) {
        try {
            const created_permissions = await this.permissionModule.create(permissions);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_permissions,
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
    async update(id, updatedPermissionData) {
        try {
            const updatedPermission = await this.permissionModule.findByIdAndUpdate(id, updatedPermissionData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedPermission,
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
            const deletedPermission = await this.permissionModule.findByIdAndDelete(id);
            if (!deletedPermission) {
                status = 404;
                message = 'Permission with ID ${id} not found';
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
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(permissions_schema_1.Permissions.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map