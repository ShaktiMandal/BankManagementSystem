import { FormGroup } from "@angular/forms"

declare module "@angular/forms"{

    interface FormGroup{
        resetAll: () => void;
        resetFields: (fields: string[]) => void;
    }
}

FormGroup.prototype.resetAll = function():void{
    this.reset();
}

FormGroup.prototype.resetFields = function(fields: string[]): void{
    if(fields.length === 0)
    {
        return;
    }

    fields.forEach(field =>{
        this.controls[field].reset();
    });
}

export {}