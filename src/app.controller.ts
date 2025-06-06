import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService
  ) { }

  @Get('/hello')
  indexo(): string {
    return this.appService.getHello();
    // return this.prisma.testando();
  }
  @Post('/store')
  async store() {
    return await this.prisma.user.findMany();
  }
}
