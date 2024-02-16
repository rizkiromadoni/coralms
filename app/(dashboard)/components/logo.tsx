import Image from "next/image"

const Logo = () => {
    return <Image
        height={90}
        width={90}
        alt="logo"
        src="/next.svg"
    />
}

export default Logo