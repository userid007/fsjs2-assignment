const Wrapper = ({ children }) => {
  return (
    <div className="w-[340px] h-[500px] flex flex-col justify-between p-2.5 rounded-lg bg-[#485451]">
      {children}
    </div>
  );
};

export default Wrapper;
