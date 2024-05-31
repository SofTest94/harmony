/// <reference types="node" />
export declare class S3Service {
    private readonly s3;
    constructor();
    uploadFile(bucketName: string, fileName: string, file: Buffer): Promise<string>;
    updateFile(fileUrl: string, newFileContent: Buffer): Promise<string>;
}
