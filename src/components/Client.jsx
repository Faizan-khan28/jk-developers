const clients = [
  "/client1.png",
  "/client2.png",
  "/client3.png",
  "/client4.png",
  "/client5.png",
  "/client6.png",
  "/client7.png",
];

function Clients() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="w-16 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] mb-4"></div>

        <h2 className="text-[32px] font-light">
          Meet the People
          <br />
          <span className="font-bold">We are Working With</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto mt-12 scrollbar-none">
          {clients.map((client, index) => (
            <div
              key={index}
              className="shrink-0 w-55 h-30 bg-white shadow rounded-xl flex items-center justify-center"
            >
              <img
                src={client}
                alt="client"
                className="max-w-35"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;