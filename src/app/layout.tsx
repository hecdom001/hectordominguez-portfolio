import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "hectordominguez.dev",
    description: "Portfolio — building reliable backends & delightful apps",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background text-foreground antialiased grain">
        <div id="spot" className="fixed inset-0 ring-spot pointer-events-none transition-[background] duration-100" />
        {children}
        </body>
        </html>
    );

    {/* Mouse-driven spotlight (client side) */}
    <script
        dangerouslySetInnerHTML={{
            __html: `
      (function(){
        const spot = document.getElementById('spot');
        if(!spot) return;
        window.addEventListener('pointermove', (e)=>{
          const x = (e.clientX/window.innerWidth)*100;
          const y = (e.clientY/window.innerHeight)*100;
          spot.style.setProperty('--mx', x + '%');
          spot.style.setProperty('--my', y + '%');
        }, {passive:true});
      })();
    `,
        }}
    />

}