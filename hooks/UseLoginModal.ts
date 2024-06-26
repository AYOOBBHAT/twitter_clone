
// import { create } from 'zustand';

// interface LoginModalStore {
//   isOpen: boolean;
// }

  
// type LoginModalActions = {
//   onOpen: () => void;
//   onClose: () => void;
// };

// const useLoginModal = create<LoginModalStore &  LoginModalActions>((set) => ({
//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false })
// }));


// export default useLoginModal;


import { create } from 'zustand';

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useLoginModal;