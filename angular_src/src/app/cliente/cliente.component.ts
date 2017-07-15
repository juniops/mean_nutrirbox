import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-cliente',
    templateUrl: 'cliente.component.html',
    styleUrls: ['cliente.component.scss']
})
export class ClienteComponent implements OnInit {
    @Input() inputArray: string[];
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        // let newForm = this.fb.group({
        //     appearsOnce: ['InitialValue', [Validators.required, Validators.maxLength(25)]],
        //     formArray: this.fb.array([])
        // });
        //
        // const arrayControl = <FormArray>newForm.controls['formArray'];
        // this.inputArray.forEach(item => {
        //     let newGroup = this.fb.group({
        //         itemPropertyOne: ['InitialValue', [Validators.required]],
        //         itemPropertyTwo: ['InitialValue', [Validators.minLength(5), Validators.maxLength(20)]]
        //     });
        //     arrayControl.push(newGroup);
        // });
        //
        // this.myForm = newForm;
    }


    addInput(): void {
        const arrayControl = <FormArray>this.myForm.controls['formArray'];
        let newGroup = this.fb.group({
            // itemPropertyOne: ['InitialValue', [Validators.required]],
            // itemPropertyTwo: ['InitialValue', [Validators.minLength(5), Validators.maxLength(20)]]
        });
        arrayControl.push(newGroup);
    }

    delInput(index: number): void {
        const arrayControl = <FormArray>this.myForm.controls['formArray'];
        arrayControl.removeAt(index);
    }

    onSubmit(): void {
        console.log(this.myForm.value);
        // Your form value is outputted as a JavaScript object.
        // Parse it as JSON or take the values necessary to use as you like
    }

}


