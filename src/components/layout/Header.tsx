import React from 'react';
import { Twitch, Youtube, Twitter } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-vaporwave-pink font-bold text-xl">Ramune Live</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-vaporwave-pink transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-vaporwave-pink transition-colors">Services</a>
            <a href="#gallery" className="text-white hover:text-vaporwave-pink transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-vaporwave-pink transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <SocialLink href="https://twitch.tv" icon={<Twitch size={20} />} />
            <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-full",
        "bg-white/10 text-white hover:bg-white/20 transition-colors"
      )}
    >
      {icon}
    </a>
  );
}