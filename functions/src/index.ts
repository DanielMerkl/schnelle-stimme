import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const invitationCode = functions.https.onRequest((request, response) => {
  admin
    .firestore()
    .collection('polls')
    .get()
    .then((snapshot) => {
      let done = false;
      const min = 10000;
      const max = 99999;

      while (!done) {
        const code = Math.floor(Math.random() * (max - min)) + min;

        const isCodeUnique: boolean = snapshot.docs.every((doc) => {
          return doc.get('invitationCode') !== code;
        });

        if (isCodeUnique) {
          done = true;
          response.send({ invitationCode: code });
        }
      }
    })
    .catch((e) => console.error(e));
});
