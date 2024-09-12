import React from 'react'

interface propType{
    nome:string,

}

function Button({nome}:propType) {
  return (
    <div className="mx-auto rounded-md p-5 h-full md:py-14 border-4 border-black w-full text-xl text-center font-semibold break-words cursor-pointer bg-white">{nome}</div>
  )
}

export default Button