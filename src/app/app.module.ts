import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SubMenuAccountComponent } from './sub-menu-account/sub-menu-account.component';
import { SubMenuSendandpayComponent } from './sub-menu-sendandpay/sub-menu-sendandpay.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadComponent } from './download/download.component';
import { SecurityComponent } from './security/security.component';
import { SubMenuSecurityComponent } from './sub-menu-security/sub-menu-security.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { AccountGoalsComponent } from './account-goals/account-goals.component';
import { AccountSecurityComponent } from './account-security/account-security.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SendandpaySendComponent } from './sendandpay-send/sendandpay-send.component';
import { SendandpayRequestComponent } from './sendandpay-request/sendandpay-request.component';
import { SendandpayBillpayComponent } from './sendandpay-billpay/sendandpay-billpay.component';
import { SendandpayTransferhistoryComponent } from './sendandpay-transferhistory/sendandpay-transferhistory.component';
import { SendandpayBillpayhistoryComponent } from './sendandpay-billpayhistory/sendandpay-billpayhistory.component';
import { SecurityCardsecurityComponent } from './security-cardsecurity/security-cardsecurity.component';
import { SecurityDisputeComponent } from './security-dispute/security-dispute.component';
import { SecurityAccountsecurityComponent } from './security-accountsecurity/security-accountsecurity.component';
import { SecurityDisputehistoryComponent } from './security-disputehistory/security-disputehistory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    SubMenuAccountComponent,
    SubMenuSendandpayComponent,
    FooterComponent,
    DownloadComponent,
    SecurityComponent,
    SubMenuSecurityComponent,
    AccountOverviewComponent,
    AccountTransactionsComponent,
    AccountGoalsComponent,
    AccountSecurityComponent,
    AccountSettingsComponent,
    SendandpaySendComponent,
    SendandpayRequestComponent,
    SendandpayBillpayComponent,
    SendandpayTransferhistoryComponent,
    SendandpayBillpayhistoryComponent,
    SecurityCardsecurityComponent,
    SecurityDisputeComponent,
    SecurityAccountsecurityComponent,
    SecurityDisputehistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
