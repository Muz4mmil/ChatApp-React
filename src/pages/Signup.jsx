import React from 'react'
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js"; 

const Signup = () => {

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      var user;
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',    
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid:  res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        },
        (error) => {
          console.log(error);
        }, 
      );

      

    }catch(err){
      console.log(err);
    }


  }


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Signup</span>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder='Name'/>
            <input type="email" name="" id="email" placeholder='Email' />
            <input type="password" name="" id="password" placeholder='Password'/>
            <input type="file" name="file" id="file" />
            <button>Sign Up</button>
        </form>
        <p>Already Have an account? Login</p>
      </div>
    </div>
  )
}

export default Signup
