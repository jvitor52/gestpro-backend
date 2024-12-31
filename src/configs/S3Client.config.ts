import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

class S3 {
  private aws_s3_region = '';
  private aws_s3_bucket = '';
  private instance: S3Client;

  constructor() {
    this.aws_s3_region = process.env.AWS_S3_REGION as string;
    this.aws_s3_bucket = process.env.AWS_S3_BUCKET as string;

    const configRegion = { region: this.aws_s3_region };
    this.instance = new S3Client(configRegion);
  }

  async upload(base64: string, filename = randomUUID() + '.jpg') {
    const buffer = Buffer.from(base64, 'base64');

    const configBucket = {
      Bucket: this.aws_s3_bucket,
      Key: filename,
      Body: buffer,
    };

    await this.instance.send(new PutObjectCommand(configBucket));
    return filename;
  }

  async getFile(filename: string) {
    const configBucket = {
      Bucket: this.aws_s3_bucket,
      Key: filename,
      Body: 'Body',
    };

    const command = new GetObjectCommand(configBucket);
    return await getSignedUrl(this.instance, command, {
      expiresIn: 86400,
    });
  }
}

export default new S3();
