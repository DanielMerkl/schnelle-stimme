import { User } from 'firebase';
import { Firebase } from './Firebase';

const signIn = async (): Promise<User | null> => {
  try {
    const { user } = await Firebase.auth().signInAnonymously();
    return user;
  } catch (e) {
    console.error(e);
    throw new Error('Fehler bei der Anmeldung.');
  }
};

export const Api = {
  signIn,
};
