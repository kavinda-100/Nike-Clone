import React from 'react'

function Button({label, imgUrl , backgroundColor,borderColor, textColor, fullWidth}) {

  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'}`}>
        {label}
        { imgUrl && 
        <img src={imgUrl} alt={imgUrl}
            className='ml-2 rounded-full'
            width={20}
            height={20}
        />
        }
    </button>
  )
}

export default Button