import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ClientdetailsService } from 'src/app/clientdetails.service';
declare var jQuery: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  clientDetails = {
    Objectives: '',
    city: '',
    country: '',
    desc: '',
    phoneNumber: '',
    theme: '',
    profileImage: '',
  };
  constructor(private clientServ: ClientdetailsService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $().toggleClass('active');
        });
      });
    })(jQuery);
    
    this.clientServ.getClientDetails(localStorage.getItem('userId')).subscribe((data)=>{
      let result: any = data;
      this.clientDetails = result.result;
      console.log(result) ;
    });
  }
}
