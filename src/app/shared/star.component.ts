import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges{

    @Input() rating: number;
    @Input() productName: string;
    
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating of ${this.productName} is qual to ${this.rating}`);
    }
}
