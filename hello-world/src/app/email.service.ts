import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  getEmail(){
    return "belaidi-youcef@hotmail.com";
  }
}
