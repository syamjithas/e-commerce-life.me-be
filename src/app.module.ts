import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validationSchema } from './config/validation.schema';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './core/auth/decorators/roles.guard';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AppService,
  ],
})
export class AppModule {}
