import { Text } from "thon-ui";

export default function MainFooter() {
    const linkClassName = 'text-gray-500 hover:text-gray-800 transition-all duration 200ms ease-in-out'

    return (
        <footer className="lg:flex-row flex flex-col justify-between items-center pt-4 border-t border-solid border-t-gray-200 mt-12 w-full lg:w-[40rem]">
            <div className="flex flex-col lg:items-start items-center">
                <Text className="text-gray-800 bold pb-2 lg:pb-0">Oper</Text>
                <Text variant="xs" className="text-gray-500 pb-2 lg:pb-0">contato@operdata.com.br</Text>
            </div>
            <div>
                <ul className="flex flex-col lg:flex-row gap-2.5 pb-2 lg:pb-0">
                    <li><a href="https://www.linkedin.com/company/operdatatalkers" target="_blank" rel="noopener noreferrer" className={linkClassName}>LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/operdatatalkers" target="_blank" rel="noopener noreferrer" className={linkClassName}>Facebook</a></li>
                </ul>
            </div>
            <div>
                <Text><a href="https://github.com/jeffersonrpm" target="_blank" rel="noopener noreferrer" className={linkClassName}>Dev. Jefferson Martines</a></Text>
            </div>
        </footer>
    );
}