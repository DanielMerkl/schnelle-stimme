import { User } from 'firebase';

import { Firebase } from './Firebase';
import { Poll } from '../types/interface/Poll';
import { Collection } from '../types/enum/Collection';

const FirebaseFunctions = Firebase.functions('europe-west3');

const signIn = async (): Promise<User | null> => {
  try {
    const { user } = await Firebase.auth().signInAnonymously();
    return user;
  } catch (e) {
    console.error(e);
    throw new Error('Fehler bei der Anmeldung.');
  }
};

const createPoll = async (poll: Poll): Promise<Poll> => {
  try {
    const invitationCode = await generateInvitationCode();
    const newDocRef = await Firebase.firestore()
      .collection(Collection.polls)
      .doc();
    const pollWithGeneratedId: Poll = {
      ...poll,
      id: newDocRef.id,
      invitationCode,
    };
    newDocRef.set(pollWithGeneratedId);

    return pollWithGeneratedId;
  } catch (e) {
    console.error(e);
    throw new Error('Fehler beim Erstellen der Umfrage.');
  }
};

const generateInvitationCode = async (): Promise<number> => {
  const callable = FirebaseFunctions.httpsCallable('generateInvitationCode');
  const { data } = await callable();
  if (typeof data !== 'number') {
    throw new Error(
      `Invalid result type "${typeof data}" of generated code "${data}"`
    );
  }

  return data;
};

export const Api = {
  signIn,
  createPoll,
};
