import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatUserListScreenComponent } from "./cometchat-user-list-screen/cometchat-user-list-screen.component";
import { CometChatUserContactListModule } from "../comet-chat-user-list/comet-chat-user-contact-list.module";
import { CometchatMessageListScreenModule } from "../cometchat-message-list-screen/cometchat-message-list-screen.module";
import { MessageThreadModule } from "../message-thread/message-thread.module";
import { ImageViewModule } from "../image-view/image-view.module";
import { CometChatUserDetailModule } from "../comet-chat-user-detail/comet-chat-user-detail.module";
import { CallAlertModule } from "../call-alert/call-alert.module";

@NgModule({
  declarations: [CometchatUserListScreenComponent],
  imports: [
    CommonModule,
    CometChatUserContactListModule,
    CometchatMessageListScreenModule,
    MessageThreadModule,
    ImageViewModule,
    CometChatUserDetailModule,
    CallAlertModule,
  ],
  exports: [CometchatUserListScreenComponent],
})
export class CometchatUserListScreenModule {}
