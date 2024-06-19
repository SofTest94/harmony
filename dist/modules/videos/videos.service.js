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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const videos_schema_1 = require("./schema/videos.schema");
let VideoService = class VideoService {
    constructor(videoModule) {
        this.videoModule = videoModule;
    }
    async getAll() {
        return await this.videoModule.find().exec();
    }
    async create(videos) {
        try {
            const created_video = await this.videoModule.create(videos);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_video,
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
    async update(id, updatedVideoData) {
        try {
            const updatedVideo = await this.videoModule.findByIdAndUpdate(id, updatedVideoData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedVideo,
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
            let status, message;
            const deletedVideo = await this.videoModule.findByIdAndDelete(id);
            if (!deletedVideo) {
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
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(videos_schema_1.Videos.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VideoService);
//# sourceMappingURL=videos.service.js.map