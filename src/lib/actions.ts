'use server';

import { unstable_noStore as noStore } from 'next/cache';
/*
export async function fetchNonprofits(query: string, page: number, cause: string) {
  noStore();
  try {
    let response;
    if (query == "") {
      response = await fetch(`https://partners.every.org/v0.2/browse/${cause}?apiKey=pk_live_2c4ba0aedf94d95a45dc5773b11e7406&take=20&page=${page}`);
      response = await response.json();
      let cleanedNonprofits = [];
      for (const nonprofit of response.nonprofits) {
        const name = nonprofit.name;
        const description = nonprofit.description;
        const image = nonprofit.coverImageUrl;
        const link = nonprofit.websiteUrl;

        const n = {
          name: name,
          description: description,
          image: image,
          link: link,
          cause: cause
        }
        cleanedNonprofits.push(n);
      }

      
      //console.log(cleanedNonprofits);
    } else {
      response = await fetch(`https://partners.every.org/v0.2/search/${query}?apiKey=pk_live_2c4ba0aedf94d95a45dc5773b11e7406&take=50&causes=${cause}`);
      response = await response.json();
      
      for (const nonprofit of response.nonprofits) {
        const ein = nonprofit.ein;
        let data = await fetch(`https://partners.every.org/v0.2/nonprofit/${ein}?apiKey=pk_live_2c4ba0aedf94d95a45dc5773b11e7406`);
        data = await data.json();
        console.log(data);
        data = data.nonprofit;
        const name = data.name;
        const description = data.description;
        const image = data.coverImageUrl;
        const link = data.websiteUrl;
      }

    }
    
    let data = response;


    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch nonprofits.');
  }
} */