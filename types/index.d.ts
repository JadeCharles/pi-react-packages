// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="../dist/common/controllers/FormController.d.ts"/>
/// <reference path="../dist/common/controllers/Controller.d.ts"/>
/// <reference path="../dist/common/controllers/FormValidator.d.ts"/>
/// <reference path="../dist/common/forms/FormButton.d.ts"/>
/// <reference path="../dist/messaging/forms/ContactForm.d.ts"/>
/// <reference path="../dist/geo/models/AddressModel.d.ts"/>

// Global types
type FormController = Controllers.FormController;
type Controller = Controllers.Controller;
type FormValidator = Controllers.FormValidator;
type FormButton = Forms.FormButton;
type ContactForm = Messaging.ContactForm;
type AddressModel = Geo.AddressModel;

declare module "pi-react-packages" {
    export { FormController } from "pi-react-packages/dist/common/controllers/FormController";
    export { Controller } from "pi-react-packages/dist/common/controllers/Controller";
    export { UserAgentModel  } from "pi-react-packages/dist/authentication/Authentication";
    export { PasswordPolicy, FormValidator } from "pi-react-packages/dist/common/controllers/FormValidator";
    export { FormButton } from "pi-react-packages/dist/common/forms/FormButton";
    export { ContactForm } from "pi-react-packages/dist/messaging/forms/ContactForm";
    export { AddressModel } from "pi-react-packages/dist/geo/models/AddressModel";
}
