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
exports.TreatmentsController = void 0;
const common_1 = require("@nestjs/common");
const treatments_dto_1 = require("./dto/treatments.dto");
const treatments_service_1 = require("./treatments.service");
let TreatmentsController = class TreatmentsController {
    constructor(treatmentsService) {
        this.treatmentsService = treatmentsService;
    }
    getAll() {
        return this.treatmentsService.getAll();
    }
    getByIdBranch(id) {
        console.log({ id });
        return this.treatmentsService.getByIdBranch(id);
    }
    create(treatments) {
        return this.treatmentsService.create(treatments);
    }
    async updateTreatment(id, updatedTreatmentData) {
        return this.treatmentsService.update(id, updatedTreatmentData);
    }
    async deleteTreatment(id) {
        return this.treatmentsService.delete(id);
    }
};
exports.TreatmentsController = TreatmentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreatmentsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TreatmentsController.prototype, "getByIdBranch", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [treatments_dto_1.TreatmentsDTO]),
    __metadata("design:returntype", void 0)
], TreatmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TreatmentsController.prototype, "updateTreatment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreatmentsController.prototype, "deleteTreatment", null);
exports.TreatmentsController = TreatmentsController = __decorate([
    (0, common_1.Controller)('treatments'),
    __metadata("design:paramtypes", [treatments_service_1.TreatmentService])
], TreatmentsController);
//# sourceMappingURL=treatments.controller.js.map