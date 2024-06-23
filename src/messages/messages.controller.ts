import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body);
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Patch('/:id')
  updateMessage(@Param('id') id: string, @Body() body: CreateMessageDto) {
    return this.messagesService.update(id, body);
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }
}
