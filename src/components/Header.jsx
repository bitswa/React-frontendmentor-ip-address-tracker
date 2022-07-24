export function Header() {
  return (
    <div className="bg-blue-600 flex flex-col items-center">
      <h1 className="py-6 text-lg">IP Address Tracker</h1>
      <form className="rounded-xl overflow-hidden flex w-[80%]">
        <input className="p-2 w-full text-lg px-6 " type="text" />
        <button className="p-5 bg-black " type="submit">
          <img className="self-center" src="./images/icon-arrow.svg" alt="" />
        </button>
      </form>
    </div>
  );
}
