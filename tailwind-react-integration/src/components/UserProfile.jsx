function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 sm:max-width-xs max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 p-8">
            <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24" />
            <h1 className="text-xl text-blue-800 my-4 sm:text-lg">John Doe</h1>
            <p className=" sm:text-sm text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;