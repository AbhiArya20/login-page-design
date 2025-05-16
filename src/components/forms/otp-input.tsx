import { nanoid } from 'nanoid';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface CustomOtpInputProps {
  length: number;
  onChange: (value: string) => void;
  separator?: boolean;
}

export default function CustomOtpInput({ length, onChange }: CustomOtpInputProps) {
  const items = [];
  for (let i = 0; i < length; i++) {
    const id = nanoid();
    items.push(id);
  }
  return (
    <InputOTP id='otp' maxLength={length} onChange={onChange}>
      {items.map((item, idx) => (
        <div key={item}>
          <InputOTPGroup key={item}>
            <InputOTPSlot index={idx} className='border-gray-300 dark:border-slate-700 text-black dark:text-white dark:bg-slate-900' />
          </InputOTPGroup>
        </div>
      ))}
    </InputOTP>
  );
}
