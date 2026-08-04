import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Collections', href: '/collections' },
        { name: 'About', href: '/about' },
    ];

    return (
        <footer className="h-[70vh] w-full bg-[#ffe49d] text-black">
            <div className="h-full w-full flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1">

                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-center m-4">
                        Agency
                    </h3>
                    <div>
                        {links.map((link) => (
                            <p key={link.href} onClick={() => navigate(link.href)}
                                className="text-center text-lg hover:text-[#d4b86f] cursor-pointer transition-colors">
                                <a href={link.href}>{link.name}</a>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex-1">

                </div>
            </div>
        </footer>
    );
};

export default Footer;
