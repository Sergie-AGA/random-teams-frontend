import Logo from "@/components/Logo/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegistrationFormContainer from "@/features/auth/components/Forms/RegistrationFormContainer";

export default function Register() {
  return (
    <div className="max-width-container flex items-center justify-center h-[calc(100vh-40px)] pl-4 pr-4">
      <section className="flex gap-4 w-full justify-center max-w-screen-lg flex-col md:flex-row items-center">
        <Card>
          <CardHeader>
            <div className="text-center">
              <Logo />
            </div>
          </CardHeader>
          <CardContent>
            <RegistrationFormContainer />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
