"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Design = () => {
    return (
        <div id="Designs" className="pt-60 flex flex-col">
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
          A cooler tone site that spikes curiosity. Functional with a calendar
          and quick buttons to navigate to what matters most to a hike group.
          A modern solution to acticity sites
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
          An old fashioned layout that focuses on the members and the task
          they're doing. Clean and simple design that could be used for a hike group
          or many other things
        </p>
      </BackgroundGradient>
      </div>
        </div>
    )
}

export default Design;