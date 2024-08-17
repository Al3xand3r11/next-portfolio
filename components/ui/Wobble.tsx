"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function Wobble() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto w-full pl-6 md:pl-0">
      <a href="https://github.com/Al3xand3r11/hackathon-mountaineer" target="_blank" rel="noopener" className="hover:text-black">
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white hover:text-black">
          Paramount Hackathon
        </h2>
      
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A react stepper that serves a cdn video to users.
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-16">
        <Image
                src="/node.svg"
                height="25"
                width="25"
                alt="node"
            />
        <Image
                src="/react.svg"
                height="25"
                width="25"
                alt="react"
            />
        </div>
        
      </WobbleCard>
      </a>
      <a href="https://github.com/Al3xand3r11/go-react-project" target="_blank" rel="noopener">
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Golang Car Project
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A CRUD app with a React front end and Golang backend that stores, edits and deletes the attributes of cars
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-32">
        <Image
                src="/golang.svg"
                height="25"
                width="25"
                alt="golang"
            />
        <Image
                src="/react.svg"
                height="25"
                width="25"
                alt="react"
            />
            <Image
                src="/node.svg"
                height="25"
                width="25"
                alt="node"
            />
            <Image
                src="/mongodb.svg"
                height="25"
                width="25"
                alt="mongo"
            />
        </div>
        
      </WobbleCard>
      </a>
      <a href="https://github.com/Al3xand3r11/pythonProject" target="_blank" rel="noopener">
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Flight Prediction
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Created a training regression model in Python that takes a swath of flight data to determine the prices of flights in the future
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-8">
        <Image
                src="/python.svg"
                height="25"
                width="25"
                alt="python"
            />
        </div>
      </WobbleCard>
      </a>
      <a href="https://github.com/Al3xand3r11/next-portfolio" target="_blank" rel="noopener">
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Portfolio
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Current Repository for the website you are viewing
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-16">
        <Image
                src="/node.svg"
                height="25"
                width="25"
                alt="node"
            />
        <Image
                src="/react.svg"
                height="25"
                width="25"
                alt="react"
            />
        </div>
      </WobbleCard>
      </a>
      <a href="https://github.com/Al3xand3r11/nest-postgres" target="_blank" rel="noopener">
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          CRUD Postgres App
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          React application that utilizes the basics of Postgres
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-24 content-center">
        <Image
                src="/postgres.svg"
                height="25"
                width="25"
                alt="postgres"
                className="pr-2"
            />
        <Image
                src="/node.svg"
                height="25"
                width="25"
                alt="node"
                className="pr-2"
            />
        <Image
                src="/react.svg"
                height="25"
                width="25"
                alt="react"
            />
        </div>
      </WobbleCard>
      </a>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <a href="https://github.com/Al3xand3r11/weather-app" target="_blank" rel="noopener">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Weather App
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A weather app that determines the conditions to play basketball in
        </p>
        <div className="bg-white rounded-full  bottom-2 left-2 flex flex-row mt-2 w-16">
        <Image
                src="/node.svg"
                height="25"
                width="25"
                alt="node"
            />
        <Image
                src="/react.svg"
                height="25"
                width="25"
                alt="react"
            />
        </div>
        </a>
      </WobbleCard>

    </div>
  );
}
