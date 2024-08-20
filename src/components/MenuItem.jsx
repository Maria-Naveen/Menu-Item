const MenuItem = ({ name, price, description, src }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-110 duration-100">
      <img
        src={src}
        alt={name}
        className="w-80 h-48 rounded-lg object-cover mx-auto"
      />
      <div className="flex flex-col items-center my-2">
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
