function Franqueado(props: {title:string, subtitle:string}) {
    return (
        <a href="#" class="fixed bottom-6 left-6 z-40" aria-label="Seja um franqueado">
            <button class="block text-center text-[18px] bg-[#222] rounded-[20px] text-white p-[10px] shadow-lg" aria-label="Seja um franqueado">
                <span class="text-yellow-500">{props.title} </span><span><strong>{props.subtitle}</strong></span>
            </button>
        </a>
    )
}

export default Franqueado;