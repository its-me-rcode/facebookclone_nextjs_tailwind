import Image from 'next/image'
import React from 'react'
import {signIn} from 'next-auth/client'

const Login = () => {
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" height={310} width={500} objectFit="conatin" />
            <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer ">Login With Facebook</h1>
        </div>
    )
}

export default Login

