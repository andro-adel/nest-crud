import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(body: CreateMessageDto) {
    return await this.messageModel.create(body);
  }

  async findAll() {
    return await this.messageModel.find();
  }
  async findOne(id: string) {
    return await this.messageModel.findById(id);
  }

  async update(id: string, body: CreateMessageDto) {
    return await this.messageModel.findByIdAndUpdate(id, body, { new: true });
  }
  async delete(id: string) {
    return await this.messageModel.findByIdAndDelete(id);
  }
}
