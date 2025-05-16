import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthWrapper from "@/components/forms/auth-wrapper";

export default function SignUpCard() {
  return (
    <AuthWrapper
      title="Create an account"
      description="Enter your information to create an account."
      isLoginPage={false}
      btnText="Create account"
      formAction={async () => {
        "use server";
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            id="first-name"
            placeholder="Abhi"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            id="last-name"
            placeholder="Arya"
            required
            autoComplete="family-name"
          />
        </div>
      </div>
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
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" autoComplete="current-password" />
      </div>
    </AuthWrapper>
  );
}
