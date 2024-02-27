import React from 'react'
import './aboutUs.css'

export default function AboutUs() {
  return (
    <>
    <div className="about_us-container" id='about'>
    <div className="about-us-box">
        <div className="img-about">
<img src="./src/assets/pictures/img-about.svg" alt="" />
        </div>
        <div className="text-about">
            <div className="title-about">
            О нашей компании
                <div className="signature">
                    <img src="./src/assets/pictures/signature.svg" alt="" />
                </div>
            </div>
            <div className="text-about">
                <div className="text-about1">
                Наша компания - это семья,мы работаем с 2003 года,мы сохранили старые рецепты и каждый год пополняемся новыми, у нас около 100 рецептов которыми мы с удовольствие поделимся с вами!
                </div>
                <div className="text-about2">
                В нашей пекарне замешивается тесто,ставятся в печь пироги и круассаны ,мы сами готовим всё с нуля и с любовью,мы не используем полуфабрикаты поэтому наша продукция такая особенная и вкусная! 
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
