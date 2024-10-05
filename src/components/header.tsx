import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '/public/steam-logo-white.svg';
import gameStoreIcon from '/public/game-store.svg';
import libraryIcon from '/public/Library.svg';
import communityIcon from '/public/community.svg';
import friendsIcon from '/public/Friends.svg';
import settingsIcon from '/public/Settings.svg';
import helpIcon from '/public/Help.svg';
import { GridHeader } from './gridHeader';

export default function Header() {
    return (
        <header className='fixed left-0 top-0 h-full w-60'>
            <nav className='flex flex-col justify-between h-full m-5'>
                <figure className='flex gap-2 items-center'>
                    <Image 
                        src={LogoImg}
                        alt="Logo"
                        className='w-8'
                    />
                    <h2 className='text-xl'>STEAM</h2>
                </figure>
                <div className='flex flex-col justify-between h-full'>
                    <ul className='mb-auto mt-10 space-y-4'>
                        <GridHeader>
                            <Image 
                                src={gameStoreIcon}
                                alt="Game Store Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Game Store</Link>
                        </GridHeader>
                        <GridHeader>
                            <Image 
                                src={libraryIcon}
                                alt="Library Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Library</Link>
                        </GridHeader>
                        <GridHeader>
                            <Image 
                                src={communityIcon}
                                alt="Community Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Community</Link>
                        </GridHeader>
                        <GridHeader>
                            <Image 
                                src={friendsIcon}
                                alt="Friends Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Friends</Link>
                        </GridHeader>
                    </ul>
                    <ul className='mt-auto mb-10 space-y-4'>
                        <GridHeader>
                            <Image 
                                src={settingsIcon}
                                alt="Settings Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Settings</Link>
                        </GridHeader>
                        <GridHeader>
                            <Image 
                                src={helpIcon}
                                alt="Help Icon"
                                className='w-7'
                            />
                            <Link href="#" className="text-white">Help</Link>
                        </GridHeader>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
