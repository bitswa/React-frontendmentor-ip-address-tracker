import { Info } from "./Info";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

export function Main({ data }) {
  return (
    <div className="relative flex justify-center bg-gray-400">
      {data?.map((address) => {
        const { region, timezone, country } = address.location;

        return (
          <MapContainer
            center={[51.505, -0.09]}
            zoom={17}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <main className="absolute top-0 translate-y-[-30px] p-6 w-[90vw] flex flex-col items-center justify-between text-center gap-3 bg-white rounded-xl sm:flex-row">
              <Info title={"ip address"} subtitle={address.ip} />
              <Info title={"location"} subtitle={`${region}, ${country}`} />
              <Info title={"timezone"} subtitle={`UTC ${timezone}`} />
              <Info title={"ISP"} subtitle={address.isp} />
            </main>
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        );
      })}
    </div>
  );
}
