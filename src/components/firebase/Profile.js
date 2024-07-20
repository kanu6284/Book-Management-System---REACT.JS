import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from './firebase.config'; // Import Firebase initialization code

const auth = getAuth(app);
const db = getFirestore(app);

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in.
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (userDocSnapshot.exists()) {
          // User document exists in Firestore
          const userData = userDocSnapshot.data();
          setUserProfile({
            displayName: user.displayName,
            email: user.email,
            contact: userData.contact,
            address: userData.address
          });
        } else {
          // User document does not exist in Firestore
          setUserProfile({
            displayName: user.displayName,
            email: user.email
          });
        }
      } else {
        // No user is signed in.
        setUserProfile(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        {userProfile ? (
          <div>
            <p><strong>Name:</strong> {userProfile.displayName}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            {userProfile.contact && <p><strong>Contact:</strong> {userProfile.contact}</p>}
            {userProfile.address && <p><strong>Address:</strong> {userProfile.address}</p>}
          </div>
        ) : (
          <p>No user signed in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
