import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold">My Blog</span>
          </Link>
          <div>
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin/editor">New Post</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow p-4">
        {children}
      </main>
      <footer className="bg-slate-800 text-white p-4">
        <div className="container mx-auto text-center">
          © 2024 My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
