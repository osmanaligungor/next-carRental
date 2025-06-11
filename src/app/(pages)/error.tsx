"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  return (
    <div className="bg-red-400 text-white mx-auto p-5 rounded-md mt-[200px] max-w-[500px] w-[90%]">
      <h1 className="font-semibold text-lg text-center">
        Üzgünüz bir sorun oluştu!
      </h1>

      <p className="my-3">{error.name}</p>

      <div className="flex justify-center">
        <button
          onClick={reset}
          className="border py-1 px-3 rounded-md cursor-pointer hover:bg-red-500 transition"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
