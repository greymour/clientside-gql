'use client'

import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SignupMutation } from '@/gql/auth/mutations'
import { setToken } from '@/utils/token'
import { useMutation } from 'urql'

const SignupPage = () => {
  const [state, setState] = useState({ password: '', email: '' })
  const router = useRouter()
  // I don't care about the result value returned by useMutation since this is a simple demo
  // it has extra data for eg. loading states, but I can just await the promise below in the handler
  const [_, signup] = useMutation(SignupMutation);

  const handleSignup = async (e) => {
    e.preventDefault()
    const result = await signup({ input: state });

    if (result.data?.createUser?.token) {
      setToken(result.data.createUser.token);
      router.push('/');
    }
  }

  return (
    <div className="bg-white rounded-md border p-4 w-full shadow-sm">
      <div className="text-2xl text-black/70">Sign up</div>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-4">
        <div>
          <Input
            value={state.email}
            onValueChange={(v) => setState((s) => ({ ...s, email: v }))}
            variant="faded"
            label="Email"
            classNames={{
              inputWrapper: 'bg-slate-50 border-slate-100',
            }}
          />
        </div>
        <div>
          <Input
            variant="faded"
            value={state.password}
            onValueChange={(v) => setState((s) => ({ ...s, password: v }))}
            label="Password"
            type="password"
            classNames={{ inputWrapper: 'bg-slate-50 border-slate-100' }}
          />
        </div>
        <div className="text-end">
          <Button type="submit" variant="solid" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
