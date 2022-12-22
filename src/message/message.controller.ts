import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMessageDto } from './DTO/create-message-dto/create-message-dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(private messageService:MessageService){}


    @Post()
    create (@Body( ) createMessageDTO: CreateMessageDto, @Res() response){
        this.messageService.createMessage(createMessageDTO)
        .then( ( message )=>{
            response.status(HttpStatus.CREATED).json(message);
        })
        .catch( (err)=>{
            response.status(HttpStatus.FORBIDDEN).json({message: "Error in create message", err})
        })
    }

    @Get()
    getAll(@Res() response){
        this.messageService.getAll()
        .then( (messageList)=>{
            response.status(HttpStatus.OK).json(messageList);
        })
        .catch((err)=> response.status(HttpStatus.FORBIDDEN).json({message: "Error in getAll message", err})
        )
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto, @Res() response, @Param('id') idMessage){
        this.messageService.updateMessage(idMessage, updateMessageDto)
        .then( (updatedMsg)=>{
            response.status(HttpStatus.OK).json(updatedMsg)
        })
        .catch((err)=> response.status(HttpStatus.FORBIDDEN).json({message: "Error update message", err}))
    }

    @Delete(':id')
    delete( @Param('id') idMessage, @Res() response){
        this.messageService.deleteMessage(idMessage)
        .then((res)=> response.status(HttpStatus.OK).json(res))
        .catch((err)=> response.status(HttpStatus.FORBIDDEN).json({message: `Error delete message, id: ${idMessage} , err: ${err}`}))
    }

}

