import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { MenuModalProps } from './MenuModal.props';

export const MenuModal: FC<MenuModalProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#010A05BF]/75 [backdrop-filter:blur(25px)]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden transition-all flex relative">
                  <button
                    type="button"
                    className="text-sm tracking-[1.4px] absolute top-11 right-5"
                    onClick={closeModal}
                  >
                    CLOSE
                  </button>
                  <nav className="my-auto w-full">
                    <ul className="flex flex-col gap-12 text-center align-middle text-lg leading-normal tracking-[1.8px]">
                      {/* TODO: Add links and smooth scroll(lib) */}
                      <li>About</li>
                      <li>Services</li>
                      <li>Career</li>
                      <li>Gallery</li>
                      <li>Contacts</li>
                    </ul>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
