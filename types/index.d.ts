// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

/// <reference path="src/common/controllers/Controllers.d.ts"/>

// Global types
type FormController = Controllers.FormController;
type Controller = Controllers.Controller;

declare module "pi-react-packages" { 
    export * from "pi-react-packages/dist/common/controllers/Controllers";
    export { Controller, FormController } from "pi-react-packages/dist/common/controllers/Controllers";
    export { UserAgentModel } from "pi-react-packages/dist/authentication/Controllers";
}
