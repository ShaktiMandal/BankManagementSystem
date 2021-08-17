import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HeaderServiceComponent{
    headerEventAction = new Subject<string>();
}