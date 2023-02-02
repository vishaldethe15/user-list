import { useState, useEffect } from "react";
import ListContainer from "./components/ListContainer";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  const getUsers = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App center">
      <ListContainer users={currentUsers} loading={isLoading} />
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
