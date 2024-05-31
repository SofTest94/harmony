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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reviews_schema_1 = require("./schema/reviews.schema");
let ReviewService = class ReviewService {
    constructor(reviewModule) {
        this.reviewModule = reviewModule;
    }
    async getAll() {
        return await this.reviewModule.find().exec();
    }
    async create(reviews) {
        try {
            const created_review = await this.reviewModule.create(reviews);
            return [
                {
                    status: 200,
                    message: 'success',
                    items: created_review,
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
    async update(id, updatedReviewData) {
        try {
            const updatedReview = await this.reviewModule.findByIdAndUpdate(id, updatedReviewData, { new: true });
            return [
                {
                    status: 200,
                    message: 'success',
                    items: updatedReview,
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
            const deletedReview = await this.reviewModule.findByIdAndDelete(id);
            if (!deletedReview) {
                status = 404;
                message = 'Review with ID ${id} not found';
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
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reviews_schema_1.Reviews.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewService);
//# sourceMappingURL=reviews.service.js.map