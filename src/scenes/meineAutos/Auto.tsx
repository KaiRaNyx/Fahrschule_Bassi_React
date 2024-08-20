type Props = {
    name: string;
    ps?: string;
    description: string;
    image: string;
}

const Auto = ({ name, ps, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[300px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration500 hover:opacity-90`;

    return (<li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{ps}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img alt={`${image}`} src={image} />
    </li>
    );
}

export default Auto