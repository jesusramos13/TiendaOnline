import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TabNotificationComponent} from '../tabs/tab-message/tab-notification.component';
import { TabMessageComponent } from "../tabs/tab-setting/tab-message.component";
import { SidebarStatusService } from '../../services/status/sidebar-status.service';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    TabMessageComponent
],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss'
})
export class HeaderBackofficeComponent {

  constructor(private sidebarStatusService: SidebarStatusService){}

  isActive: boolean = true;

  // Variables de tabs

  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveMessage: false
  }

  // isActiveNotification: boolean = false;

  toggleLogo() {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    }
    else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      })
      this.isActiveItems[option] = true;
    }
  }

}
