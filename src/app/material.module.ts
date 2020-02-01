import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
    imports: [MatIconModule, MatButtonModule],
    exports: [MatIconModule, MatButtonModule]
})
export class MaterialModule { }
