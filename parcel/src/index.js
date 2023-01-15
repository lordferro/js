import validatePassword from "./js/defaultExport";

console.log(validatePassword("asasasdasdasdd"));

// as importing named we can change the function/constant name(fetchUsersById2)
import { fetchAllUsers, fetchUsersById as fetchUsersById2 } from "./js/namedExport";



fetchAllUsers()

fetchUsersById2()

// we can import all

import * as namedExport from "./js/namedExport";

console.log(namedExport);
namedExport.fetchAllUsers()