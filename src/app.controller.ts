import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { helloMsg: string } {
    return this.appService.getHello();
  }
  
  @Get('eltigre')
  getElTigre(): { tiger: string } {
    return { tiger: 'el tigre' }
  }

  @Get(':anyWord')
  getAnyWord(@Param() params: any): string {
    return params.anyWord
  }
}
