
import { Component } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
    selector:'test-app',
    templateUrl: './test.component.html'
})

export class TestComponent{
    public users = [];
    public name = "";
    constructor(private userService: UsersService){}
   
    ngOnInit(){
        
    }
    onSearch(){
       
        this.userService.getUsers(this.name).subscribe((data:any[]) => {
          alert(JSON.stringify(data));
         console.log(data);
           this.users = JSON.parse(JSON.stringify(data));
           console.log("HEllo" +this.users);
         });
    }
    
}