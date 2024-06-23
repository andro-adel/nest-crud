import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({
    required: [true, 'Content is required'],
    trim: true,
  })
  content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
