const Types = require("./core.js");

require("./types/template/test.js")(Types);
require('./types/bool/test.js')(Types);
/*require('./base_test.js');
require('./str_test.js');
require('./switch_test.js');*/


console.log("Success!");