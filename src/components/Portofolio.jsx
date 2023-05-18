import React, { useState } from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import {MdArrowBackIos} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import pic1 from '../images/mod01.jpg'
import pic2 from '../images/mod02.webp'
import pic3 from '../images/mod03.webp'

import pic4 from '../images/mod04.jpg'
import pic5 from '../images/mod05.jpg'
import pic6 from '../images/mod06.webp'

import pic7 from '../images/mod07.jpg'
import pic8 from '../images/mod08.jpg'
import pic9 from '../images/mod09.jpg'

import pic10 from '../images/mod10.jpg'
import pic11 from '../images/mod11.jpg'
import pic12 from '../images/mod12.jpg'


const Portofolio = () => {
    const modelPics = [pic1, pic2, pic3]
    const modelPics0 = [pic4, pic5, pic6]
    const modelPics1 = [pic7, pic8, pic9]
    const modelPics2 = [pic10, pic11, pic12]
    const [index,setIndex] = useState(0)
    let img = modelPics[index]
    let img0 = modelPics0[index]
    let img1 = modelPics1[index]
    let img2 = modelPics2[index]
    const [style,setStyle] = useState({backgroundImage: `url(${img})`})
    const [style0,setStyle0] = useState({backgroundImage: `url(${img0})`})
    const [style1,setStyle1] = useState({backgroundImage: `url(${img1})`})
    const [style2,setStyle2] = useState({backgroundImage: `url(${img2})`})
    const checkNumber = (num)=>{
        if(num > modelPics.length -1){
            return 0
        }
        if(num < 0){
            return modelPics.length -1
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

    const checkNumber0 = (num)=>{
        if(num > modelPics0.length -1){
            return 0
        }
        if(num < 0){
            return modelPics0.length -1
        }return num
    }
    const nextPic0 = () =>{
        setIndex((index)=>{
            const val = index + 1
            return checkNumber0(val)
        })
        setStyle0({backgroundImage: `url(${img0})`})
    }
    const prevPic0 = () =>{
        setIndex((index)=>{
            const val1 = index - 1
            return checkNumber0(val1)
        })
        setStyle0({backgroundImage: `url(${img0})`})
    }


    const checkNumber1 = (num)=>{
        if(num > modelPics1.length -1){
            return 0
        }
        if(num < 0){
            return modelPics1.length -1
        }return num
    }
    const nextPic1 = () =>{
        setIndex((index)=>{
            const val = index + 1
            return checkNumber1(val)
        })
        setStyle1({backgroundImage: `url(${img1})`})
    }
    const prevPic1 = () =>{
        setIndex((index)=>{
            const val1 = index - 1
            return checkNumber1(val1)
        })
        setStyle1({backgroundImage: `url(${img1})`})
    }


    const checkNumber2 = (num)=>{
        if(num > modelPics2.length -1){
            return 0
        }
        if(num < 0){
            return modelPics2.length -1
        }return num
    }
    const prevPic2 = () =>{
        setIndex((index)=>{
            const val1 = index - 1
            return checkNumber2(val1)
        })
        setStyle2({backgroundImage: `url(${img2})`})
    }
  return (
    <div className='porto-cont'>
        <div className="portofolio">
            <div className="side-1">
                <div className='porto-title'>
                    <div className="underline2"></div>
                    <h3>Portofolio</h3>
                </div>
                <h2 className="about-desc porto-desc">The Sub-Diary From Strivefit <br />
                Studio. Specialize In Product <br />
                Photography</h2>
                <button className="explore-btn">Explore More <BsArrowUpRight /></button>
                <div className="givenchy">
                    <div className="giv-title">
                        <h2 className="about-desc porto-desc">Givenchy Clothing</h2>
                        <p className="job">Branding, Clothing</p>
                    </div>
                    <div className="model_imgs model1" style={style}></div>
                    <div className="controle">
                            <MdArrowBackIos className='arrow-0' onClick={prevPic}/>
                            <div className="lines">
                                <div className="line1-1 line-0"></div>
                                <div className="line2-1 line-0"></div>
                                <div className="line3-1 line-0"></div>
                            </div>
                            <MdArrowForwardIos className='arrow-0' onClick={nextPic}/>
                        </div>
                </div>
                <div className="givenchy">
                    <div className="giv-title">
                        <h2 className="about-desc porto-desc">Sara Baqatyan</h2>
                        <p className="job">Branding, Clothing</p>
                    </div>
                    <div className="model_imgs model2" style={style0}></div>
                    <div className="controle">
                            <MdArrowBackIos className='arrow-0' onClick={prevPic0}/>
                            <div className="lines">
                                <div className="line1-2 line-0"></div>
                                <div className="line2-2 line-0"></div>
                                <div className="line3-2 line-0"></div>
                            </div>
                            <MdArrowForwardIos className='arrow-0' onClick={nextPic0}/>
                        </div>
                </div>
            </div>
            <div className="side-2">
            <div className="givenchy">
                    <div className="giv-title">
                        <h2 className="about-desc porto-desc">Prada Clothing</h2>
                        <p className="job">Branding, Clothing</p>
                    </div>
                    <div className="model_imgs model3" style={style1}></div>
                    <div className="controle">
                            <MdArrowBackIos className='arrow-0' onClick={prevPic1}/>
                            <div className="lines">
                                <div className="line1-3 line-0"></div>
                                <div className="line2-3 line-0"></div>
                                <div className="line3-3 line-0"></div>
                            </div>
                            <MdArrowForwardIos className='arrow-0' onClick={nextPic1}/>
                        </div>
                </div>

                <div className="givenchy">
                    <div className="giv-title">
                        <h2 className="about-desc porto-desc">Zero or Nothing</h2>
                        <p className="job">Branding, Clothing</p>
                    </div>
                    <div className="model_imgs model4" style={style2}></div>
                    <div className="controle">
                            <MdArrowBackIos className='arrow-0' onClick={prevPic2}/>
                            <div className="lines">
                                <div className="line1-4 line-0"></div>
                                <div className="line2-4 line-0"></div>
                                <div className="line3-4 line-0"></div>
                            </div>
                            <MdArrowForwardIos className='arrow-0' onClick={prevPic2}/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolio