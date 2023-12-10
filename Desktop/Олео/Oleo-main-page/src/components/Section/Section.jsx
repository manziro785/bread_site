import React from 'react'
import './Section.css'

export default function Section() {

const boxes = document.querySelectorAll('.zagol');
const boxes2 = document.querySelectorAll('.zagol-of-team');
const boxes3 = document.querySelectorAll('.zagol-of-comments');

const checkBoxes = (elements) => {
    const trigger = window.innerHeight / 5 * 4;
    for (const box of elements) {
        const topOfBox = box.getBoundingClientRect().top;
        if (topOfBox < trigger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
};

const checkBoxes1 = () => {
    checkBoxes(boxes);
};

const checkBoxes2 = () => {
    checkBoxes(boxes2);
};

const checkBoxes3 = () => {
  checkBoxes(boxes3);
};


window.addEventListener('scroll', () => {
    checkBoxes1();
    checkBoxes2();
    checkBoxes3();

});
  return (
    <>

      <div className="section1">
        <div className="banner">
          <div className="banner-title">
            <div>
                <div className="zaz">
              <div className="subtitle">
                Explore the World of Flavors!
              </div>
              <div className="title">
                Find and <span>Cook</span>
              </div>
              <div className="button">
                Go to cooking
              </div>
            </div>
            <div className="bg-of-banner">
              <img src="./src/assets/фото/Frame 3.png" alt="" className='mallina'  />
            </div>
            </div>
          </div>

          <div className="dish">
            <div className="banner-photo">
              <div className="food-photo">
                <img src="./src/assets/фото/image 9.png" alt="" className='food' />
              </div>
            </div>
            <div className='berries'>
              <img src="./src/assets/фото/Frame 4.png" alt="" className='berries-1' />
            </div>
          </div>
        </div>
      </div>
      
      <div className="section2">
        <img src="./src/assets/фото/image 22.png" alt="" className='rosberry' />
      <div className="cards">

<div className="card1">
    <img className="pon" src="./src/assets/фото/frying pon 1.png" alt="" />
    <p className="title-card1">For those who don't know how to cook</p>
    <p className="subtitle-card1">You can use the products you <br /> to cook delicious dishes. We <br />will show
        you recipes and<br /> cooking steps. Large extensive<br /> selection from Western to Eastern
        <br />cuisine. Even a child will <br />understand.</p>
</div>
<div className="card2">
    <img className="laptop" src="./src/assets/фото/devices 1.png" alt="" />
    <p className="title-card2">Сonvenient site and always at hand</p>
 
    <p className="subtitle-card2">Our website is very functional and <br />easy to use. Also, it will always be<br /> next to you in your devices.</p>

</div>
<div className="card3">
    <img className="meal" src="./src/assets/фото/american-fried-rice 1.png" alt="" />
    <p className="title-card3">Eat with benefit and enjoyment</p>
    <p className="subtitle-card3">The dishes you can choose will<br /> correspond to your preferences<br /> and follow your contraindications.<br /> <span>Bon appetit!</span></p>
</div>

</div>
      </div>
      <div className="section3">
      <div className='categories'>
        <div className="zagol-of-button">
                    <div className='zagol'>

                        <div className='title-of-categories'>
                            Categories
                        </div>
                        <div className='subtitle-of-categories'>
                            food for all time
                        </div>
                    </div>
                  
                    <a href="" className='button-of-categories'>More</a>
                    
                    </div>
                   
                    <img src="./src/assets/фото/image 25.png" alt="" className='raspberry' />

                <div/>
                <div className='container'>
                    <a href='http://localhost:5174'>
                        <div className="galerry-wrap">
                
                            < div className="galerry" >
                                <div>
                                    <div className="img-box"><h3>Breakfast</h3></div>
                                    <div className="img-box"><h3>Lunch</h3></div>
                                    <div className="img-box"><h3>Dinner</h3></div>
                                    <div className="img-box"><h3>Dessert</h3></div>
                                    <div className="img-box"><h3>Drinks</h3></div>
                                </div>


                            </div>
                        </div>
                    </a>
                </div>
                </div>
      </div>
      <div className="section4">
      <div className='our-team'>
                    <div className="zagol-of-team" >
                        <div className="title-of-team">
                            Meet our team.
                        </div>
                        <div className="subtitle-of-team">
                            your heroes who support you
                            cook
                        </div>
                    </div>
                    <div className="bg-of-team">
                        <img src="./src/assets/фото/Frame 8.png" alt="" />
                    </div>
                    <div className="dudes">
                        <img src="./src/assets/фото/Tilekmat.png" alt="" className='Tilekmat'></img>
                        <img src="./src/assets/фото/Myrza.png" alt="" className='Myrza'></img>
                        <img src="./src/assets/фото/Kutmansher.png" alt="" className='Kutmansher'></img>

                    </div>
                </div>
      </div>
      <div className="section5">
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
                                <img src="./src/assets/фото/massage.png" alt="" className='message' />
                                <div className="name">
                                    <img src="./src/assets/фото/profile-user 1.png" alt="" className='profile' />
                                    <div className="imya"> <div className="user">Username</div>
                                        <div className="name-of-user">Name</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="first-comment">
                            <div className="box1">
                                <img src="./src/assets/фото/massage.png" alt="" className='message' />
                                <div className="name">
                                    <img src="./src/assets/фото/profile-user 1.png" alt="" className='profile' />
                                    <div className="imya"> <div className="user">Username</div>
                                        <div className="name-of-user">Name</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="first-comment">
                            <div className="box1">
                                <img src="./src/assets/фото/massage.png" alt="" className='message' />
                                <div className="name">
                                    <img src="../src/assets/фото/profile-user 1.png" alt="" className='profile' />
                                    <div className="imya"> <div className="user">Username</div>
                                        <div className="name-of-user">Name</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-of-comments">
                        <img src="./pages/фото/Frame 9.png" alt="" className='width' />
                    </div> */}
                    {/* <img src="./pages/фото/image 28.png" alt="" className='lemon' /> */}

                </div>
                </div>
     
    </>
  )
}
