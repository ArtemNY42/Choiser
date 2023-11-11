import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-profilePage',
    templateUrl: './profilePage.component.html',
    styleUrls: ['./profilePage.component.scss']
})
export class ProfilePage{

    tabIndex: number = 1;
    @Output() outputIndex = new EventEmitter<number>();
    @Input() isEntered = false;
    isEditing: boolean = false;
    

    changeTab(index: number){
        //if(this.tabIndex == index) this.tabIndex = 0;
        this.tabIndex = index;
        this.outputIndex.emit(this.tabIndex);
    }

    edit(){
        this.isEditing = !this.isEditing;
    }
}