import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

    tabIndex: number = 1;
    @Output() outputIndex = new EventEmitter<number>();
    @Input() isEntered = false;
    

    changeTab(index: number){
        //if(this.tabIndex == index) this.tabIndex = 0;
        this.tabIndex = index;
        this.outputIndex.emit(this.tabIndex);
    }
}