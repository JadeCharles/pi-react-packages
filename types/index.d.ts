// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="src/common/controllers/FormController.d.ts"/>
/// <reference path="src/common/controllers/Controller.d.ts"/>

// Global types
type FormController = Controllers.FormController;

declare module "pi-react-packages" { 
    export * from "pi-react-packages/dist/common/controllers/FormController";
    export { FormController as default } from "pi-react-packages/dist/common/controllers/FormController";
    export { Controller as default } from "pi-react-packages/dist/common/controllers/Controller";
}
