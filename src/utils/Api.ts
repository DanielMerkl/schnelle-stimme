import { User } from 'firebase';

import { Firebase } from './Firebase';
import { Poll } from '../types/interface/Poll';
import { Collection } from '../types/enum/Collection';

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
    const invitationCode = await determineInvitationCode();
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

const determineInvitationCode = async (): Promise<number> => {
  try {
    // TODO: implement
    // const invitationCode = Firebase-Function...???
    return 12345;
  } catch (e) {
    console.error(e);
    throw new Error('Fehler beim generieren des Einladungscodes.');
  }
};

export const Api = {
  signIn,
  createPoll,
};
