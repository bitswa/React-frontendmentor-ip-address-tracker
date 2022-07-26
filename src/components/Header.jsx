export function Header({ setIp, handleSubmit }) {
  return (
    <header className="bg-header bg-cover  flex flex-col items-center">
      <h1 className="py-5 text-2xl text-white">IP Address Tracker</h1>
      <form
        className="rounded-xl overflow-hidden flex w-[90%] max-w-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="p-2 px-4 outline-none w-full text-base text-darkGray"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIp(e.target.value)}
        />
        <button className="p-5 bg-black " type="submit">
          <img
            className="self-center"
            src="./images/icon-arrow.svg"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
}
