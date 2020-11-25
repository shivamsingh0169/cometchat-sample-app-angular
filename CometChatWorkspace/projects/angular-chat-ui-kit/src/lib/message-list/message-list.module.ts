import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageListComponent } from "./message-list/message-list.component";
import { CometChatSenderMessageBubbleModule } from "../comet-chat-sender-message-bubble/comet-chat-sender-message-bubble.module";
import { CometChatReceiverMessageBubbleModule } from "../comet-chat-receiver-message-bubble/comet-chat-receiver-message-bubble.module";

@NgModule({
  declarations: [MessageListComponent],
  imports: [
    CommonModule,
    CometChatSenderMessageBubbleModule,
    CometChatReceiverMessageBubbleModule,
  ],
  exports: [MessageListComponent],
})
export class MessageListModule {}
