import { FC } from "react";

// Extend props to accept setActivePage function
interface HeaderProps {
  setActivePage: (page: string) => void;
}

const HeaderComp: FC<HeaderProps> = ({ setActivePage }) => {
  return (
    <header className="bg-primary text-secondary flex items-center justify-between h-16 sm:h-16 md:h-18 lg:h-20 p-4 md:p-8">
      <h1 className="text-lg md:text-2xl font-bold">IoT Admin Application</h1>
      <div className="text-sm md:text-lg">
        {/* Update activePage state based on the button clicked */}
        <button
          className="p-4 rounded-xl mr-1 hover:bg-tertiary active:bg-blue-500"
          onClick={() => setActivePage("list")}
        >
          List
        </button>
        <button
          className="p-4 rounded-xl mr-1 hover:bg-tertiary active:bg-blue-500"
          onClick={() => setActivePage("add")}
        >
          Add
        </button>
        <button
          className="p-4 rounded-xl mr-1 hover:bg-tertiary active:bg-blue-500"
          onClick={() => setActivePage("deploy")}
        >
          Deploy
        </button>
        <button
          className="p-4 rounded-xl hover:bg-tertiary active:bg-blue-500"
          onClick={() => setActivePage("history")}
        >
          History
        </button>
      </div>
    </header>
  );
};

export default HeaderComp;
