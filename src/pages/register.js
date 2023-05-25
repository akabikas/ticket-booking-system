import Layout from '../components/layout'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function RegisterUser() {
    return (
        <Layout>
            <section className='register-page'>
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
                        <div className='col-5 register-form'>
                            <h1>Sign up</h1>
                            <form className='register-form' name='register-form' method='POST'>
                                <fieldset>
                                    <input placeholder='Enter your email' name='email' className='email' type='email'></input>
                                </fieldset>
                                <fieldset>
                                    <input placeholder='Enter your password' name='password' className='password' type='password'></input>
                                </fieldset>
                                <fieldset>
                                    <input placeholder='Confirm your password' name='cfpassword' className='cfpassword' type='password'></input>
                                </fieldset>
                                <fieldset className='remember'>
                                    <input type='radio' id="remember"></input>
                                    <label htmlFor="remember">I agree to terms and conditions</label>
                                </fieldset>
                                <fieldset>
                                    <button className='submit-btn' type='submit'>
                                        Register
                                    </button>
                                </fieldset>
                                <fieldset>
                                    <p>Already have an account? <Link href="/login" >Login </Link></p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default RegisterUser
