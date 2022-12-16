import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { AppController } from './app.controller';
import { MessageController } from './message/message.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
//Entities:
import { MessageService } from './message/message.service';
import { Message } from './message/entities/message.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),//Repository
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nestjspractica',
      // entities: [__dirname + '/**/*.entity{.ts,..js}'],
      entities: [Message],
      synchronize: true,
    })],

  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
