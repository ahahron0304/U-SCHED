import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="SignIn | iUCSchedProMax+"
        description="SignIn page for iUCSchedProMax+"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
