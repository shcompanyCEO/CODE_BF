/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hl5cRuR6OWE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@components/ui/select';
import { Button } from '@components/ui/button';

const SignUpModal = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">회원 가입 완료하기</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">
            이름(예: 길동)
          </label>
          <Input id="firstName" placeholder="ma" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">
            성(예: 홍)
          </label>
          <Input id="lastName" placeholder="sean" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            정보 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="birthDate">
            생일
          </label>
          <div className="grid grid-cols-3 gap-2">
            <Select>
              <SelectTrigger id="birthDateYear">
                <SelectValue placeholder="년" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="1990">1990</SelectItem>
                <SelectItem value="1991">1991</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="birthDateMonth">
                <SelectValue placeholder="월" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="birthDateDay">
                <SelectValue placeholder="일" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            이메일
          </label>
          <Input id="email" placeholder="shcompany.inc@gmail.com" />
          <p className="text-sm mt-1">이메일 확인과 영수증을 이메일로 보내드립니다.</p>
        </div>
        <p className="text-sm mb-4">Google에서 가짜 요청입니다.</p>
        <p className="text-sm mb-6">
          동의 및 계속하기 버튼을 선택하면 이메일받기 서비스 약관, 결제 서비스 약관 및 청구 금지
          정책에 동의하며 개인정보 처리방침 정책을 이해하는 것입니다.
        </p>
        <Button className="w-full bg-red-500 text-white">동의 및 계속하기</Button>
      </div>
    </div>
  );
};
export default SignUpModal;
