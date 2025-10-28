import PreviewCard from '@/components/PreviewCard';
import Selector from '@/components/Selector';
import ActionButtons from '@/components/ActionButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="font-meme text-5xl md:text-7xl font-bold text-black mb-2 drop-shadow-lg transform -rotate-1">
            🦆 DOLAN PFP MAKER 🦆
          </h1>
          <p className="text-lg md:text-xl font-bold text-black drop-shadow">
            Create your own Dolan the Duck profile picture!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <PreviewCard />
            <ActionButtons />
          </div>

          <div>
            <Selector />
          </div>
        </div>

        <footer className="mt-12 text-center text-black font-bold drop-shadow">
          <p>Dolan approves this generator 🪓🦆</p>
        </footer>

        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          <a
            href="https://x.com/DolanDuckSol69"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white p-3 rounded-full border-3 border-black shadow-lg transition-transform hover:scale-110 group relative"
            title="Dolan Duck X"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Dolan Duck X
            </span>
          </a>
          
          <a
            href="https://x.com/OOCDolanDuck"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full border-3 border-black shadow-lg transition-transform hover:scale-110 group relative"
            title="Artist X Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Artist Profile
            </span>
          </a>
          
          <a
            href="https://t.me/+YuXzdVsgI3FjYTE5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full border-3 border-black shadow-lg transition-transform hover:scale-110 group relative"
            title="Telegram Community"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Telegram
            </span>
          </a>
          
          <a
            href="https://dolanduck.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full border-3 border-black shadow-lg transition-transform hover:scale-110 group relative"
            title="Official Website"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Website
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
