import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMlRe2O3wmYWA9MAq6c9tEOS0WCe5umo4",
  authDomain: "alura-geek-d3.firebaseapp.com",
  projectId: "alura-geek-d3",
  storageBucket: "alura-geek-d3.appspot.com",
  messagingSenderId: "882781061124",
  appId: "1:882781061124:web:9e708b989b00b69b93f551",
  measurementId: "G-TL4NBSZGHF",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
