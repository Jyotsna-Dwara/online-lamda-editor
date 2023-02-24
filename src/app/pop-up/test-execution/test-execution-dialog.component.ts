import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { LamdaFunctionForm } from '../../interfaces';

@Component({
  selector: 'app-test-dialog-execution',
  templateUrl: './test-execution-dialog.component.html',
  styleUrls: ['./test-execution-dialog.component.scss'],
})
export class TestExecutionDialogComponent {
  public files?: File;
  public fileType!: string;
  public inputUrl = new FormControl('');
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: { formData: LamdaFunctionForm }
  ) {
  }

  onFileChange(tempFileList?: Event): void {
    let files = (tempFileList?.target as HTMLInputElement).files;
    if (!files?.length) {
      return;
    }
    this.files = files[0];
  }
}
