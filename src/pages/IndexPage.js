import React from 'react'
import Images from '../images/Images.js'

const IndexPage = () => {
    return (
        <div>
            <img className='showcase-img' src={Images.renovation} alt='renovation' />
            <div className='overlay'></div>
            <section className='showcase'>
                <div className='container'>
                    <div className='showcase-text'>
                        <p>Home Renovations</p>
                        <h1 className='lg'>
                            Rehabbed & rented homes with you in mind
                        </h1>
                        <a href='#contact'><button className='btn'>Contact Us &rarr;</button></a>
                    </div>
                </div>
            </section>

            <section className='contact py-3' id='contact'>
                <div className='container'>
                    <h1>Contact Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum sint rem impedit consequuntur praesentium, voluptatum vero aliquam, voluptatibus, est obcaecati pariatur soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum sint rem impedit consequuntur praesentium, voluptatum vero aliquam, voluptatibus, est obcaecati pariatur soluta.
                    </p>
                    <div className='pt-2 contact-flex'>
                        <div className='contact-form'>
                            <form name='contact'
                                method='POST'
                                netlify-honeypot='bot-field'
                                data-netlify='true'
                                netlify>
                                <p class='hidden'>
                                    <label>Don’t fill this out if you’re human: <input name='bot-field' /></label>
                                </p>
                                <div className='row'>
                                    <div className='input50'>
                                        <input type='text' name='First Name' placeholder='First Name' />
                                    </div>
                                    <div className='input50'>
                                        <input type='text' name='Last Name' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input50'>
                                        <input type='email' name='Email' placeholder='Email' />
                                    </div>
                                    <div className='input50'>
                                        <input type='text' name='Subject' placeholder='Subject' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input100'>
                                        <textarea placeholder='Message' name='Message'></textarea>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input100'>
                                        <button className='btn contact-btn' type='submit'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='contact-info'>
                            <div className='info-box'>
                                <img src={Images.address} alt='address' />
                                <div className='details'>
                                    <h4>Address</h4>
                                    <p>123 Fake Street, San Antonio, Texas 78236</p>
                                </div>
                            </div>
                            <div className='info-box'>
                                <img src={Images.call} alt='call' />
                                <div className='details'>
                                    <h4>Call</h4>
                                    <a href='tel:+12102015815'>210 201 5815</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default IndexPage
