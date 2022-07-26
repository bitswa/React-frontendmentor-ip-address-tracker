import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Info } from "./Info";

export function Main({ data }) {
  const locationIcon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconRetinaUrl: "/images/icon-location.svg",
    popupAnchor: [-0, -0],
    iconSize: [46, 56],
  });

  return (
    <div className="relative flex justify-center bg-gray-400">
      {data?.map((address) => {
        const { region, timezone, country } = address.location;
        return (
          <main
            className="absolute z-10 top-0 translate-y-[-45px] p-6 w-[90vw] flex flex-col items-center justify-between text-center gap-3 bg-white rounded-xl sm:flex-row"
            key={address.ip}
          >
            <Info title={"ip address"} subtitle={address.ip} />
            <Info title={"location"} subtitle={`${region}, ${country}`} />
            <Info title={"timezone"} subtitle={`UTC ${timezone}`} />
            <Info title={"ISP"} subtitle={address.isp} />
          </main>
        );
      })}
      <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]} icon={locationIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
