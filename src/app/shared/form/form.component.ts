import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormValidatorRules } from "./formvalidatorrules.component";
type inputFromType = {fieldsName:string[]};

@Injectable({
    providedIn: 'root'
})
export class FormGeneratorComponent
{
    public CreateFormGroup(formObject: inputFromType) : FormGroup
    {
        var validatorRuleBook = new FormValidatorRules();
        var formGroup = new FormGroup({});
        Object.keys(formObject).forEach( element => {

            if(element === 'fieldsName')
            {
                let fieldsName = formObject.fieldsName;
                if(fieldsName)
                {
                    fieldsName.forEach(field =>{

                        var rules = validatorRuleBook.rules.get(field);                       
                        formGroup.addControl(field, new FormControl(null, rules));                        
                    });
                }
            }
        });
        return formGroup;
    }   
}