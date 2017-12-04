import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {JobAddErrors} from './job-add-modal-errors.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShowValidationErrors} from '../../../../core/validators/show-validation-errors.model';
import {WEBSITE_LINK} from '../../../../core/models/regex-patterns.model';

@Component({
  selector: 'fmp-add-job-modal',
  templateUrl: 'job-add-modal.html',
  styles: [require('./job-add-modal.scss').toString()],
  encapsulation: ViewEncapsulation.None
})
export class FmpAddJobComponent extends ShowValidationErrors implements OnDestroy {

  public modelForm: FormGroup;

  public fm: any;

  constructor(private fb: FormBuilder,
              public errorsFormModel: JobAddErrors,
              private modalService: NgbActiveModal) {
    super();

    this.modelForm = this.fb.group({
      link: ['', [
        Validators.required,
        Validators.pattern(WEBSITE_LINK)
      ]],
      position: ['', [
        Validators.required,
        Validators.maxLength(128)
      ]],
      company: ['', [
        Validators.required,
        Validators.maxLength(128)
      ]],
      isGlobalValidate: [{
        value: false,
        disabled: true
      }]
    });

    super.setData(this.modelForm, this.errorsFormModel);

    this.modelForm.valueChanges
      .subscribe(() => super.onValueChanged());

    this.fm = this.errorsFormModel.formErrors;
  }

  public ngOnDestroy(): void {
    super.clearErrors();
  }

  public saveJob(): void {
    this.modelForm.get('isGlobalValidate').setValue(true);
    super.onValueChanged();

    if (this.modelForm.invalid) {
      return;
    }

    this.modalService.close(this.modelForm.value);
  }

  /**
   * Method to dismiss modal
   */
  public cancel(): void {
    this.modalService.dismiss('Client close modal.');
  }

  public closeError(field: string): void {
    this.fm[field] = '';
  }
}