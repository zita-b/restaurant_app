import { setDoc, getDocs, doc, query, collection, orderBy } from "firebase/firestore"
import { firestore } from '../firebase.config'; 

// saving new Item (admin)
export const saveItem = async (data) => {
  await setDoc(
    doc(firestore, 'foodItems', `${Date.now()}`), data, {
      merge: true,
    }
  );
};

// get all uploaded food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
  );

  return items.docs.map((doc) => doc.data());
}
