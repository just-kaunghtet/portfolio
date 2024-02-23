import { Disclosure} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function Header() {
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '#home', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact Me', href: '#contact', current: false },
  ]);
  function updateMenuStatus(clickedMenu,menu) {
    const element = document.getElementById(menu);
    if (element) {
        setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          });
    }
    setNavigation(prevNavs => {
        return prevNavs.map(nav => {
            if (nav.name === clickedMenu.name) {
                return { ...nav, current: true };
            }
            return { ...nav, current: false };
        });
    });
  }
  return (
    <>
      <div className="h-16 sticky w-full top-0 z-50">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-8xl px-4">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            className={`${item.current ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer'} rounded-md px-3 py-2 text-sm font-medium`}
                            onClick={() => updateMenuStatus(item,item.href.substring(1))}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {/* <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      
                    </div> */}
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={`{${item.current?'bg-slate-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} 'rounded-md px-3 py-2 text-sm font-medium'}`}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={()=>updateMenuStatus(item.name)}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}