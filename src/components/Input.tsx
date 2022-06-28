import { SearchIcon } from '@heroicons/react/solid';

function Input() {
  return (
    <div className="w-80 flex">
      <input
        type="text"
        className="w-full h-12 bg-white rounded-tl-md rounded-bl-md shadow-[0px_0px_0px_1.5px_rgb(217,217,217)inset]"
      />
      <button className="w-12 h-12 bg-blue-500 rounded-tr-md rounded-br-md">
        <SearchIcon className="text-white" />
      </button>
    </div>
  );
}

export default Input;
