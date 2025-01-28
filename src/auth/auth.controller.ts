import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AuthController {
  @Get('/')
  getHello(): string {
    return 'Hello, this is the auth controller!';
  }
}
