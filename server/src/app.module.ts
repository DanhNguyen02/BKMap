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
    MongooseModule.forRoot('mongodb+srv://danhnguyenhuu:bkmap@bkmap.k2itw9f.mongodb.net/BKMap'),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => ({
    //     uri: 'mongodb+srv://danhnguyenhuu:bkmap@bkmap.k2itw9f.mongodb.net/?retryWrites=true&w=majority', // Loaded from .ENV
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
