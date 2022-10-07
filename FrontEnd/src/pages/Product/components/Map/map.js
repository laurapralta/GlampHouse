import { Container } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styled from './styles.module.scss';


delete L.Icon.Default.prototype._getIconUrl;

L.control.zoom({
  zoomOutTitle: "10px"
})

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export function Map({ latitude, longitude }) {
  console.log("latitude", latitude)

  return (
    <div fluid className="bg-white py-4">


        <Container fluid className="max-width-1180">
          <h2 className="ms-4 fw-bold border-bottom border-dark border-1 fs-5 pt-3 pb-0">¿Cómo llegar?</h2>
        </Container>


        <Container fluid className={styled.mapa}>
          
          <MapContainer center={[latitude, longitude]} zoom={7} style={{height: 400, width: 1000}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              
            </Marker>
          </MapContainer>    
        </Container>    

    </div>
    
  )
}



