export function Header({ setIp, handleSubmit }) {
  return (
    <div className="bg-blue-600 flex flex-col items-center">
      <h1 className="py-6 text-xl text-white">IP Address Tracker</h1>
      <form
        className="rounded-xl overflow-hidden flex w-[90%]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="p-2 w-full text-lg px-6"
          type="text"
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
    </div>
  );
}
