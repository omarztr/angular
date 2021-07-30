import { Component, OnInit } from '@angular/core';
import { ClientdetailsService } from 'src/app/clientdetails.service';


@Component({
  selector: 'app-sadf',
  templateUrl: './sadf.component.html',
  styleUrls: ['./sadf.component.css']
})
export class SadfComponent implements OnInit {
  Freelancer: any = {
    city: '',
    country: '',
    desc: '',
    experience: '',
    formation: '',
    level: '',
    phoneNumber: '',
    profileImage: '',
  };
  constructor(private clientDetails: ClientdetailsService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $().toggleClass('active');
        });
      });
    })(jQuery);

    this.clientDetails.getFreelanceDetails(localStorage.getItem('userId')).subscribe((data)=>{
      let result:any = data ; 
      this.Freelancer=result.result ; 
      console.log(result) ; 
    })
  }
}





