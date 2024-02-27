import {useEffect} from 'react'
import './taste.css'

export default function Taste() {
    useEffect(() => {
        const rolling = document.querySelectorAll('.rolling-pin');        
        const checkBox = (elements) => {
          const trigger = window.innerHeight / 5 * 4;
    
          elements.forEach((element) => {
            const topOfBox = element.getBoundingClientRect().top;
    
            if (topOfBox < trigger) {
              element.classList.add('show');
            } else {
              element.classList.remove('show');
            }
          });
        };
    
        const handleScroll = () => {
          checkBox(rolling);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <>
    <div className="taste-container">
    <div className="taste-box">
        
        <div className="text-taste">
            <div className="title-taste">
            Неповторимый вкус
                {/* <div className="signature">
                    <img src="./src/assets/pictures/signature.svg" alt="" />
                </div> */}
            </div>
            <div className="text-taste">
                <div className="text-taste1">
                Попробуй нашу выпечку и ты обязательно влюбишься!
Её любят как взрослые так и дети,мы позаботились о ваших предпочтениях и о вашем здоровье ,по этому у нас есть без глютеновая выпечка и фитнес багеты!                </div>
                <div className="text-taste2">
                Мы развиваемся с каждым днем ,наш персонал часто проходят курсы повышения квалификации,мы самостоятельно выбираем лучшие компоненты для выпечки со всего мира,поэтому наша пекарня и наше обслуживание на высшем уровне!                </div>
            </div>
        </div>

        <div className="img-taste">
<img src="./src/assets/pictures/img-taste.svg" alt="" />
        </div>
    </div>
    </div>
    <div className="rolling-pin">
        <img src="./src/assets/pictures/rolling pin.svg" alt="" />
    </div>
    <div className="dostoinstva">
        <img src="./src/assets/pictures/Достоинства.svg" alt="" className='dost' />
    </div>
    </>
  )
}
