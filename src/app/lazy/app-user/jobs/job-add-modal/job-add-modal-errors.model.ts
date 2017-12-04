export class JobAddErrors {
  public formErrors = {
    link: '',
    company: '',
    position: ''
  };

  public validationMessages = {
    link: {
      required: 'Job Link required',
      pattern: 'Job Link is not valid'
    },
    company: {
      required: 'Company Name required'
    },
    position: {
      required: 'Job Title required'
    }
  };
}
