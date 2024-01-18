import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { helloMsg: string } {
    return { helloMsg: 'Hello, welcome to Nestjs!' };
  }
}
