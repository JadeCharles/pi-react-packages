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

/// <reference path="../dist/common/ui/modals/Modal.d.ts"/>
/// <reference path="../dist/common/ui/modals/ModalMenuItem.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/ReactModal.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/ReactMenuModal.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/ReactModalMenuItem.d.ts"/>

/// <reference path="../dist/common/ui/modals/Drawer.d.ts"/>
/// <reference path="../dist/common/ui/modals/DrawerController.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/DrawerMenu.d.ts"/>

/// <reference path="../dist/common/ui/modals/react/DropdownMenuButton.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/ContextDropdownMenu.d.ts"/>
/// <reference path="../dist/common/ui/modals/react/FloaterMenuButton.d.ts"/>
/// <reference path="../dist/common/ui/modals/MenuController.d.ts"/>

/// <reference path="../dist/common/models/ConfigModel.d.ts"/>
/// <reference path="../dist/common/services/HttpService.d.ts"/>

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

    export type Modal = Modals.Modal;
    export type ModalMenuItem = Modals.ModalMenuItem;
    export type ReactModal = Modals.ReactModal;
    export type ReactMenuModal = Modals.ReactMenuModal;
    export type ReactModalMenuItem = Modals.ReactModalMenuItem;

    export type Drawer = Modals.Drawer;
    export type DrawerController = Modals.DrawerController;
    export type DrawerMenu = Modals.DrawerMenu;

    export type DropdownMenuButton = Modals.DropdownMenuButton;
    export type ContextDropdownMenu = Modals.ContextDropdownMenu;
    export type FloaterMenuButton = Modals.FloaterMenuButton;
    export type MenuController = Modals.MenuController;

    export type ConfigModel = Common.ConfigModel;
    export type HttpService = Common.HttpService;
}
