import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import SignUpModal from './SignUpModal';
Modal.setAppElement('#__next');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '20px',
    zIndex: 10,
    overflow: 'none',
    border: 'none',
  },
};
interface ISignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface IValidationErrorsProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const LoginModal = ({ isOpen, onClose }: ISignupModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<IValidationErrorsProps>({
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    confirmPassword: '',
  });

  const handleSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Form validation
    const validationErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    if (!email) {
      validationErrors.email = '올바른 이메일을 입력해주세요.';
    }
    if (!password) {
      validationErrors.password = '비밀번호를 입력해주세요.';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onClose();
  };
  const UserList = () => {
    axios.get('/api/SignUp').then((res) => {
      console.log(res);
    });
  };
  const signUpPage = () => {
    setSignUpModalOpen(true);
  };
  const signUpPageClose = () => {
    setSignUpModalOpen(false);
  };

  return (
    <Modal
      role={'dialog'}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      // contentLabel="Signup Modal"
    >
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg p-8 border-solid border-2 border-gray">
          <h2 className="text-2xl mb-4">Login</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md py-2 px-3 mb-3"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={onClose}
              className="ml-2 text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Close
            </button>
          </form>
          <button onClick={signUpPage}>signUp</button>
        </div>
        {signUpModalOpen === true && <SignUpModal singUpPageClose={signUpPageClose} />}
      </div>
    </Modal>
  );
};

export default LoginModal;
