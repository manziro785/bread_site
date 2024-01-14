import React from 'react'
import './cards.css'


export default function Cards() {
    return (
        <>
            <div className="cards">
                <div className="card1">
                    <div className="img1">
                        <img src="./src/assets/photo/wallet.svg" alt="" className='image1' />
                    </div>
                    <div className="title0">
                    Look at your income 
                    and expenses
                    </div>
                    <div className="subt0">
                    Gain insights into your financial world. Explore the dynamics of your income and expenses with a focused perspective. Your financial story unfolds in every transaction .
                    </div>
                </div>
                <div className="card2">
                    <div className="img2">
                        <img src="./src/assets/photo/сoins (1).svg" alt="" className='image2' />
                    </div>
                    <div className="title0">
                    Сonvenient and
                    always at hand
                    </div>
                    <div className="subt0">
                    Whether you're on a desktop or mobile device, our site is tailored to be accessible whenever and wherever you need it. Navigate effortlessly
                    </div>

                </div>
                <div className="card3">
                    <div className="img3">
                        <img src="./src/assets/photo/money box.svg" alt="" className='image3' />
                    </div>
                    <div className="title0">
                    Save money and
                   
                    get rich
                    </div>
                    <div className="subt0">
                    Save money wisely and pave your way to prosperity. Discover the art of accumulation, where every saved penny is a step closer to wealth. Unlock the secrets to <span>financial success</span>.
                    </div>
                </div>

            </div>
            <img src="./src/assets/photo/bf of cards.svg" alt="" className='bg-of-card' />
        </>
    )
}
