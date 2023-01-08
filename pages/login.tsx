import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"
import useAuth from "../hooks/useAuth"

interface Inputs {
  email: string
  password: string
}

export default function Login() {
  const [isLoggin, setIsLoggin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (isLoggin) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Login - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
        alt="movies"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt="Netflix"
      />

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="form-label">
            <input
              type="email"
              placeholder="Email"
              className={`form-input ${
                errors.email && "border-b-2 border-orange-500"
              }`}
              {...register("email", { required: true })}
            ></input>
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="form-label">
            <input
              type="password"
              placeholder="Password"
              className={`form-input ${
                errors.password && "border-b-2 border-orange-500"
              }`}
              {...register("password", { required: true })}
            ></input>
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setIsLoggin(true)}
        >
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix? &nbsp;
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setIsLoggin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}
