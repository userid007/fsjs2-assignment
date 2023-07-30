const Button = ({ value, onClick }) => {
  let classSize = "";
  if (value.length > 1) {
    classSize = "col-span-2";
  }

  return (
    <button
      className={`bg-[#503CD1] hover:bg-[#3d2bb8] text-2xl text-white rounded-lg ${classSize}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
