import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SubMenuAccountComponent } from './sub-menu-account/sub-menu-account.component';
import { SubMenuSendandpayComponent } from './sub-menu-sendandpay/sub-menu-sendandpay.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadComponent } from './download/download.component';
import { SubMenuSecurityComponent } from './sub-menu-security/sub-menu-security.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { AccountGoalsComponent } from './account-goals/account-goals.component';
import { AccountStatementsComponent } from './account-statements/account-statements.component';
import { AccountSecurityComponent } from './account-security/account-security.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountDepositsComponent } from './account-deposits/account-deposits.component';
import { AccountWithdrawlsComponent } from './account-withdrawls/account-withdrawls.component';
import { AccountAllTransactionsComponent } from './account-all-transactions/account-all-transactions.component';
import { SendandpaySendComponent } from './sendandpay-send/sendandpay-send.component';
import { SendandpayRequestComponent } from './sendandpay-request/sendandpay-request.component';
import { SendandpayBillpayComponent } from './sendandpay-billpay/sendandpay-billpay.component';
import { SendandpayTransferhistoryComponent } from './sendandpay-transferhistory/sendandpay-transferhistory.component';
import { SendandpayBillpayhistoryComponent } from './sendandpay-billpayhistory/sendandpay-billpayhistory.component';
import { SecurityCardsecurityComponent } from './security-cardsecurity/security-cardsecurity.component';
import { SecurityDisputeComponent } from './security-dispute/security-dispute.component';
import { SecurityAccountsecurityComponent } from './security-accountsecurity/security-accountsecurity.component';
import { SecurityDisputehistoryComponent } from './security-disputehistory/security-disputehistory.component';
import { SendandpayRequestCapwayComponent } from './sendandpay-request-capway/sendandpay-request-capway.component';
import { SendandpayRequestNoncapwayComponent } from './sendandpay-request-noncapway/sendandpay-request-noncapway.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    SubMenuAccountComponent,
    SubMenuSendandpayComponent,
    FooterComponent,
    DownloadComponent,
    SubMenuSecurityComponent,
    AccountOverviewComponent,
    AccountTransactionsComponent,
    AccountAllTransactionsComponent,
    AccountGoalsComponent,
    AccountStatementsComponent,
    AccountSecurityComponent,
    AccountSettingsComponent,
    AccountWithdrawlsComponent,
    AccountDepositsComponent,
    SendandpaySendComponent,
    SendandpayRequestComponent,
    SendandpayBillpayComponent,
    SendandpayTransferhistoryComponent,
    SendandpayBillpayhistoryComponent,
    SecurityCardsecurityComponent,
    SecurityDisputeComponent,
    SecurityAccountsecurityComponent,
    SecurityDisputehistoryComponent,
    SendandpayRequestCapwayComponent,
    SendandpayRequestNoncapwayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'account',
        component: SubMenuAccountComponent,
        children:[
          { path: 'transactions',
            component: AccountTransactionsComponent,
            children:[
              { path: 'all-transactions', component: AccountAllTransactionsComponent },
              { path: 'deposits', component: AccountDepositsComponent },
              { path:'withdrawls', component: AccountWithdrawlsComponent },
            ]
        },
          { path: 'goals', component: AccountGoalsComponent },
          { path:'statements', component: AccountStatementsComponent },
          { path:'security', component: AccountSecurityComponent },
          { path:'settings', component: AccountSettingsComponent },
        ]
      },
      { path:'sendandpay',
      component: SubMenuSendandpayComponent,
        children:[
          { path:'send',
            component: SendandpaySendComponent,
            children: [
              { path:'capway', component: SendandpayRequestCapwayComponent },
              { path:'noncapway', component: SendandpayRequestNoncapwayComponent },
            ]
           },
          { path:'request', component: SendandpayRequestComponent },
          { path:'billpay', component: SendandpayBillpayComponent },
          { path:'transferhistory', component: SendandpayTransferhistoryComponent },
        ]
      },
      { path:'security',
      component: SubMenuSecurityComponent,
        children:[
          { path:'cardsecurity', component: SecurityCardsecurityComponent },
          { path:'dispute', component: SecurityDisputeComponent },
          { path:'accountsecurity', component: SecurityAccountsecurityComponent }
        ]
      },
  ],{
    enableTracing: true
  }),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
