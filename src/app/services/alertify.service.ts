import { Injectable } from '@angular/core';
declare let alertify:any; 
// alertify kullanmak için herhangi bir tipte alertify tanımlıyoruz

@Injectable() 
//global service olduğu için app.module.ts altında providers kısmına eklendi
export class AlertifyService {

  constructor() { }

  success(smessage:string){
    alertify.success(smessage) 
  }
  
  error(emessage:string){
    alertify.error(emessage);
    
  }

  warning(wmessage:string){
    alertify.warning()(wmessage) 
  }
}
