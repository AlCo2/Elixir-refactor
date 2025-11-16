import { NavUser } from "@/components/nav-user";
import { UserMenuContent } from "@/components/user-menu-content";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

export default function NavbarLayout({children}: PropsWithChildren) {
    
    const { auth } = usePage<SharedData>().props;

    return (
        <div>
           <nav className={'max-sm:hidden flex justify-between text-black items-center h-12'}>
                <a href='/' className='flex items-center ml-10'>
                    <p className="text-xl font-black duration-300">Elixir</p>
                </a>
                <ul className='flex gap-10 items-center font-semibold'>
                    <li><a className={`duration-300`} href="/">Home</a></li>
                    <li><a className={`duration-300`}  href="/store">Parfumes</a></li>
                    <li><a className={`duration-300`} href="/store/woman">Woman</a></li>
                    <li><a className={`duration-300`} href="/store/man">Man</a></li>
                </ul>
                <ul className='flex gap-2'>
                    User
                    Fav
                    Cart
                </ul>
            </nav>
            {children}
        </div>
    );
}
