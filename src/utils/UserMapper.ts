import { AuthResponse } from "../api/BeWellApi";
import { User } from "../models/UserContext";

export default AuthResponseToUserMapper = ( res: AuthResponse ) {
  return new User ({
    id: res.user._id,
    
  })
}
