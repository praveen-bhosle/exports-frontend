export const Header3 = ({ quality, setQuality }: { quality: string | null, setQuality: React.Dispatch<React.SetStateAction<string | null>> }) => {

    return (<div className='text-lg flex justify-center gap-2  w-[100%] '>
        <button className='rounded-2xl px-2 py-[2px] text-xs ' style={{
            background: quality === 'handpicked' ? 'white' : '#392B2C', color: quality === 'handpicked' ? 'black' : 'white'
        }} onClick={() => { setQuality('handpicked') }}    >
            <div className='text-4xl text-center font-bold'> H </div>
            <div className=''> Handpicked </div>
        </button>
        <button className='rounded-2xl  px-2 py-[2px] text-xs  '
            style={{
                background: quality === 'semi-handpicked' ? 'white' : '#392B2C', color: quality === 'semi-handpicked' ? 'black' : 'white'
            }}
            onClick={() => { setQuality('semi-handpicked') }}>
            <div className='text-4xl text-center font-bold'> SH </div>
            <div className=''> Semi Handpicked </div>
        </button>
        <button className='rounded-2xl px-2 py-[2px]  text-xs'
            style={{ background: quality === 'machine-picked' ? 'white' : '#392B2C', color: quality === 'machine-picked' ? 'black' : 'white' }}
            onClick={() => { setQuality('machine-picked') }} >
            <div className='text-4xl text-center font-bold'> MH </div>
            <div className=''> Machine Picked </div> </button>
    </div>)

}