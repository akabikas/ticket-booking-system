import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Footer() {

    return (
        <>
            <footer>
                <section className='main-footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5 logo'>
                                <Image
                                    src="/assets/img/logo.png"
                                    width={138}
                                    height={35}
                                    alt="Logo"
                                />
                            </div>
                            <div className='col-4 payment-partner'>
                                <h4>Payment Partner</h4>
                                <ul>
                                    <li>
                                        <Image
                                            src="/assets/img/Mastercard.png"
                                            width={67}
                                            height={42}
                                            alt="Logo"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/assets/img/Visa.png"
                                            width={67}
                                            height={42}
                                            alt="Logo"
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/assets/img/applepay.png"
                                            width={67}
                                            height={42}
                                            alt="Logo"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className='col-2 quick-links'>
                                <h4>Quick Links</h4>
                                <ul className="">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="/tickets">Tickets</Link>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>
                <section className='copyright'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 copyright-year'><p>Copyright © 2023</p></div>
                            <div className='col-6 creator d-flex justify-content-end'><p>Website by : <a target="_blank" href="https://bikaskc.com.np">Bikas</a></p></div>

                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
