import { Component, OnInit } from '@angular/core';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  inActiveSpan: boolean = true;

  constructor(private sidebarStatusService: SidebarStatusService){  }

  ngOnInit(): void {
      this.sidebarStatusService.status$.subscribe((colapsarSpan: boolean) => {
        this.inActiveSpan = !colapsarSpan;
      })
  }

}
