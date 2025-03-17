import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisement,ESize } from '../../../Models/advertisment.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdvertisementModule } from '../../advertisement.module'; 
import { AdService } from '../../../service/advertisement';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({

  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();
  userData:any = localStorage.getItem('user');
   user:any;

  sizes = [
    { value: ESize.EIGHTH, label: '1/8 Page' },
    { value: ESize.QUARTER, label: '1/4 Page' },
    { value: ESize.HALF, label: '1/2 Page' },
    { value: ESize.FULL, label: 'Full Page' }
  ];

  constructor(private router: Router,private _adService:AdService,private modalService: NgbModal) {}

  ngOnInit() {
      
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.advertisement.image = file;
    }
  }


  openPopup() {
    this.modalService.open(PopUpComponent);
  }




  onSubmit() {
    if(!this.userData)
      console.log("err in localstorage");

   this.user=JSON.parse(this.userData);
   this.advertisement.userId=this.user.id;
   console.log("advertisement",this.advertisement);
    
   const formData = new FormData();
   formData.append('UserId',this.advertisement.userId.toString()); 
   formData.append('ImageFile',this.advertisement.image as Blob);
   formData.append('Size',this.advertisement.size.toString()); 
   formData.append('NumOfWeeks',this.advertisement.numOfWeeks.toString());


   this._adService.addAdvertisement(formData).subscribe({
      next:(res:Advertisement)=>{
        console.log("res",res);
        this.openPopup();
        this.router.navigate(['/home'])
      },
      error:(err:any)=>{
        console.log("errrrrr",err);
      }
   })

  }
}


