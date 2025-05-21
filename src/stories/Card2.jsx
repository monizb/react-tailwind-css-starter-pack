"use client";

import * as React from "react";

const HyCard = () => {
  return (
    <article className="max-w-[255px]">
      <div className="flex overflow-hidden relative flex-col justify-center px-1 pt-1 pb-4 w-full bg-white rounded-2xl shadow">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0588daaac295a920cf8d73c9c784ffc01ae5c9?placeholderIfAbsent=true"
          alt="Card header"
          className="object-contain z-0 gap-4 w-full rounded-xl aspect-[2.69]"
        />
        <div className="flex overflow-hidden absolute left-5 z-0 flex-col justify-center items-center bg-white border-solid border-[3px] border-[color:var(--light-stroke-hy-light-stroke,#F2F4F7)] h-[60px] min-h-[60px] rounded-[40px] top-[60px] w-[60px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df4e5bbc0df98c6e2957cc4acf8eb0f2fb5b9311?placeholderIfAbsent=true"
        alt="Thumbnail"
        className="object-contain w-full aspect-[1.1]"
      />
    </div>
        <section className="z-0 px-4 pt-5 mt-4 w-full rounded-none">
      <div className="w-full">
        <h2 className="text-sm font-medium leading-loose text-gray-900">
          Statics Ads
        </h2>
        <time className="mt-1 text-xs leading-loose text-gray-500">
          Created 3 months ago
        </time>
      </div>
    </section>
        <div className="flex z-0 gap-2 items-start px-4 mt-4 w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab615fe6231fe53e12e1a8cb5d6a1baa2b731fd4?placeholderIfAbsent=true"
        alt="Avatar group"
        className="object-contain aspect-[3.5] w-[84px]"
      />
    </div>
      </div>
    </article>
  );
};

export default HyCard;
