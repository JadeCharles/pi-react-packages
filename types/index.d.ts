// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="/dist/common/controllers/FormController.d.ts"/>
/// <reference path="/dist/common/controllers/Controller.d.ts"/>

// Global types
type FormController = Controllers.FormController;
type Controller = Controllers.Controller;

declare module "pi-react-packages" { 
    export { FormController as default } from "pi-react-packages/dist/common/controllers/FormController";
    export { Controller as default } from "pi-react-packages/dist/common/controllers/Controller";
    export { UserAgentModel as default } from "pi-react-packages/dist/authentication/Authentication";
}
