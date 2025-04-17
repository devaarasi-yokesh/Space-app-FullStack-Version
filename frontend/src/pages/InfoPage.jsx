import React from 'react'

const InfoPage = () => {
  return (
    <div>
       <h1 id="sat_title">Satelite</h1>
        <div id="satelite_exp">
            <p>A satellite is an object that moves around a larger object. Earth is a satellite because it moves around the sun. The moon is a satellite because it moves around Earth. 
             There are two types of satellites: Natural and Artificial</p>
        </div>
        <div id="line2"></div>
        <div id="type_satelite">
            <div id="nat_sat" class="sat_types">
                <h3>Natural Satelites</h3>
                <p>A satellite is anything that orbits around a larger object.
                    A natural satellite is any celestial body in space that orbits around a larger body. 
                    Moons are called natural satellites because they orbit planets.
                </p>
            </div>
            
            <div id="art_sat" class="sat_types">
                <h3>Artificial Satelites</h3>
                <p>An artificial satellite is a man-made body placed in orbit round the earth or 
                    another planet in order to collect information about it or for communication purposes.
                </p>            
            </div>
        </div>
    </div>
  )
}

export default InfoPage
