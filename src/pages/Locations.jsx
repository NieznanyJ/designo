import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'


const LocationPin = ({ text }) => <img src={text} alt="" />;

function Locations() {


  const canadaPosition = [43.644113347855985, -79.39455012883595]
  const australiaPosition = [-30.32919013964195, 149.78831500185166]
  const unitedKingdomPosition = [53.710370575906964, -1.3417278423280876]

  

  return (
    <section className='locations'>


      <div className="single-location-container">
        <MapContainer className='locations-map' center={canadaPosition} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={canadaPosition}>

          </Marker>
        </MapContainer>


        <div className="location-page-info">
          <h2 className='loaction-page-location-name'>Canada</h2>
          <div className="contact-info-container locations-page-contact-info">
            <div className="street-info">
              <p className='contact-text'>Designo Central Office</p>
              <p className='streen-name'>
                3886 Wellington Street</p>
              <p className='city-name'>
                Toronto, Ontario M9C 3/5
              </p>
            </div>
            <div className="phone-info">
              <p className='contact-text'>Contact Us (Central Office)</p>
              <p className='phone-nr'>P : +1 253-863-8967</p>
              <p className='email'>M : contact@designo.co</p>
            </div>
          </div>
        </div>
      </div>

      <div className="single-location-container">
        <MapContainer className='locations-map' center={australiaPosition} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={australiaPosition}>

          </Marker>
        </MapContainer>


        <div className="location-page-info">
          <h2 className='loaction-page-location-name'>Australia</h2>
          <div className="contact-info-container locations-page-contact-info">
            <div className="street-info">
              <p className='contact-text'>Designo AU Office</p>
              <p className='streen-name'>
                19 Balonne Street</p>
              <p className='city-name'>
                New South Wales 2443
              </p>
            </div>
            <div className="phone-info">
              <p className='contact-text'>Contact </p>
              <p className='phone-nr'>P : (02) 6720 9092</p>
              <p className='email'>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className="single-location-container">
        <MapContainer className='locations-map' center={unitedKingdomPosition} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={unitedKingdomPosition}>

          </Marker>
        </MapContainer>


        <div className="location-page-info">
          <h2 className='loaction-page-location-name'>United Kingdom</h2>
          <div className="contact-info-container locations-page-contact-info">
            <div className="street-info">
              <p className='contact-text'>Designo UK Office</p>
              <p className='streen-name'>
              13  Colorado Way</p>
              <p className='city-name'>
              Rhyd-y-fro SA8 9GA
              </p>
            </div>
            <div className="phone-info">
              <p className='contact-text'>Contact</p>
              <p className='phone-nr'>P : 078 3115 1400</p>
              <p className='email'>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
      </div>

      





    </section>






  )
}

export default Locations