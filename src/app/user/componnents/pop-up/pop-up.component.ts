import { Component, Injectable, NgModuleRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AdService } from '../../../service/advertisement';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class PopUpComponent implements OnInit{
 


  constructor(private modalService: NgbModal,private _adService:AdService) {}

  flag!:boolean;

  ngOnInit(): void {

    this._adService.getEmpties().subscribe({
      next:(res:boolean[])=>{
        console.log("bool",res);
        
        for (let element of res) {
           if(element){ 
             this.flag=true;
           }             
        };

      },
      error:(err)=>{
        console.log("userProfile",err);
      }
    })

  }

  modalRef!:NgbModalRef

  sendData(){
      
  }


  arrange(){


  }

  
  closePopup() {
    console.log('reffffffffffff');
    
       this.modalRef=this.modalService.open(PopUpComponent);
       this.modalRef.close();
  }
}
