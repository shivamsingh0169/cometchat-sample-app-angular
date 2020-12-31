import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatReceiverMessageBubbleComponent } from "./comet-chat-receiver-message-bubble/comet-chat-receiver-message-bubble.component";
import { ToolTipModule } from "../tool-tip/tool-tip.module";
import { ReplyCountModule } from "../reply-count/reply-count.module";
import { CometchatAvatarModule } from "../cometchat-avatar/cometchat-avatar.module";

@NgModule({
  declarations: [CometChatReceiverMessageBubbleComponent],
  imports: [
    CommonModule,
    ToolTipModule,
    ReplyCountModule,
    CometchatAvatarModule,
  ],
  exports: [CometChatReceiverMessageBubbleComponent],
})
export class CometChatReceiverMessageBubbleModule {}
