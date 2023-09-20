import { db } from './fbConfig';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

class HistoryFbService {
  constructor(userId) {
    this.userId = userId;
    this.userDocRef = doc(db, 'users', userId);
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
}

const userId = localStorage.getItem('token');

const historyFbService = new HistoryFbService(userId);

export default historyFbService;
