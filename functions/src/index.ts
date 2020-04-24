import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const generateInvitationCode = functions
  .region('europe-west3')
  .https.onCall(async () => {
    const polls = await admin.firestore().collection('polls').get();

    const min = 10000;
    const max = 99999;

    let done = false;
    while (!done) {
      const code = Math.floor(Math.random() * (max - min)) + min;

      const isCodeUnique: boolean = polls.docs.every((poll) => {
        return poll.get('invitationCode') !== code;
      });

      if (isCodeUnique) {
        done = true;
        return code;
      }
    }

    throw new Error('Error while generating invitation code.');
  });
