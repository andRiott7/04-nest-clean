import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }
  onModuleDestroy() {
    return this.$disconnect();
  }
  onModuleInit() {
    return this.$connect();
  }

  testando() {
    return 'Holallaa qie tal'
  }
}