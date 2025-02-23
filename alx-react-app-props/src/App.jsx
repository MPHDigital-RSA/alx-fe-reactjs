import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {

  const useContextProvider = ({ children }) => {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
      <UserContext.Provider value={{ userData, userData }}>
        {children}
      </UserContext.Provider>
    )
  }

  return (
    <useContextProvider>
      <ProfilePage />
    </useContextProvider>
  )
}

export default App;