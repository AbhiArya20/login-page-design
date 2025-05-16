import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthWrapper from "@/components/forms/auth-wrapper";

export default function UpdatePasswordCard() {
  return (
    <AuthWrapper
      title="Reset Your Password"
      description="Enter your new password and confirm it to complete the password reset process."
      isLoginPage={false}
      btnText="Update Password"
    >
      <div className="grid gap-2">
        <Label htmlFor="new-password">New Password</Label>
        <Input
          id="new-password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </AuthWrapper>
  );
}
