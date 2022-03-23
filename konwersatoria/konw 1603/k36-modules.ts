export class SomeClassToExport{

}
export const SOME_CONST = 0;


// ale można też tak:

// default
// export default {SomeClassToExport, SOME_CONST};
// import mod from .., next mod.saveTheWorld

// alias
// export { SomeClassToExport as scl } // export with aliases
// import {scl} from .., next

// export { SomeClassToExport, SOME_CONST }
// import * as mod from './modules/module.js';