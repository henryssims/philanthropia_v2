'use client';

import Search from "@/components/nonprofits/Search";
import CardLayout from "@/components/nonprofits/CardLayout";
import PaginationComponent from "@/components/nonprofits/PaginationComponent";
import { useState } from "react";
import CauseButton from "@/components/nonprofits/CauseButton";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const [currCause, setCurrCause] = useState("animals");

  return (
    <div className="flex flex-col">
      <div className="fixed bg-white w-full p-10">
        <Search />   
      </div>
      <div className="h-20"></div>
      <div className="flex">
        <div className="flex flex-col justify-center align-center flex-wrap fixed mt-3 gap-1 px-4">
          <CauseButton cause="animals" selected={currCause == "animals"} onClick={() => setCurrCause("animals")} />
          <CauseButton cause="art" selected={currCause == "art"} onClick={() => setCurrCause("art")} />
          <CauseButton cause="athletics" selected={currCause == "athletics"} onClick={() => setCurrCause("athletics")} />
          <CauseButton cause="disabilities" selected={currCause == "disabilities"} onClick={() => setCurrCause("disabilities")} />
          <CauseButton cause="disease" selected={currCause == "disease"} onClick={() => setCurrCause("disease")} />
          <CauseButton cause="education" selected={currCause == "education"} onClick={() => setCurrCause("education")} />
          <CauseButton cause="environment" selected={currCause == "environment"} onClick={() => setCurrCause("environment")} />
          <CauseButton cause="gender-equality" selected={currCause == "gender-equality"} onClick={() => setCurrCause("gender-equality")} />
          <CauseButton cause="lgbt" selected={currCause == "lgbt"} onClick={() => setCurrCause("lgbt")} />
          <CauseButton cause="racial-justice" selected={currCause == "racial-justice"} onClick={() => setCurrCause("racial-justice")} />
          <CauseButton cause="religion" selected={currCause == "religion"} onClick={() => setCurrCause("religion")} />
          <CauseButton cause="water" selected={currCause == "water"} onClick={() => setCurrCause("water")} />
        </div>
        <div className="flex">
          <div className="w-32"></div>
          <CardLayout query={query} currentPage={currentPage} cause={currCause} />  
        </div>
      </div>
    </div>
  );
}