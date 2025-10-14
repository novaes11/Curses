const Page = () => {
  return (
    <div className=" rounded-2xl p-2 container mx-auto bg-black md:bg-white md:text-2xl md:text-black">
      Hello , Next.js!<br/>

      Funcionalidade do container:<br/>
      NONE = width: 100%<br/>
      SM (small) = max-width: 640px<br/>
      MD (medium) = max-width: 768px<br/>
      LG (large) = max-width: 1024px<br/>
      XL (extra large) = max-width: 1280px<br/>
      2XL (2 extra large) = max-width: 1536px<br/>

      Tailwind é Mobile First, ou seja, a estilização padrão é para dispositivos móveis.<br/>
      Para estilizar para dispositivos maiores, usamos os prefixos como "md:", "lg:", "xl:", etc.<br/>
      No exemplo acima, o fundo é azul escuro por padrão (dispositivos móveis) e muda para azul claro em telas médias (md) ou maiores.

      <div className="flex gap-2 mt-4 justify-center">
        <div className="rounded-md bg-blue-500 text-white p-4">01</div>
        <div className="rounded-md bg-blue-500 text-white p-4">02</div>
        <div className="rounded-md bg-blue-500 text-white p-4">03</div>
        <div className="rounded-md bg-blue-500 text-white p-4">04</div>
      </div>
    </div>
  );
}

export default Page;
 
