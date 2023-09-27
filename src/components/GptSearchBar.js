import React from 'react';
import { LANG } from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const appConfig = useSelector((store) => store.appConfig);
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center ">
      <form
        action=""
        className=" w-screen mx-1 md:w-1/2 bg-black rounded grid grid-cols-12"
        method="post"
      >
        <input
          type="text"
          className="p-3  m-2 col-span-9"
          placeholder={LANG[appConfig.language].gptSearchPlaceholder}
          id=""
        />

        <button className=" bg-red-900 text-white m-2 rounded col-span-3">
          {LANG[appConfig.language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
