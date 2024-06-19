"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./config/database.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const partners_module_1 = require("./modules/partners/partners.module");
const S3_module_1 = require("./AWS/S3.module");
const reviews_module_1 = require("./modules/reviews/reviews.module");
const treatments_module_1 = require("./modules/treatments/treatments.module");
const users_module_1 = require("./modules/users/users.module");
const specialties_module_1 = require("./modules/specialties/specialties.module");
const service_module_1 = require("./modules/services/service.module");
const branches_module_1 = require("./modules/branches/branches.module");
const roles_module_1 = require("./modules/roles/roles.module");
const permissions_module_1 = require("./modules/permissions/permissions.module");
const questions_module_1 = require("./modules/questions/questions.module");
const videos_module_1 = require("./modules/videos/videos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            partners_module_1.PartnersModule,
            reviews_module_1.ReviewsModule,
            treatments_module_1.TreatmentsModule,
            S3_module_1.S3Module,
            users_module_1.UsersModule,
            specialties_module_1.SpecialtiesModule,
            service_module_1.ServicesModule,
            branches_module_1.BranchesModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            questions_module_1.QuestionsModule,
            videos_module_1.VideosModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map