import { React, useState , useRef} from 'react'
import './menu.css'


export default function Menu() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

 

    const handleButtonClick1 = () => {
        setIsActive1(!isActive1);
        setIsActive2(false);
        setIsActive3(false);
    };

    const handleButtonClick2 = () => {
        setIsActive2(!isActive2);
        setIsActive1(false);
        setIsActive3(false);
    };

    const handleButtonClick3 = () => {
        setIsActive3(!isActive3);
        setIsActive1(false);
        setIsActive2(false);
    };

const galleryRef = useRef(null);

const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 300; // Измените значение смещения, чтобы подстроить под ваш макет
    }
  };

const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 300; 
    }
  };

    return (
        <>
            <div className="menu-container">
                <div className="main-title-menu">
                    <div className="title-men" id='menu'>
                        Меню
                    </div>
                    <div className="btns">

                        <div className={`btn1 ${isActive1 ? 'active' : ''}`}>
                            <img
                                src="./src/assets/pictures/bread-menu (1).svg"
                                alt=""
                                onClick={handleButtonClick1}
                                className={isActive1 ? 'img-breadd active' : 'img-breadd'}
                            />
                            <button className={`btn-munu ${isActive1 ? 'active' : ''}`} onClick={handleButtonClick1}>
                                Хлеб
                            </button>
                        </div>

                        <div className={`btn2 ${isActive2 ? 'active' : ''}`}>
                            <img
                                src="./src/assets/pictures/cruassan (1).svg"
                                alt=""
                                onClick={handleButtonClick2}
                                className={isActive2 ? 'img-breadd2 active' : 'img-breadd2'}
                            />
                            <button className={`btn-munu ${isActive2 ? 'active' : ''}`} onClick={handleButtonClick2}>
                                Круассаны
                            </button>
                        </div>

                        <div className={`btn1 ${isActive3 ? 'active' : ''}`}>
                            <img
                                src="./src/assets/pictures/pie (1).svg"
                                alt=""
                                onClick={handleButtonClick3}
                                className={isActive3 ? 'img-breadd active' : 'img-breadd'}
                            />
                            <button className={`btn-munu2 ${isActive3 ? 'active' : ''}`} onClick={handleButtonClick3}>
                                Пироги
                            </button>
                        </div>
                    </div>
                </div>
                <div className="gallery" ref={galleryRef}>
<div className='under-gall'>
<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Зерновой
        </div>
        <div className="price-cost">
        от 80 сом
        </div>
    </div>
</div>
<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Ржаной
        </div>
        <div className="price-cost">
        от 60 сом
        </div>
    </div>
</div>

<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Бородинский
        </div>
        <div className="price-cost">
        от 100 сом
        </div>
    </div>
</div>

</div>
{/* <div className='under-gall'>
<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Диетический
        </div>
        <div className="price-cost">
        от 76 сом
        </div>
    </div>
</div>
<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Ржаной
        </div>
        <div className="price-cost">
        от 30 сом
        </div>
    </div>
</div>

<div className="card">
    <img src="./src/assets/pictures/pngegg 1.svg" alt="" />
    <div className="cost">
        <div className="name-cost">
        Буханка
        </div>
        <div className="price-cost">
        от 130 сом
        </div>
    </div>
</div>

</div> */}
</div>

<div className="btns-move">
    <img src="./src/assets/pictures/Arrow 2.svg" alt=""  onClick={scrollLeft} id='leftbtn'/>
    <img src="./src/assets/pictures/roller.svg" alt=""  id='roller-menu'/>
    <img src="./src/assets/pictures/Arrow 1.svg" alt=""  onClick={scrollRight} id='rightbtn'/>

</div>
</div>
               
            
        </>
    )
}
