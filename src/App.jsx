
// import React, { useState, useEffect } from "react";

// function App() {
//   const [hasError, setError] = useState(false);
//   const [users, setUsers] = useState([]);

//     async function fetchData() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       res
//         .json()
//         .then((res) => setUsers(res))
//         .catch((err) => setError(err));
//     }
//     useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-slate-400 p-20">
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((user) => (
//           <div key={user.id} className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl font-bold">{user.name}</h2>
//             <p>id:{user.id}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//           </div>
//         ))}
//       </div>
//       <span>Has Error :{JSON.stringify(hasError)}</span>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from "react";

// function App() {
//   const [hasError, setError] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   async function fetchData() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) {
//         throw new Error("Failed to fetch");
//       }
//       const data = await res.json();
//       setUsers(data);
//       setFilteredUsers(data);
//     } catch (err) {
//       setError(err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(query)
//     );

//     setFilteredUsers(query ? filtered : users);
//   };

//   return (
//     <div className="bg-slate-400 p-20">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search by name..."
//         className="p-2 border rounded mb-4"
//       />
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {filteredUsers.map((user) => (
//           <div key={user.id} className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl font-bold">{user.name}</h2>
//             <p>id: {user.id}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//           </div>
//         ))}
//       </div>
//       <span>Has Error: {JSON.stringify(hasError)}</span>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from "react";

// function App() {
//   const [hasError, setError] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [idFilter, setIdFilter] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   async function fetchData() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) {
//         throw new Error("Failed to fetch");
//       }
//       const data = await res.json();
//       setUsers(data);
//       setFilteredUsers(data);
//     } catch (err) {
//       setError(err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(query)
//     );

//     setFilteredUsers(query ? filtered : users);
//   };

//   const handleIdSearch = (e) => {
//     const id = e.target.value;
//     setIdFilter(id);

//     const filtered = users.filter((user) => user.id.toString() === id);
//     setFilteredUsers(id ? filtered : users);
//   };

//   return (
//     <div className="bg-slate-400 p-20">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search by name..."
//         className="p-2 border rounded mb-4"
//       />
//       <input
//         type="text"
//         value={idFilter}
//         onChange={handleIdSearch}
//         placeholder="Search by ID..."
//         className="p-2 border rounded mb-4"
//       />
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {filteredUsers.map((user) => (
//           <div key={user.id} className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl font-bold">{user.name}</h2>
//             <p>id: {user.id}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//           </div>
//         ))}
//       </div>
//       <span>Has Error: {JSON.stringify(hasError)}</span>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";

function App() {
  const [hasError, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [idFilters, setIdFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setFilteredUsers(query ? filtered : users);
  };

  const handleCheckboxChange = (e) => {
    const id = parseInt(e.target.value);
    const checked = e.target.checked;

    let updatedFilters = [...idFilters];

    if (checked) {
      updatedFilters.push(id);
    } else {
      updatedFilters = updatedFilters.filter((filter) => filter !== id);
    }

    setIdFilters(updatedFilters);

    const filtered = users.filter((user) => updatedFilters.includes(user.id));
    setFilteredUsers(updatedFilters.length > 0 ? filtered : users);
  };

  return (
    <div className="bg-slate-400 p-20">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name..."
        className="p-2 border rounded mb-4"
      />
      <div>
        <label htmlFor="id1">
          <input
            type="checkbox"
            id="id1"
            value="1"
            onChange={handleCheckboxChange}
          />
          ID 1
        </label>
        <label htmlFor="id2">
          <input
            type="checkbox"
            id="id2"
            value="2"
            onChange={handleCheckboxChange}
          />
          ID 2
        </label>
        <label htmlFor="id4">
          <input
            type="checkbox"
            id="id4"
            value="4"
            onChange={handleCheckboxChange}
          />
          ID 4
        </label>
        {/* Add more checkboxes as needed */}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
      <span>Has Error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default App;
