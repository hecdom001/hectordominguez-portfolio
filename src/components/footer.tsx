export default function Footer(){
    return (
        <footer className="border-t border-border/40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
                <span>hectordominguez.dev</span>
                <span>© {new Date().getFullYear()} Hector Dominguez</span>
            </div>
        </footer>
    );
}