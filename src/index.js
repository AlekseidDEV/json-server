import { addUsers } from "./modules/addUsers";
import { changePermissons } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { errorMessFunc } from "./modules/errorMess";
import { filterUsers } from "./modules/filterUsers";
import { removeUsers } from "./modules/removeUsers";
import { render } from "./modules/render";
import { searchUsers } from "./modules/searchUsers";
import { sortUsers } from "./modules/sortUsers";
import { UserService } from "./modules/userService";


window.userService = new UserService

userService.getUsers().then(data => { 
   render(data) 
})

addUsers()
removeUsers()
changePermissons()
editUsers()
filterUsers()
sortUsers()
searchUsers()
errorMessFunc()




