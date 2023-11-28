import React from 'react'
import './Main.css'
import './Header_buttons.css'





export default function Main() {
    return (


        <>
           <header>
      <div>
        <div className='navbar'>
          
            <img src="./фото/logo.png" alt="" className='logo'/>
    <div className='buttons'>
            <button className='header-button' id='homeBtn'> Home</button>
            <button className='header-button'> Cook</button>
            <button className='header-button'> Categories</button>
            <button className='header-button'> About us</button>
            <button className='header-button'> Comments</button>
            <img src='./фото/image 8person.png' className='person'></img>
            </div>
            <hr className="line2" />   
     <div className= 'rectangle' ></div>   
         
          
        </div>
      </div>
      <div className='presentation'> </div>
    </header>
            <div className="main-info">
                <div className="title">
                    <div className="subtitle">
                        Explore the World of Flavors!
                    </div>
                    <div className="main-title">
                        Find and <span className="highlighted-word">Cook</span>
                    </div>
                </div>

                <div className="malina">
                    <img src="./фото/malina.png" alt="" width="280px" />
                </div>

                <a href="main.html" className="button-go_to_cooking">Go to cooking</a>

                <div className="bg-fruits">
                    <img src="./фото/Frame 3.png" alt="" width="670px" className='berries' />
                </div>
                <div className='bg-fruits2'>
                    <img src="./фото/Frame 4.png" alt="600px" className='fruit' />
                </div>

                <div className="photo_of_food">
                    <div className="polygon">
                        <img src="./фото/Polygon 1 (1).png" alt="" />
                    </div>
                    <div className="food">
                        <img src="./фото/image 9.png" alt="" width="1050px" />
                    </div>
                </div>
                <div className="rect"></div>

                <div className="cards">

                    <div className="card1">
                        <img className="pon" src="./фото/frying pon 1.png" alt="" />
                        <p className="title-card1">For those who don't know how to cook</p>
                        <hr className="line" />
                        <p className="subtitle-card1">You can use the products you <br /> to cook delicious dishes. We <br />will show
                            you recipes and<br /> cooking steps. Large extensive<br /> selection from Western to Eastern
                            <br />cuisine. Even a child will <br />understand.</p>
                    </div>
                    <div className="card2">
                        <img className="laptop" src="./фото/devices 1.png" alt="" />
                        <p className="title-card2">Сonvenient site and always at hand</p>
                        <hr className="line3" />
                        <p className="subtitle-card2">Our website is very functional and <br />easy to use. Also, it will always be<br /> next to you in your devices.</p>

                    </div>
                    <div className="card3">
                        <img className="meal" src="./фото/american-fried-rice 1.png" alt="" />
                        <p className="title-card3">Eat with benefit and enjoyment</p>
                        <hr className="line4" />
                        <p className="subtitle-card3">The dishes you can choose will<br /> correspond to your preferences<br /> and follow your contraindications.<br /> <span>Bon appetit!</span></p>
                    </div>

                </div>
                <img src='./фото/Frame 6.png' className='bg-photo-of-cards'></img>

                < div className='categories'>
                    <div className='zagol'>
                        <div className='title-of-categories'>
                            Categories
                        </div>
                        <div className='subtitle-of-categories'>
                            food for all time
                        </div>
                    </div>
                    <hr className='line5'></hr>
                    <img src="./фото/image 25.png" alt="" className='raspberry' />

                </div>
                <div className='container'>
                    <a href='http://localhost:5174'>
                        <div className="galerry-wrap">
                            <img src='./фото/button back.png' id='backBtn'></img>
                            < div className="galerry" >
                                <div>
                                    <div className="img-box"><h3>Breakfast</h3></div>
                                    <div className="img-box"><h3>Lunch</h3></div>
                                    <div className="img-box"><h3>Dinner</h3></div>
                                    <div className="img-box"><h3>Dessert</h3></div>
                                    <div className="img-box"><h3>Drinks</h3></div>
                                </div>


                            </div>
                            <img src='./фото/button next.png' id='nextBtn'></img>
                        </div>
                    </a>
                </div>
                <div className='our-team'>
                    <div className="zagol-of-team">
                        <div className="title-of-team">
                            Meet our team.
                        </div>
                        <div className="subtitle-of-team">
                            your heroes who support you
                            cook
                        </div>
                    </div>
                    <div className="bg-of-team">
                        <img src="./фото/Frame 8.png" alt="" />
                    </div>
                    <div className="dudes">
                        <img src="./фото/Tilekmat.png" alt="" className='Tilekmat'></img>
                        <img src="./фото/Myrza.png" alt="" className='Myrza'></img>
                        <img src="./фото/Kutmansher.png" alt="" className='Kutmansher'></img>

                    </div>
                </div>
                <div className='testimonials'>
                    <div className="zagol-of-comments">
                        <div className="title-of-comments">
                            Testimonials
                        </div>
                        <div className="subtitle-of-comments">
                            in case you were wondering

                        </div>
                    </div>
                    <div className="kommenty">
                    <div className="first-comment">
                        <div className="box1">
                            <img src="./фото/massage.png" alt="" className='message' />
                        <div className="name">
                            <img src="./фото/profile-user 1.png" alt="" className='profile' />
                          <div className="imya"> <div className="user">Username</div>
                            <div className="name-of-user">Name</div></div> 
                            </div> 
                        </div>
                    </div>
                    <div className="first-comment">
                        <div className="box1">
                            <img src="./фото/massage.png" alt="" className='message' />
                        <div className="name">
                            <img src="./фото/profile-user 1.png" alt="" className='profile' />
                          <div className="imya"> <div className="user">Username</div>
                            <div className="name-of-user">Name</div></div> 
                            </div> 
                        </div>
                    </div>
                    <div className="first-comment">
                        <div className="box1">
                            <img src="./фото/massage.png" alt="" className='message' />
                        <div className="name">
                            <img src="./фото/profile-user 1.png" alt="" className='profile' />
                          <div className="imya"> <div className="user">Username</div>
                            <div className="name-of-user">Name</div></div> 
                            </div> 
                        </div>
                    </div>
                    </div>
                    <div className="bg-of-comments">
                        <img src="./фото/Frame 9.png" alt="" className='width'/>
                    </div>
                      <img src="./фото/image 28.png" alt="" className='lemon'/>

                </div>
            </div>
            


            {/* <div className="galerry-wrap">
                           
                            <div className='galerry1'>
                            <div>
                                <img src='./фото/image 10.png' className='foto'></img>
                                <img src='./фото/image 14.png' className='foto'></img>
                                <img src='./фото/image 13.png' className='foto'></img>
                                <img src='./фото/image 15.png' className='foto'></img>
                                <img src='./фото/image 26.png' className='foto'></img>
                            </div>
                            <div>
                                <img src='./фото/image 10.png' className='foto' ></img>
                                <img src='./фото/image 14.png' className='foto'></img>
                                <img src='./фото/image 13.png' className='foto'></img>
                                <img src='./фото/image 15.png' className='foto'></img>
                                <img src='./фото/image 26.png' className='foto'></img>
                            </div>
                        </div>
                            <img src='./фото/button next.png' id='nextBtn'></img>
                        </div> */}



        </>

    )
}
