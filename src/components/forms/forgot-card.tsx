import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthWrapper from "@/components/forms/auth-wrapper";

export default function ForgotCard() {
  return (
    <AuthWrapper
      title="Forgot Password"
      description="Enter your email below to forgot to your account."
      isLoginPage={true}
      btnText="Forgot Password"
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="abhiarya329@gmail.com"
          required
          autoComplete="email"
        />
      </div>
    </AuthWrapper>
  );
}
