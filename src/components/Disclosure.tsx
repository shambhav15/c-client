import { useState } from "react";
import { Edit, Copy, Star, Share2, Trash, MoreVertical } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const Disclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const menuItems = [
    { label: "Edit", Icon: Edit },
    { label: "Duplicate", Icon: Copy },
    { label: "Favourite", Icon: Star },
    { label: "Share", Icon: Share2 },
  ];
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative flex items-center justify-center w-full max-w-xs">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-xl border shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MoreVertical className="dark:text-gray-300" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <div className="absolute flex items-center justify-center size-full">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full flex flex-col items-center border shadow-md rounded-2xl overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="w-full py-1.5 px-3 border-b dark:border-gray-700">
                  <span className="text-xs dark:text-gray-300">
                    More Options
                  </span>
                </div>
                <div className="w-full flex flex-col p-2 py-2 gap-1">
                  {menuItems.map(({ label, Icon }) => (
                    <button
                      key={label}
                      className="flex items-center justify-start rounded-xl p-3 w-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-4" />
                      <span className="pt-0.5 text-xs">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-2 p-2 border-t dark:border-gray-700 overflow-hidden h-[67px] shrink-0">
                  <motion.button
                    className="flex items-center text-red-500 justify-start rounded-xl p-3 w-full hover:bg-red-50 dark:hover:bg-red-900/20 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -67 : 0,
                    }}
                    onClick={() => setIsDeleteOpen(true)}
                  >
                    <Trash className="mr-3" />
                    <span className="pt-0.5 text-xs">Delete</span>
                  </motion.button>
                  <motion.div
                    className="flex items-center justify-center w-full gap-2 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -58 : 0,
                    }}
                  >
                    <button className="flex items-center justify-center p-3 w-full rounded-xl bg-red-500 text-white">
                      <span className="text-xs">Yes, Delete</span>
                    </button>
                    <button
                      className="flex items-center justify-center p-3 w-full rounded-xl border border-slate-100 shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      onClick={() => setIsDeleteOpen(false)}
                    >
                      <span className="text-xs">Cancel</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};
