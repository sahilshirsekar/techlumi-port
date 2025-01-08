export function Hero() {
  return (
    <div className="relative items-center justify-center text-center p-64">
      <h1 className="text-8xl font-bold ">
        <span
          className="inline-block animate-fade-in-up text-gray-700 text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to 
        </span>
        <br></br>
        {/* <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}></span>{' '} */}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>TechLuminix</span>
      </h1>
      <h4 className="text-4xl font-semibold">
        <span
          className="inline-block animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We are the architects of your digital dreams.
        </span>{" "}
      </h4>
    </div>
  );
}
