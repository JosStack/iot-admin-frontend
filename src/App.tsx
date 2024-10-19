import { FC, useState } from "react";
import HeaderComp from "./components/Header/HeaderComp"
import ListComp from "./components/List/ListComp";
import AddComp from "./components/Add/AddComp";

const DeployView: FC = () => <div>Deploy Updates</div>;
const HistoryView: FC = () => <div>Deployment History</div>;

const App: FC = () => {
  // State to track which page is active
  const [activePage, setActivePage] = useState<string>("list");

  return (
    <div>
      {/* Pass setActivePage function to HeaderComp to handle button clicks */}
      <HeaderComp setActivePage={setActivePage} />

      {/* Conditionally render the different views based on activePage */}
      <main className="p-4">
        {activePage === "list" && <ListComp />}
        {activePage === "add" && <AddComp />}
        {activePage === "deploy" && <DeployView />}
        {activePage === "history" && <HistoryView />}
      </main>
    </div>
  );
};

export default App
