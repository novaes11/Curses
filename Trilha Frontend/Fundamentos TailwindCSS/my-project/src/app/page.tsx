import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="flex justify-around flex-col flex-1">
        <div className="bg-yellow-100 py-2 pl-2 pr-4 border-l-4 border-l-yellow-400 text-amber-900 mx-auto">
          Você não tem mais acesso.
          <a href="" className="text-amber-900 underline ml-1">Faça o upgrade da sua conta</a>
        </div>

        <div className="bg-white p-4 rounded-md mx-auto">
          <div className="flex">
            <img className="rounded-full w-[60px] h-[60px] mb-3 cursor-pointer"/>
            <div className="ml-3 mr-10 text-lg text-gray-500">
              <p className="text-black">Rafaela Silva</p>
              Te enviou um convite!
            </div>
            
          </div>
            <div className="bg-blue-900 rounded inline-block mr-2 px-4 py-2 cursor-pointer">Aceitar</div>
            <div className="border-black border rounded inline-block mr-2 px-4 py-2 text-black cursor-pointer">Negar</div>
        </div>

        <h1 className="mx-auto flex justify-center items-center text-center bg-blue-600 w-24 h-24 p-2">
          Hello World!
        </h1> 

        <div className="mx-auto text-xl line-clamp-3 font-bold bg-red-700 w-24 truncate">
          Algum texto qualquer
        </div>

        <div className="mx-auto bg-blue-950 border-4 border-l-red-700 border-t-white border-r-green-400 border-b-yellow-300 w-24 h-24"></div>
        <input className="mx-auto w-80 outline-red-700 bg-gray-700" type="text" name="" id="" />
        <button className="mx-auto bg-blue-500 text-white rounded-md px-5 py-3 border-none">Clique aqui</button>
        <div className="mx-auto inline-block text-white rounded-md px-5 py-3 border border-blue-500 cursor-pointer">Clique aqui</div>
      </div>

      <aside className="flex-1 flex-col p-5 bg-gray-900 justiify-start">
        <span className="font-bold text-3xl block text-center pb-6">
          Sistema de Login
        </span>

        <label htmlFor="emailField">Endereço de e-mail</label>
        <input className="block w-[100%] mb-5 mt-1 bg-gray-700 rounded h-9" type="email" />

        <label htmlFor="senhaField">Senha</label>
        <input className="block w-[100%] mb-5 mt-1  bg-gray-700 rounded h-9" type="password" />

        <div className="text-center bg-yellow-500 rounded-md px-5 py-2 cursor-pointer">
          Entrar
        </div>

        <footer className="text-center pt-3 text-gray-500">
          Não é membro? <a className="underline text-yellow-500 font-bold cursor-pointer">Faça seu cadastro agora</a>
        </footer>
      </aside>
    </div>
    
      );
}

export default Page;