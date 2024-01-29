import React from 'react'
import {ImLocation2} from 'react-icons/im'
import {MdArrowBackIos} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import {BsImageFill} from 'react-icons/bs'
import {BsFillCameraFill} from 'react-icons/bs'
import { useState } from 'react'
import pic1 from '../images/back1.jpg'
import pic2 from '../images/back2.jpg'
import pic3 from '../images/back3.jpg'
import Section from '../Section'
import Section2 from '../Section2'

const About = () => {
    const studioPics = [pic1, pic2, pic3]
    const [index,setIndex] = useState(0)
    let img = studioPics[index]
    const [style,setStyle] = useState({backgroundImage: `url(${img})`})
    const checkNumber = (num)=>{
        if(num > studioPics.length -1){
            return 0
        }
        if(num < 0){
            return studioPics -1
        }return num
    }
    const nextPic = () =>{
        setIndex((index)=>{
            const val = index + 1
            return checkNumber(val)
        })
        setStyle({backgroundImage: `url(${img})`})
    }
    const prevPic = () =>{
        setIndex((index)=>{
            const val1 = index - 1
            return checkNumber(val1)
        })
        setStyle({backgroundImage: `url(${img})`})
    }
    return (
        <div className='about-cont'>
                <div className="about">
                    <div className="part-1">
                            <div className="face1">
                                <Section>
                                    <div className='face1-title'>
                                        <div className="underline2"></div>
                                        <h3>About</h3>
                                    </div>
                                    <h2 className="about-desc">Creating Images From 
                                    Our Studio To Attractively 
                                    Representing Your Product</h2>
                                    <div className='fase1-last'>
                                        <div className="sideline"></div>
                                        <p className='about-end'>Backyard studio is a photo rental
                                            , based in the Eastern Bandung area. With a 
                                            studio area of 6x7m, complete with 5 black, cream, 
                                            yellow, purple, and gray backgrounds. We also have 
                                            a 7x3m wide  white cyclorama wall. </p>
                                    </div>
                                </Section>
                            </div>
                            <div className="fase2">
                                <Section2>
                                    <div className='face1-title'>
                                        <div className="underline2"></div>
                                        <h3>Location</h3>
                                    </div>
                                    <div className="location">
                                        <ImLocation2 className='loc-icon'/>
                                        <p className='loc-desc'>2 Address: JI. Tirtawening No.132A, 
                                        Cisurupan, Kec. Cubiru. Kota Bandung. Jawa Barat 40614</p>
                                    </div>
                                    <div className="loc-img" />
                                </Section2>
                            </div>
                    </div>
                    <Section>
                        <div className="part-2">
                            <div className='fase2-title'>
                                <div className="underline2"></div>
                                <h3>Photos Of Studio</h3>
                            </div>
                            <div className="studio-img" style={style}></div>
                            <div className="controle">
                                <MdArrowBackIos className='arrow' onClick={prevPic}/>
                                <div className="lines">
                                    <div className="line1 line" ></div>
                                    <div className="line2 line" ></div>
                                    <div className="line3 line" ></div>
                                </div>
                                <MdArrowForwardIos className='arrow' onClick={nextPic}/>
                            </div>
                        </div>
                    </Section>
                    <Section2>
                        <div className="part-3" id='services'>
                            <div className='fase-title'>
                                <div className="underline2"></div>
                                <h3>Services</h3>
                            </div>
                            <h2 className="serv-desc">The Service We Provide.</h2>
                            <div className="information">
                                <div className="rent service">
                                    <div className="stu-icon">
                                        <BsFillCameraFill />
                                    </div>
                                    <h3 className='service-title'>Rent Studio</h3>
                                </div>
                                <div className="product service">
                                    <div className="stu-icon">
                                        <BsImageFill />
                                    </div>
                                    <h3 className='service-title'>Photos And Video Product</h3>
                                </div>
                            </div>
                        </div>
                    </Section2>
                </div>
        </div>
    )
    }

    export default About