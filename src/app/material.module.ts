import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';


@NgModule({
    imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    exports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule { }
