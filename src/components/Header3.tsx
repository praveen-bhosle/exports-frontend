import React from 'react';

export const Header3 = ({ quality, setQuality }: { quality: string | null, setQuality: React.Dispatch<React.SetStateAction<string | null>> }) => {

    const baseClasses = 'flex flex-col items-center px-4 py-2 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md';
    const activeClasses = 'bg-white text-black font-semibold ring-2 ring-indigo-500';
    const inactiveClasses = 'bg-zinc-800 text-white';

    return (
        <div className='flex justify-center gap-4 w-full p-4 bg-transparent'>
            <button
                className={`${baseClasses} ${quality === 'handpicked' ? activeClasses : inactiveClasses}`}
                onClick={() => setQuality('handpicked')}
            >
                <div className='text-3xl font-extrabold'>H</div>
                <div className='text-xs mt-1'>Handpicked</div>
            </button>
            <button
                className={`${baseClasses} ${quality === 'semi-handpicked' ? activeClasses : inactiveClasses}`}
                onClick={() => setQuality('semi-handpicked')}
            >
                <div className='text-3xl font-extrabold'>SH</div>
                <div className='text-xs mt-1'>Semi Handpicked</div>
            </button>
            <button
                className={`${baseClasses} ${quality === 'machine-picked' ? activeClasses : inactiveClasses}`}
                onClick={() => setQuality('machine-picked')}
            >
                <div className='text-3xl font-extrabold'>MP</div>
                <div className='text-xs mt-1'>Machine Picked</div>
            </button>
        </div>
    );
};