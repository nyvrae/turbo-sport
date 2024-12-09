import React from 'react'

interface BuyTicketBtnProps {
    text: string; // Текст кнопки
    onClick?: () => void; // Обработчик клика
    className?: string; // Дополнительные стили
}


const BuyTicketBtn: React.FC<BuyTicketBtnProps> = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} rounded-full bg-blue button_fs w-full h-[50px] flex items-center justify-center text-[#fff]  hover:text-[#000] hover:bg-green hover:stroke-[#000]`}>
            {text}
        </button>
    )
}

export default BuyTicketBtn
