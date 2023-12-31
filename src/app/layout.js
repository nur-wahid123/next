import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" flex"}>
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5">
                <Image width={10} height={10} src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <a href="/" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                      <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                      <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                    </svg>
                    <span className="-mr-1 font-medium">Dashboard</span>
                  </a>
                </li>
                <li className="min-w-max">
                  <a href="/login" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                  
                    <Image width={10} height={10}  className="-ml-1 h-6 w-6" alt='oke' src="data:image/png;base64,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" />
                    <span className="group-hover:text-gray-700">Login</span>
                  </a>
                </li>
                <li className="min-w-max">
                  <a href="/register" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                    <Image width={10} height={10} alt='oke'  className="-ml-1 h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVR4nGNgQAP1QTZKbRHWXV1RNrNbw82DGEgBbeFW4VNSnB8tLfT7v6zQ7//sDPcPLaGWnfX29hzE6Gfsi3O4BNIIw4vyfP4vzPX+3xlls4ag7oogE6VZ6W4/QBqXFvj9n5/r9X9dU8j/uUXevyckON4laEBZoJnMhETH75vaIv7vnRT///aWkv9fz7X+PzY/9X9XlO1jggZMrPQQbYmy/P3lbAtYIwyfXZ71vyvB9j1BA2bW+3Atbfb/hKwZhG9tKf6/pNnvGgMxYHmrX8XbY/UoBlzbnP9peo2jPlEGzKz34dozJ+79V6g3Pp5u+r95csRtmHzoqkLO2FkVavb19Sw4DVnfG7Lh8KKk/8eXpf4/sjj5/6I23y6QxsqNPYsmH5n/aPH5VV/7Dsy6Xbq2vQVFY1TXwYT0yWcPdE6c9PbC2rx/93aW/D+4OOdP1aQ1j0tWzHuy9c6u/7se7P1/+/1dML322qafZes7SsCaY9uPdtasePS5e/uH/yA8bemG/wvmT/o/eeXB/53b3/yffHgFWBMIf/z5Cc7u2j39KENo0wHdkgW33sA0o+OWzff+Lzq7FmwzSPOff3/A9IVXl/737Z99kyG2++i0rm3vsGoGYZBc3/7lWF3QumvqXobItgNeMR0HW/Hh/EWzD6+5uvkPSBPIZhA97/Tyt/nLmvyIil4QKF3fWQzyM8jZIJthmgGOEaca++SkWQAAAABJRU5ErkJggg==" />
                    <span className="group-hover:text-gray-700">Register</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-max -mb-3">
              <a href="#" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-gray-700">Settings</span>
              </a>
            </div>
          </div>
        </div>
        <div className=' w-full min-h-screen bg-slate-300 flex flex-col justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
