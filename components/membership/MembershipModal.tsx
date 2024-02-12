import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from '../login/LoginModal';
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

const SignupModal = ({ isOpen, onClose }: ISignupModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<IValidationErrorsProps>({
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세를',
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

    // Perform signup logic
    // ...

    // Close the modal
    onClose();
  };
  const UserList = () => {
    axios.get('/api/SignUp').then((res) => {
      console.log(res);
    });
  };

  return (
    <Modal
      role={'dialog'}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      contentLabel="Signup Modal"
    >
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button onClick={UserList} type="submit">
          가입하기
        </button>
      </form>
    </Modal>
  );
};

const ModalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>회원가입</button>
      {/* <LoginModal isVisible={isModalOpen} onClose={closeModal}></LoginModal> */}
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalApp;
