import Layout from '../components/layout'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function LoginUser() {
    return (
        <>

            <Layout>
                <section className='login-page'>
                    <div className='background-container'>
                        <Image
                            src="/assets/img/cinema.png"
                            alt="background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className='home-featured'
                        />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5 login-form'>
                                <h1>Sign in</h1>
                                <form className='login-form' name='login-form' method='POST'>
                                    <fieldset>
                                        <input placeholder='Enter your email' name='email' className='email' type='email'></input>
                                    </fieldset>
                                    <fieldset>
                                        <input placeholder='Enter your password' name='password' className='password' type='password'></input>
                                    </fieldset>
                                    <fieldset className='remember'>
                                        <input type='radio' id="remember"></input>
                                        <label htmlFor="remember">Remember me</label>
                                    </fieldset>
                                    <fieldset>
                                        <button className='submit-btn' type='submit'>
                                            Login
                                        </button>
                                    </fieldset>
                                    <fieldset>
                                        <p>New member? <Link href="/register" >Register </Link></p>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default LoginUser
