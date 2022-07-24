export function Main({ data }) {
  return (
    <div className="text-center">
      {data?.map((address) => {
        const {region, timezone,country} = address.location
        return (
          <main className="">
            <div>
              <h4>IP ADDRESS</h4>
              <span>{address.ip}</span>
            </div>
            <div>
              <h4>LOCATION</h4>
              <span>{region}, {country}</span>
            </div>
            <div>
              <h4>TIMEZONE</h4>
              <span>UTC {timezone}</span>
            </div>
            <div>
              <h4>ISP</h4>
              <span>{address.isp}</span>
            </div>
          </main>
        );
      })}
    </div>
  );
}
