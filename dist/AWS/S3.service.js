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
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
let S3Service = class S3Service {
    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.accessKeyId,
            secretAccessKey: process.env.secretAccessKey,
            region: process.env.region,
        });
    }
    async uploadFile(bucketName, fileName, file) {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: file,
        };
        const data = await this.s3.upload(params).promise();
        return data.Location;
    }
    async updateFile(fileUrl, newFileContent) {
        const urlParts = fileUrl.split('/');
        const bucketName = urlParts[3];
        const key = urlParts.slice(4).join('/');
        const decodedKey = decodeURIComponent(key);
        const params = {
            Bucket: bucketName,
            Key: decodedKey,
            Body: newFileContent,
        };
        const data = await this.s3.upload(params).promise();
        return data.Location;
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=S3.service.js.map