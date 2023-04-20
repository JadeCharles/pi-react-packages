// Type definitions for Pi React Packages
// Definitions by: Jade Charles <https://github.com/jadecharles>
// Definitions: https://github.com/JadeCharles/pi-react-packages

// Global types
type FormController = Controllers.FormController;

declare module "pi-react-packages" { 
    export * from "pi-react-packages/dist/types/common/controllers/FormController";
    export { FormController } from "pi-react-packages/dist/types/common/controllers/FormController";
}
