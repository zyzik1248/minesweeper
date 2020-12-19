import firebase from 'firebase'

export const initialDatabase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyARXNmjw3dtkJ05clEifNoCVpXcWxmPL-Q",
    authDomain: "minesweeper-d2be7.firebaseapp.com",
    projectId: "minesweeper-d2be7",
    databaseURL: "https://minesweeper-d2be7-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "minesweeper-d2be7.appspot.com",
  };
  firebase.initializeApp(firebaseConfig)
}

export const writeData = (data: any) => {
  firebase.database().ref('winners').push(data);
}

export const readData = async () => {
  const data: any[] = [];
  try{
    const snapshot = await firebase.database().ref('winners').once('value');
    Object.values(snapshot.val()).forEach((value) => {
      data.push(value);
    });
    return data;
  } catch{
    Promise.reject(null)
  }
}