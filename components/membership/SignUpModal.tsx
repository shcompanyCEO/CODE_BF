import React, { useState } from 'react';
import Modal from 'react-modal';

interface IValidationErrorsProps {
  email: string;
  password: string;
  confirmPassword: string;
}
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
    zIndex: 100,
    overflow: 'none',
    border: 'none',
  },
};

interface ISignupModalProps {
  singUpPageClose: () => void;
}

const SignUpModal = ({ singUpPageClose }: ISignupModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<IValidationErrorsProps>({
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    confirmPassword: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

    // Perform signup logic
    // ...

    // Close the modal
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 border-solid border-2 border-gray">
        <button className="text-2 mb-4" onClick={singUpPageClose}>
          back
        </button>
        <h2 className="text-2xl mb-4">SignUp</h2>
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
          <input
            type="password"
            placeholder="Re Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="password"
            placeholder="address"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleSignup}
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
