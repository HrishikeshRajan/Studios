import React from 'react';
import { LANG } from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const appConfig = useSelector((store) => store.appConfig);
  return (
    <div className="pt-[20%] flex justify-center ">
      <form
        action=""
        className=" w-1/2 bg-black grid grid-cols-12"
        method="post"
      >
        <input
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={LANG[appConfig.language].gptSearchPlaceholder}
          id=""
        />

        <button className="py-2 px-4 bg-red-900 text-white rounded col-span-3">
          {LANG[appConfig.language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
