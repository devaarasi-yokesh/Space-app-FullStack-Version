import React from 'react'

const MoonPage = () => {
  return (
    <div>
      <section id="allmoon_container">
               <h1>Moons</h1>
            <div id="all_moon">
               <div  class="m">Mercury</div>
               <div id="ven" class="m">Venus</div>
               <div id="ear" class="m">Earth</div>
               <div id="mar" class="m">Mars</div>
               <div id="jup" class="m">Jupiter</div>
               <div id="sat" class="m">Saturn</div>
               <div id="ura" class="m">Uranus</div>
               <div id="nep" class="m">Neptune</div>
            </div>
            <div class="moon_img">
                <img src="Images/Mercury.png" alt="" width="320px" height="320px" id="mer"/>
                <p id="moon_count">Moons : 0</p>
            </div>
            <i class="fa-solid fa-angles-down" id="down_arrow"></i>
    </section>
    </div>
  )
}

export default MoonPage
