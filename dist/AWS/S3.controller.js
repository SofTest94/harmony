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
exports.S3Controller = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const S3_service_1 = require("./S3.service");
let S3Controller = class S3Controller {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    async uploadFile(file) {
        try {
            const fileUrl = await this.s3Service.uploadFile('bucket-harmony', file.originalname, file.buffer);
            return { success: true, message: 'Archivo subido correctamente', fileUrl };
        }
        catch (error) {
            return { success: false, message: 'Error al subir el archivo', error };
        }
    }
    async updateFile(file, fileUrl) {
        try {
            const updatedFileUrl = await this.s3Service.updateFile(fileUrl, file.buffer);
            return { success: true, message: 'Archivo actualizado correctamente', updatedFileUrl };
        }
        catch (error) {
            return { success: false, message: 'Error al actualizar el archivo', error };
        }
    }
};
exports.S3Controller = S3Controller;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], S3Controller.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('fileUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], S3Controller.prototype, "updateFile", null);
exports.S3Controller = S3Controller = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [S3_service_1.S3Service])
], S3Controller);
//# sourceMappingURL=S3.controller.js.map