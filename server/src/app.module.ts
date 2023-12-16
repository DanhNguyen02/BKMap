import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AreaModule } from './area/area.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true
    // }),
    // // MongooseModule.forRoot(process.env.DB_URL),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => ({
    //     uri: config.get<string>('MONGO_URL'), // Loaded from .ENV
    //   }),
    // }),
    UserModule,
    AreaModule,
    RoomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
