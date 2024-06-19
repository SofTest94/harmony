"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const videos_schema_1 = require("./schema/videos.schema");
const videos_controller_1 = require("./videos.controller");
const videos_service_1 = require("./videos.service");
let VideosModule = class VideosModule {
};
exports.VideosModule = VideosModule;
exports.VideosModule = VideosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: videos_schema_1.Videos.name,
                    schema: videos_schema_1.VideosSchema,
                },
            ]),
        ],
        controllers: [videos_controller_1.VideosController],
        providers: [videos_service_1.VideoService],
        exports: [videos_service_1.VideoService],
    })
], VideosModule);
//# sourceMappingURL=videos.module.js.map