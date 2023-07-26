import UserModel from '../models/user.schema.js';

const userProfileController = async (req, res) => {
  const { user } = req;

  const existingUserById = await UserModel.findById(user.id);
  if (!existingUserById) 
    return res.status(401).send({ errors: ['Usuario no autorizado'] });

  const { _id, name, lastName, email } = existingUserById;

  return res.send({ _id, name, lastName, email });  
};

export default userProfileController;