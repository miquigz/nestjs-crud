import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMessageDto } from './DTO/create-message-dto/create-message-dto';

@Controller('message')
export class MessageController {
    @Post()
    create (@Body( ) createMessageDTO: CreateMessageDto){
        return 'message creado'
    }

    @Get()
    getAll(){
        return 'lists of message'
    }

    @Put()
    update(@Body() updateMessageDto: CreateMessageDto){
        return 'update message';
    }

    @Delete(':id')
    delete(){
        return 'deleted message'
    }

}

