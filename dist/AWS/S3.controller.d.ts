import { S3Service } from './S3.service';
export declare class S3Controller {
    private readonly s3Service;
    constructor(s3Service: S3Service);
    uploadFile(file: any): Promise<{
        success: boolean;
        message: string;
        fileUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        fileUrl?: undefined;
    }>;
    updateFile(file: any, fileUrl: string): Promise<{
        success: boolean;
        message: string;
        updatedFileUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        updatedFileUrl?: undefined;
    }>;
}
