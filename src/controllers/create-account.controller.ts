import { Body, ConflictException, Controller, HttpCode, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcryptjs';
import { z } from 'zod';

const CreateAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchema = z.infer<typeof CreateAccountBodySchema>

@Controller('/accounts')
export class CreateAccountController {

  constructor(private prisma: PrismaService) { }

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateAccountBodySchema) {

    const { name, email, password } = CreateAccountBodySchema.parse(body)

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      }
    })

    if (userWithSameEmail) {
      throw new ConflictException('User with same email already exists')
    }

    console.log('Original Password:', password);
    const hashedPassword = await hash(password, 10);
    console.log('Hashed Password:', hashedPassword);

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })
  }
}