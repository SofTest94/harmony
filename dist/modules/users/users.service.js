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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./schema/users.schema");
const specialties_schema_1 = require("../specialties/schema/specialties.schema");
let UserService = class UserService {
    constructor(userModule, specialtyModule) {
        this.userModule = userModule;
        this.specialtyModule = specialtyModule;
    }
    async getByIdBranch(auxIdBranch) {
        try {
            const idBranch = new mongoose_2.default.Types.ObjectId(auxIdBranch);
            const users = await this.userModule.find({ idBranch: idBranch }).exec();
            const userDataWithSpecialty = [];
            for (const user of users) {
                const specialty = await this.specialtyModule.findOne({ _id: user.idSpecialty });
                if (specialty) {
                    userDataWithSpecialty.push({
                        user: user,
                        specialtyName: specialty.name,
                    });
                }
            }
            return userDataWithSpecialty;
        }
        catch (error) {
            console.error('Error al obtener los datos de los usuarios:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const users = await this.userModule.find().exec();
            const userDataWithSpecialty = [];
            for (const user of users) {
                const specialty = await this.specialtyModule.findOne({ _id: user.idSpecialty });
                if (specialty) {
                    userDataWithSpecialty.push({
                        user: user,
                        specialtyName: specialty.name,
                    });
                }
            }
            return userDataWithSpecialty;
        }
        catch (error) {
            console.error('Error al obtener los datos de los usuarios:', error);
            throw error;
        }
    }
    async create(users) {
        try {
            const created_users = await this.userModule.create(users);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_users,
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
    async update(id, updatedUserData) {
        try {
            const updatedUser = await this.userModule.findByIdAndUpdate(id, updatedUserData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedUser,
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
            const deletedUser = await this.userModule.findByIdAndDelete(id);
            if (!deletedUser) {
                status = 404;
                message = 'User with ID ${id} not found';
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __param(1, (0, mongoose_1.InjectModel)(specialties_schema_1.Specialties.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=users.service.js.map