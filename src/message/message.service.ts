import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './DTO/create-message-dto/create-message-dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
    constructor( @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>){

    }

    async getAll(){
        return await this.messageRepository.find();
    }

    async createMessage( newMessage: CreateMessageDto ) {
        const newMsg = new Message();
        newMsg.message = newMessage.message;
        newMsg.name = newMessage.name;

        return this.messageRepository.save(newMsg);//save in db
    }

    async updateMessage( idMsg:number, updateMessage: CreateMessageDto){
        //todo evitar params id, reqbody.id
        const msgUpdate = await this.messageRepository.findOneBy({id: idMsg});
        msgUpdate.name = updateMessage.name;
        msgUpdate.message = updateMessage.name

        return this.messageRepository.save(msgUpdate);
    }

}
