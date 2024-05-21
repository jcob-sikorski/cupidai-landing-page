"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, ChildCard } from "@/app/components/Cards";
import { Divider } from "@/app/components/Divider";
import { PasswordInput, TextInput } from "@/app/components/TextInput";
import {
  PrimaryBoxButton,
  TertiaryButton,
} from "@/app/components/Buttons";
import Link from "next/link";
import { useFormState } from "react-dom";
import { onChangePassword } from "@/lib";

export default function ChangePassword({ params }: {
  params: {
      uuid: string;
  }
}) {
  const { push } = useRouter();

  const [state, action] = useFormState(onChangePassword.bind(null, params.uuid), {
    message: '',
  });
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const checkInputs = () => {
    return password.length >= 8;
  }

  useEffect(() => {
    if (state.message === 'success') {
      push(`${process.env.NEXT_PUBLIC_WEBAPP_DOMAIN}/login`);
    } else if (state.message !== '') {
      throw new Error(state.message);
    }
  }, [state]);

  return (
    <div className="relative flex flex-col items-center w-full p-16 gap-8">
      <motion.div className=" overflow-hidden z-[-1] w-full fixed bottom-0 flex items-end justify-center">
        <div className="flex items-center justify-center">
          <svg
            width="3840"
            height="996"
            viewBox="0 0 3840 996"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3008_422)">
              <g filter="url(#filter0_f_3008_422)">
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, 100, -50, 350, 0],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  opacity="0.3"
                  cx="2496.67"
                  cy="686.599"
                  rx="522.328"
                  ry="400.599"
                  fill="#3840FF"
                />
                <ellipse
                  cx="1343.33"
                  cy="853.599"
                  rx="522.328"
                  ry="400.599"
                  fill="#A661FF"
                />
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, -100, -50, -350, 0],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  cx="1242.22"
                  cy="797.391"
                  rx="406.576"
                  ry="311.637"
                  fill="black"
                />
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, 100, -50, 350, 0],
                  }}
                  transition={{
                    duration: 13,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  cx="1794.93"
                  cy="790.842"
                  rx="406.576"
                  ry="311.637"
                  fill="#EAAFFF"
                />
                <ellipse
                  cx="1443.33"
                  cy="1087.2"
                  rx="370.404"
                  ry="283.803"
                  fill="#FFD873"
                />
                <ellipse
                  cx="1690.76"
                  cy="970.402"
                  rx="370.404"
                  ry="283.803"
                  fill="#FFD873"
                />
                <ellipse
                  cx="2448.2"
                  cy="822.497"
                  rx="450.707"
                  ry="345.475"
                  fill="#8960FF"
                  fillOpacity="0.94"
                />
                <ellipse
                  cx="2536"
                  cy="892"
                  rx="299"
                  ry="260"
                  fill="#AF7EFF"
                  fillOpacity="0.94"
                />
                <ellipse
                  cx="1287.07"
                  cy="822.497"
                  rx="134.561"
                  ry="69.3134"
                  fill="#0029FF"
                />
                <ellipse
                  cx="1317"
                  cy="789.5"
                  rx="164"
                  ry="102.5"
                  fill="#711AFF"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_3008_422"
                x="537.409"
                y="2.4093"
                width="2765.18"
                height="1652.18"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="141.795"
                  result="effect1_foregroundBlur_3008_422"
                />
              </filter>
              <clipPath id="clip0_3008_422">
                <rect width="3840" height="996" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </motion.div>

      <Link href="/">
        <div className="flex w-[128px] md:w-fit h-[24px] md:h-[36px] items-center justify-center">
          <Image width={160} height={36} alt="" src="/logo.svg" />
        </div>
      </Link>

      <form action={action} className="flex w-[480px] max-w-[480px]">
        <Card width="full">
          <div className="flex flex-col">
            <span className="text-[32px] font-bold leading-[36px]">
              Change Password
            </span>
            <p className="text-textd">Change your password.</p>
          </div>

          <Divider />

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <span className="caption text-textd">New password</span>
                <PasswordInput
                  id={"password"}
                  type={showPassword ? "text" : "password"}
                  name={"password"}
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(value) => setPassword(value)}
                  visible={showPassword}
                  handleVisible={() => setShowPassword(!showPassword)}
                  required={true}
                />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <div
              className={`relative w-full grid ${
                checkInputs() ? "opacity-100" : "opacity-50"
              }`}
            >
              {checkInputs() ? null : (
                <div className="absolute w-full h-full top-0 left-0" />
              )}
              <PrimaryBoxButton
                enabled={checkInputs()}
              >
                <span>Change password</span>
              </PrimaryBoxButton>
            </div>
          </div>
        </Card>
      </form>
      <div className="w-full max-w-[480px]">
        <Card>
          <ChildCard>
            <div className="flex gap-2 w-full items-center justify-center">
              <p>Already have an account?</p>
              <TertiaryButton href="/login">
                <span className="gradient_text font-bold">Login</span>
              </TertiaryButton>
            </div>
          </ChildCard>
        </Card>
      </div>
    </div>
  );
};