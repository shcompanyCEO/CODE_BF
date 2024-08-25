// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { auth, googleProvider, db } from '@/api/firebase/firebase';
// import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

// interface UserData {
//   userUid: string;
//   displayName: string;
//   email: string;
//   phoneNumber: string;
//   userToken: string;
//   //role은 3가지 / host, client, artist
//   role: string;
//   salon: {
//     salonId: string;
//     ownerUserEamil: string;
//     salonName: string;
//     address: string;
//     salonPhoneNumber: string;
//     salonIntroduction: string;
//     salonCategory: string;
//     openTime: string;
//     closeTime: string;
//     location: {
//       latitude: string;
//       longitude: string;
//     };
//     designers: [];
//   } | null;
// }

// interface AuthContextProps {
//   user: UserData | null;
//   loading: boolean;
//   loginWithGoogle: () => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps>({
//   user: null,
//   loading: true,
//   loginWithGoogle: async () => {},
//   logout: async () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<UserData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const queryClient = useQueryClient();

//   const loginWithGoogleMutation = useMutation<UserData, Error>({
//     mutationFn: async (): Promise<UserData> => {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       const userDocRef = doc(db, 'users', user.email!);
//       const docSnap = await getDoc(userDocRef);

//       if (!docSnap.exists()) {
//         const userData: UserData = {
//           userUid: user.uid,
//           displayName: user.displayName ? user.displayName : '',
//           email: user.email!,
//           phoneNumber: user.phoneNumber ? user.phoneNumber : '',
//           userToken: await user.getIdToken(),
//           role: 'client',
//           salon: null,
//         };
//         await setDoc(userDocRef, userData, { merge: true });
//         return userData;
//       } else {
//         return docSnap.data() as UserData;
//       }
//     },
//     onSuccess: (data) => {
//       setUser(data);
//       queryClient.setQueryData(['userData'], data);
//       setLoading(false);
//       alert('Login Success');
//     },
//     onError: (error) => {
//       console.error('Google login error', error);
//       setLoading(false);
//       alert('Login Error');
//     },
//   });

//   const logoutMutation = useMutation<void, Error>({
//     mutationFn: async (): Promise<void> => {
//       await signOut(auth);
//     },
//     onSuccess: () => {
//       setUser(null);
//       queryClient.removeQueries({ queryKey: ['userData'] });
//       setLoading(false);
//       alert('Logout Success');
//     },
//     onError: (error) => {
//       console.error('Logout error', error);
//       setLoading(false);
//       alert('Logout Error');
//     },
//   });

//   const loginWithGoogle = async () => {
//     setLoading(true);
//     await loginWithGoogleMutation.mutateAsync();
//   };

//   const logout = async () => {
//     setLoading(true);
//     await logoutMutation.mutateAsync();
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         const userDocRef = doc(db, 'users', firebaseUser.email!);
//         const userData = (await getDoc(userDocRef)).data();
//         if (userData) {
//           setUser(userData as UserData);
//           queryClient.setQueryData(['userData'], userData);
//         }
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [queryClient]);

//   return (
//     <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, googleProvider, db } from '@/api/firebase/firebase';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UserData {
  userUid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  userToken: string;
  role: string;
  salon: {
    salonId: string;
    ownerUserEmail: string;
    salonName: string;
    address: string;
    salonPhoneNumber: string;
    salonIntroduction: string;
    salonCategory: string;
    openTime: string;
    closeTime: string;
    location: {
      latitude: string;
      longitude: string;
    };
    designers: [];
  } | null;
}

interface AuthContextProps {
  user: UserData | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const queryClient = useQueryClient();

  const loginWithGoogleMutation = useMutation<UserData, Error>({
    mutationFn: async (): Promise<UserData> => {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.email!);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        const userData: UserData = {
          userUid: user.uid,
          displayName: user.displayName ? user.displayName : '',
          email: user.email!,
          phoneNumber: user.phoneNumber ? user.phoneNumber : '',
          userToken: await user.getIdToken(),
          role: 'client',
          salon: null,
        };
        await setDoc(userDocRef, userData, { merge: true });
        return userData;
      } else {
        return docSnap.data() as UserData;
      }
    },
    onSuccess: (data) => {
      setUser(data);
      queryClient.setQueryData(['userData'], data);
      setLoading(false);
      alert('Login Success');
    },
    onError: (error) => {
      console.error('Google login error', error);
      setLoading(false);
      alert('Login Error');
    },
  });

  const logoutMutation = useMutation<void, Error>({
    mutationFn: async (): Promise<void> => {
      await signOut(auth);
    },
    onSuccess: () => {
      setUser(null);
      queryClient.removeQueries({ queryKey: ['userData'] });
      setLoading(false);
      alert('Logout Success');
    },
    onError: (error) => {
      console.error('Logout error', error);
      setLoading(false);
      alert('Logout Error');
    },
  });

  const loginWithGoogle = async () => {
    setLoading(true);
    await loginWithGoogleMutation.mutateAsync();
  };

  const logout = async () => {
    setLoading(true);
    await logoutMutation.mutateAsync();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.email!);
        const userData = (await getDoc(userDocRef)).data();
        if (userData) {
          setUser(userData as UserData);
          queryClient.setQueryData(['userData'], userData);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [queryClient]);

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
