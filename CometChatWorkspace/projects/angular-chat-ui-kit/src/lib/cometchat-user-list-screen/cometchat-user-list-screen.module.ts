import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatUserListScreenComponent } from "./cometchat-user-list-screen/cometchat-user-list-screen.component";
import { CometChatUserContactListModule } from "../comet-chat-user-list/comet-chat-user-contact-list.module";
import { CometchatMessageListScreenModule } from "../cometchat-message-list-screen/cometchat-message-list-screen.module";
import { ImageViewModule } from "../image-view/image-view.module";

@NgModule({
  declarations: [CometchatUserListScreenComponent],
  imports: [
    CommonModule,
    CometChatUserContactListModule,
    CometchatMessageListScreenModule,
    ImageViewModule,
  ],
  exports: [CometchatUserListScreenComponent],
})
export class CometchatUserListScreenModule {}
