import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
export declare class MongooseConfigEnterpriseService implements MongooseOptionsFactory {
    private config;
    constructor(config: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
