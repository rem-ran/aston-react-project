import { db } from './fbConfig';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';

class HistoryFbService {
  constructor(userId) {
    this.userId = userId;
    this.userDocRef = doc(db, 'users', this.userId);
    this.historyCollectionRef = collection(this.userDocRef, 'history');
  }

  async addToHistory(query) {
    await setDoc(doc(this.historyCollectionRef), { link: query });
  }

  async getSearchHistory() {
    const historyQuerySnapshot = await getDocs(this.historyCollectionRef);
    const history = historyQuerySnapshot.docs.map((doc) => doc.data().link);

    return history;
  }

  async deleteFromHistory(query) {
    const querySnapshot = await getDocs(this.historyCollectionRef);
    querySnapshot.forEach((doc) => {
      if (doc.data().link === query) {
        deleteDoc(doc.ref);
      }
    });
  }
}

const userId = localStorage.getItem('token');

const historyFbService = new HistoryFbService(userId || 'guestId');

export default historyFbService;
