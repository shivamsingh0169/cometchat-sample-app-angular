import { NgModule } from "@angular/core";
import { AngularChatUiKitComponent } from "./angular-chat-ui-kit.component";
import { AvatarModule } from "./avatar/avatar.module";
import { CometChatUserContactListModule } from "./comet-chat-user-contact-list/comet-chat-user-contact-list.module";
import { CometChatUserContactListComponent } from "./comet-chat-user-contact-list/comet-chat-user-contact-list/comet-chat-user-contact-list.component";
import { CometChatConversationListModule } from "./comet-chat-conversation-list/comet-chat-conversation-list.module";
import { CometchatUserListScreenModule } from "./cometchat-user-list-screen/cometchat-user-list-screen.module";
import { MessageHeaderModule } from "./message-header/message-header.module";
@NgModule({
  declarations: [AngularChatUiKitComponent],
  imports: [
    CometChatUserContactListModule,
    AvatarModule,
    CometChatConversationListModule,
    CometchatUserListScreenModule,
    MessageHeaderModule,
  ],
  exports: [
    AngularChatUiKitComponent,
    CometChatUserContactListModule,
    AvatarModule,
    CometChatConversationListModule,
    CometchatUserListScreenModule,
    MessageHeaderModule,
  ],
})
export class AngularChatUiKitModule {}
