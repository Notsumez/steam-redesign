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

export default function Header(){
    return (
        <header>
            <nav className='m-10'>
                <figure className='flex gap-2 items-center'>
                    <Image 
                        src={LogoImg}
                        alt="Logo"
                        className='w-8'
                    />
                    <h2 className='text-xl'>STEAM</h2>
                </figure>
                <ul className='mt-14'>
                    <GridHeader>
                        <Image 
                            src={gameStoreIcon}
                            alt="Game Store Icon"
                            className='w-7'
                        />
                        <Link href="#">Game Store</Link>
                    </GridHeader>
                    <GridHeader>
                        <Image 
                            src={libraryIcon}
                            alt="Library Icon"
                            className='w-7'
                        />
                        <Link href="#">Library</Link>
                    </GridHeader>
                    <GridHeader>
                        <Image 
                            src={communityIcon}
                            alt="Community Icon"
                            className='w-7'
                        />
                        <Link href="#">Community</Link>
                    </GridHeader>
                    <GridHeader>
                        <Image 
                            src={friendsIcon}
                            alt="Friends Icon"
                            className='w-7'
                        />
                        <Link href="#">Friends</Link>
                    </GridHeader>
                </ul>
                <ul className='mt-48'>
                    <GridHeader>
                        <Image 
                            src={settingsIcon}
                            alt="Settings Icon"
                            className='w-7'
                        />
                        <Link href="#">Settings</Link>
                    </GridHeader>
                    <GridHeader>
                        <Image 
                            src={helpIcon}
                            alt="Help Icon"
                            className='w-7'
                        />
                        <Link href="#">Help</Link>
                    </GridHeader>
                </ul>
            </nav>
        </header>
    )
}