// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="../dist/common/controllers/FormController.d.ts"/>
/// <reference path="../dist/common/controllers/Controller.d.ts"/>
/// <reference path="../dist/common/controllers/FormValidator.d.ts"/>
/// <reference path="../dist/common/forms/FormButton.d.ts"/>
/// <reference path="../dist/common/forms/Checkbox.d.ts"/>
/// <reference path="../dist/common/ui/formatting/DateTime.d.ts"/>
/// <reference path="../dist/common/ui/formatting/EmailAddress.d.ts"/>
/// <reference path="../dist/common/ui/formatting/NumberDisplay.d.ts"/>
/// <reference path="../dist/common/ui/formatting/PhoneNumber.d.ts"/>
/// <reference path="../dist/common/ui/formatting/StringDisplay.d.ts"/>

/// <reference path="../dist/messaging/forms/ContactForm.d.ts"/>
/// <reference path="../dist/geo/models/AddressModel.d.ts"/>
/// <reference path="../dist/people/forms/PersonForm.d.ts"/>

/// <reference path="../dist/common/ui/modal/Modal.d.ts"/>
/// <reference path="../dist/common/ui/modal/ModalMenuItem.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/ReactModal.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/ReactMenuModal.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/ReactModalMenuItem.d.ts"/>

/// <reference path="../dist/common/ui/modal/Drawer.d.ts"/>
/// <reference path="../dist/common/ui/modal/DrawerController.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/DrawerMenu.d.ts"/>

/// <reference path="../dist/common/ui/modal/react/DropdownMenuButton.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/ContextDropdownMenu.d.ts"/>
/// <reference path="../dist/common/ui/modal/react/FloaterMenuButton.d.ts"/>
/// <reference path="../dist/common/ui/modal/MenuController.d.ts"/>

declare module "pi-react-packages" {
    // Global types
    export type FormController = Controllers.FormController;
    export type Controller = Controllers.Controller;
    export type FormValidator = Controllers.FormValidator;
    export type FormButton = Forms.FormButton;
    export type ContactForm = Messaging.ContactForm;
    export type Checkbox = Forms.Checkbox;
    export type PersonForm = People.PersonForm;

    export type AddressModel = Geo.AddressModel;
    export type DateTime = Formatting.DateTime;
    export type EmailAddress = Formatting.EmailAddress;
    export type NumberDisplay = Formatting.NumberDisplay;
    export type PhoneNumber = Formatting.PhoneNumber;
    export type StringDisplay = Formatting.StringDisplay;

    export type Modal = Modal.Modal;
    export type ModalMenuItem = Modal.ModalMenuItem;
    export type ReactModal = Modal.ReactModal;
    export type ReactMenuModal = Modal.ReactMenuModal;
    export type ReactModalMenuItem = Modal.ReactModalMenuItem;

    export type Drawer = Modal.Drawer;
    export type DrawerController = Modal.DrawerController;
    export type DrawerMenu = Modal.DrawerMenu;
    
    export type DropdownMenuButton = Modal.DropdownMenuButton;
    export type ContextDropdownMenu = Modal.ContextDropdownMenu;
    export type FloaterMenuButton = Modal.FloaterMenuButton;
    export type MenuController = Modal.MenuController;
}
