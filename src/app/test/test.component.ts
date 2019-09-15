import { Component } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
    selector:'test-app',
    templateUrl: './test.component.html'
})

export class TestComponent{
    public users = [];
    public userDetail = [];
    public name = "";
    public user_detail_click = false;
    public buttonName = "Details";
    public userName = "";
    public user_detail_click1 = "";
    public button: string = ""
    p: number = 1;
    constructor(private userService: UsersService){}
    
    ngOnInit(){
        
    }
    onSearch(){
        this.userService.getUsers(this.name).subscribe((data:any[]) => {
        //  console.log(data);
        this.users = JSON.parse(JSON.stringify(data));
         });
    }
    showUserDetial(index,value,buttonValue){
      this.user_detail_click1 = value;
      this.button = buttonValue;
      this.user_detail_click = !this.user_detail_click;
      if(this.user_detail_click){
        this.buttonName = "Collapse"
      }else{
        this.buttonName = "Details"
      }
      this.userName = value;
      this.userService.getUserDetail(this.userName).subscribe((userDetail:any[]) => {
      //  console.log(userDetail);
      this.userDetail = JSON.parse(JSON.stringify(userDetail));
        })
    }
}