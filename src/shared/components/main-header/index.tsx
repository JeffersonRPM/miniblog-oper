import Image from "next/image";
import logo from "./assets/img/logo-oper.png";
import "./assets/css/style.css";
import { Text } from "thon-ui";
import Link from "next/link";

function NavigatorItem({ href, children }: { href: string, children: React.ReactNode }) {
    return <Link href={href}
        className="py-2 px-3 bg-white rounded-md hover:bg-gray-200 transition duration-200 ease-in-out">
        <Text variant="base" className="font-extrabold">{children}</Text>
    </Link>
}

export default function MainHeader() {
    return (
        <header className="logo-preto flex flex-col justify-center items-center lg:h-screen reelative lg:fixed lg:w-[34.25rem] left-0 top-0 pt-8 pb-6 px-7 lg:pt-0 lg:pb-0">
            <div className="bg-logo flex flex-col justify-center items-center">
                <Image src={logo} alt="logo da empresa oper data" className="w-[6.8rem] h-[5.5rem]" />
                <div className="w-full lg:w-[20rem] mt-6 lg:mt-8">
                    <Text as="p" variant="sm" className="text-gray-800 text-justify">
                        A Oper oferece soluções em data science & analytics com foco na criação de produtos de dados para responder perguntas de negócios e orientar a tomada de decisão.
                    </Text>
                </div>
            </div>

            <nav className="w-full lg:w-[20rem] mt-6 flex justify-center ">
                <div className="grid grid-cols-2 gap-2 ">
                    <NavigatorItem href="/">Home</NavigatorItem>
                    <NavigatorItem href="/blog">&nbsp;Blog</NavigatorItem>
                </div>
            </nav>
        </header>
    );
}