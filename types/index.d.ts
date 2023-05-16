// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="../dist/common/controllers/FormController.d.ts"/>
/// <reference path="../dist/common/controllers/Controller.d.ts"/>
/// <reference path="../dist/common/controllers/FormValidator.d.ts"/>
/// <reference path="../dist/common/forms/FormButton.d.ts"/>
/// <reference path="../dist/messaging/forms/ContactForm.d.ts"/>
/// <reference path="../dist/geo/models/AddressModel.d.ts"/>

/// <reference path="../dist/common/ui/formatting/DateTime.d.ts"/>
/// <reference path="../dist/common/ui/formatting/EmailAddress.d.ts"/>
/// <reference path="../dist/common/ui/formatting/NumberDisplay.d.ts"/>
/// <reference path="../dist/common/ui/formatting/PhoneNumber.d.ts"/>
/// <reference path="../dist/common/ui/formatting/StringDisplay.d.ts"/>

// Global types
type FormController = Controllers.FormController;
type Controller = Controllers.Controller;
type FormValidator = Controllers.FormValidator;
type FormButton = Forms.FormButton;
type ContactForm = Messaging.ContactForm;
type Checkbox = Forms.Checkbox;
type PersonForm = Forms.PersonForm;

type AddressModel = Geo.AddressModel;
type DateTime = Formatting.DateTime;
type EmailAddress = Formatting.EmailAddress;
type NumberDisplay = Formatting.NumberDisplay;
type PhoneNumber = Formatting.PhoneNumber;
type StringDisplay = Formatting.StringDisplay;

declare module "pi-react-packages" {
    export { FormController } from "pi-react-packages/dist/common/controllers/FormController";
    export { Controller } from "pi-react-packages/dist/common/controllers/Controller";
    export { UserAgentModel  } from "pi-react-packages/dist/authentication/Authentication";
    export { PasswordPolicy, FormValidator } from "pi-react-packages/dist/common/controllers/FormValidator";
    export { FormButton } from "pi-react-packages/dist/common/forms/FormButton";
    export { ContactForm } from "pi-react-packages/dist/messaging/forms/ContactForm";
    export { Checkbox } from "pi-react-packages/dist/common/forms/Checkbox";
    export { PersonForm } from "pi-react-packages/dist/common/forms/PersonForm";

    export { AddressModel } from "pi-react-packages/dist/geo/models/AddressModel";
    export { DateTime } from "pi-react-packages/dist/common/ui/formatting/DateTime";
    export { EmailAddress } from "pi-react-packages/dist/common/ui/formatting/EmailAddress";
    export { NumberDisplay } from "pi-react-packages/dist/common/ui/formatting/NumberDisplay";
    export { PhoneNumber } from "pi-react-packages/dist/common/ui/formatting/PhoneNumber";
    export { StringDisplay } from "pi-react-packages/dist/common/ui/formatting/StringDisplay";
}
