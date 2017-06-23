import { FormGroup } from '@angular/forms';

export class FormUtils {

  static getAllErrors(fg: FormGroup): {[key: string]: string} {
    return Object.keys(fg.controls)
      .map(controlKey => FormUtils.getPrefixedErrors(controlKey, fg.get(controlKey).errors))
      .reduce((accu, val) => Object.assign(accu, val), fg.errors || {});
  }

  static getPrefixedErrors(controlName: string, errors: {[key: string]: string}): {[key: string]: string} {

    if (!errors) {
      return {};
    }

    const prefixedErrors = {};
    Object.keys(errors).forEach(key => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      prefixedErrors[controlName + capitalizedKey] = errors[key];
    });
    return prefixedErrors;
  }

  static getAllErrorsMessages(fg: FormGroup, errorMessages: {[key: string]: string}): string[] {
    return Object.keys(FormUtils.getAllErrors(fg))
      .map(key => errorMessages[key]);
  }

  static formatTitleWithErrorMessages (fg: FormGroup, errorMessages: {[key: string]: string}): string {
    const errorsStrings = FormUtils.getAllErrorsMessages(fg, errorMessages)
      .map(message => ' • ' + message);

    if (!errorsStrings || !errorsStrings.length) {
      return '';
    }

    return 'Le formulaire n\'est pas complet :\n' + errorsStrings.join('\n');
  }

}
