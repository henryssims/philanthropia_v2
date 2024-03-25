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
      <Search />  
      
      <div className="flex justify-center align-center flex-wrap">
        <CauseButton cause="animals" color="" selected={currCause == "animals"} onClick={() => setCurrCause("animals")} />
        <CauseButton cause="art" color="" selected={currCause == "art"} onClick={() => setCurrCause("art")} />
        <CauseButton cause="athletics" color="" selected={currCause == "athletics"} onClick={() => setCurrCause("athletics")} />
        <CauseButton cause="disabilities" color="" selected={currCause == "disabilities"} onClick={() => setCurrCause("disabilities")} />
        <CauseButton cause="disease" color="" selected={currCause == "disease"} onClick={() => setCurrCause("disease")} />
        <CauseButton cause="education" color="" selected={currCause == "education"} onClick={() => setCurrCause("education")} />
        <CauseButton cause="environment" color="" selected={currCause == "environment"} onClick={() => setCurrCause("environment")} />
        <CauseButton cause="gender-equality" color="" selected={currCause == "gender-equality"} onClick={() => setCurrCause("gender-equality")} />
        <CauseButton cause="lgbt" color="" selected={currCause == "lgbt"} onClick={() => setCurrCause("lgbt")} />
        <CauseButton cause="racial-justice" color="" selected={currCause == "racial-justice"} onClick={() => setCurrCause("racial-justice")} />
        <CauseButton cause="religion" color="" selected={currCause == "religion"} onClick={() => setCurrCause("religion")} />
        <CauseButton cause="water" color="" selected={currCause == "water"} onClick={() => setCurrCause("water")} />
      </div>
      <CardLayout query={query} currentPage={currentPage} cause={currCause} />
    </div>
  );
}