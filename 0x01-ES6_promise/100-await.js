import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // call uploadPhoto and createUser with await
    const photo = await uploadPhoto();
    const user = await createUser();
    // return an object in the desired format
    return {
      photo,
      user,
    };
  } catch (e) {
    // handle error by returning an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
