const ProfileCard = () => {

  const user = JSON.parse(localStorage.getItem("userInfo")!);

  return (
    <div className="text-black flex flex-col justify-center items-center bg-white pb-10 rounded-lg">
      <div className="bg-navbar w-full h-24 rounded-t-lg "></div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
        alt="Profile"
        className="flex w-20 h-20 rounded-full -mt-11"
      />
      <p className="text-xl font-semibold">{user.name.split(" ")[0]}</p>
      <p>Software Developer</p>
      <div className="flex flex-row space-x-6 mt-2 ">
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span className="font-medium text-sm text-gray-400 font-Sora">
            Posts
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>99</span>
          <span className="font-medium text-sm text-gray-400 font-Sora">
            Projects
          </span>
        </div>
      </div>
      <p className="text-center text-sm pt-3 px-3 font-Sora">
        Life would be much easier if I had the source code.
      </p>
      <button
        type="button"
        className="font-medium font-Sora text-sm border-2 bg-gray-400 hover:bg-navyblue hover:text-white hover:border-2 mt-5 px-3.5 py-1.5 rounded-full"
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
