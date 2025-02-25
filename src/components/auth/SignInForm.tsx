import { useState } from "react";
import { Link } from "react-router";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          {/* <div className="flex justify-center mb-4">
            <img src="/images/pnc-logo-green.png" alt="PNC BANNER" />
          </div> */}
          <div className="mb-5 sm:mb-8">
            <img src="/images/usched-logo.png" alt="PNC BANNER" />
            {/* <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              iUCSchedProMax+
            </h1> */}
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Username <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="Enter your username" />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-sm text-green-600 hover:text-green-700 dark:text-green-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full bg-green-600 text-white py-2 rounded-3xl hover:bg-green-700 transition" size="sm">
                    Sign in
                  </Button>
                </div>
              </div>
            </form>
            <p className="text-center text-gray-500 text-2xl mt-5 font-tangerine">
              <span className="font-bold">Dangal ng Bayan</span>, Bringing Pride and Honor to the Nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
