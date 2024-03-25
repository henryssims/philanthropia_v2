'use client';

import React, { useEffect, useState } from 'react';
import NonprofitCard from './NonprofitCard';
import { Nonprofit } from '@/lib/definitions';

export default function CardLayout({
  query,
  currentPage,
  cause
}: {
  query: string,
  currentPage: number,
  cause: string
}) {
  const [nonprofits, setNonprofits] = useState<Nonprofit[]>([]);

  useEffect(() => {
    async function fetchNonprofits(query: string, page: number, cause: string): Promise<Nonprofit[]> {
      let data: Nonprofit[] = [];
      const nonprofitApiKey = process.env.NEXT_PUBLIC_NONPROFIT_API_KEY;
      try {
        if (query == "") {
          let response;
          response = await fetch(`https://partners.every.org/v0.2/browse/${cause}?apiKey=${nonprofitApiKey}&take=3&page=${page}`);
          response = await response.json();

          for (const nonprofit of response.nonprofits) {
            const name = nonprofit.name;
            const description = nonprofit.description;
            const image = nonprofit.coverImageUrl;
            const link = nonprofit.websiteUrl;
    
            const newNonprofit = {
              name: name,
              description: description,
              image: image,
              link: link,
              cause: cause
            }

            data.push(newNonprofit);
          }
        } else {
          let response;
          response = await fetch(`https://partners.every.org/v0.2/search/${query}?apiKey=${nonprofitApiKey}&take=20&causes=${cause}`);
          response = await response.json();
          

          for (const nonprofit of response.nonprofits) {
            
          }
          let nonprofits;
          nonprofits = await Promise.all(response.nonprofits)
          
          for (const nonprofit of response.nonprofits) {
            const ein = nonprofit.ein;
            let n;
            n = await fetch(`https://partners.every.org/v0.2/nonprofit/${ein}?apiKey=${nonprofitApiKey}`);
            n = await n.json();
            n = n.data.nonprofit;

            const name = n.name;
            const description = n.description;
            const image = n.coverImageUrl;
            const link = n.websiteUrl

            const newNonprofit = {
              name: name,
              description: description,
              image: image,
              link: link,
              cause: cause
            }

            data.push(n);
          }
        }
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch nonprofits.');
      }
    }

    fetchNonprofits(query, currentPage, cause)
      .then(data => setNonprofits(data))
      .catch(error => console.error(error));
  }, [query, currentPage, cause]);
  
  return (
    <div className="grid grid-cols-3 grid-flow-row mt-10 mx-30 gap-5">
      {nonprofits.map((nonprofit) => (
        <NonprofitCard
          key={nonprofit.name}
          name={nonprofit.name}
          image={nonprofit.image}
          link={nonprofit.link}
          description={nonprofit.description}
          cause={cause}
        />
      ))}
    </div>
  );
}
