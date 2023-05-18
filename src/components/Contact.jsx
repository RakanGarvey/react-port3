import React from 'react'

const Contact = () => {
  return (
        <div className="contact">
            <div className='contact-det'>
                <div className='contact-title'>
                    <div className="underline2"></div>
                        <h3>Portofolio</h3>
                </div>
                <h2 className="contact-desc">Hello. Lets get in touch.</h2>
                <form action="">
                    <label htmlFor="name">Name <br />
                        <input type="text" /> <br />
                    </label>
                    <label htmlFor="email">Email <br />
                        <input type="email" /><br />
                    </label>
                    <label htmlFor="number">Phone No. <br />
                        <input type="text" /><br />
                    </label>
                    <label htmlFor="message">Message <br />
                        <input type="text" /><br />
                    </label>
                    <a href='/'>Send Message</a>
                </form>
            </div>
            <div className='contact-info'>
                <div>
                    <h2 className="address">Address</h2>
                    <p className="p-details">JI. Tirtawening No.132A, <br />
                     Cisurupan, Kec. Cubiru, <br />
                     Kota Bandung. Jawa Barat <br />
                     40614</p>
                </div>
                <div>
                    <h2 className="ofiice-h">Office Hours</h2>
                    <p className="p-details">Monday - Suturday <br />
                    10am - 10pm <br />
                    Sunday <br />
                    12pm - 6pm</p>
                </div>
                <div>
                    <h2 className="support">Support</h2>
                    <p className="p-details">strivefitstudio.info@gmail.com <br />
                    62 812 000 000</p>
                </div>
            </div>
        </div>
  )
}

export default Contact