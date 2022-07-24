import { Info } from "./Info";

export function Main({ data }) {
  return (
    <div className="relative flex justify-center bg-gray-400">
      {data?.map((address) => {
        const { region, timezone, country } = address.location;
        return (
          <main className="absolute top-0 translate-y-[-110px] p-4 w-[90vw] flex flex-col items-center text-center gap-3 bg-white rounded-xl sm:flex-row">
            <Info title={"ip address"} subtitle={address.ip} />
            <Info title={"location"} subtitle={`${region}, ${country}`} />
            <Info title={"timezone"} subtitle={`UTC ${timezone}`} />
            <Info title={"ISP"} subtitle={address.isp} />
          </main>
        );
      })}
    </div>
  );
}
