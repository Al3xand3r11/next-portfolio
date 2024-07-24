"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Design = () => {
    return (
        <div className="pt-60 flex flex-col">
            <h1 className="text-3xl font-extrabold text-center pb-8">Latest Designs</h1>
        <div className="flex flex-row space-between">
        <div className="pr-4 pl-10">
        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Run.png`}
          alt="jordans"
          height="800"
          width="800"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Running Photography
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A concept for a photographer looking to host their images in a sleek
          and dark way. This hero section focuses on photos and functionality.
          Perfect for anyone ready to showcase their work.
        </p>
      </BackgroundGradient>
      </div>
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Ray.png`}
          alt="jordans"
          height="800"
          width="800"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Photography Portfolio
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            A personal portfolio for a photographer featuring a hero section
            of their name as well as an image they took. A hero section like this 
            puts an emphasis on the photographer's quality of photos                  
               
        </p>
      </BackgroundGradient>
      </div>
      <div className="flex flex-row space-between pt-4">
      <div className="pr-4 pl-10">
        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Modern.png`}
          alt="jordans"
          height="800"
          width="800"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Saturday Hike Crew Modern
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </BackgroundGradient>
      </div>
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Left-Right.png`}
          alt="jordans"
          height="800"
          width="800"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Saturday Hike Crew Traditional
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </BackgroundGradient>
      </div>
        </div>
    )
}

export default Design;