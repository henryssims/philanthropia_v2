'use server';

import { unstable_noStore as noStore } from 'next/cache';

export async function makeDonation(formData: FormData) {
  const amount = formData.get('amount');

  if (!amount) {
      return {
        message: 'Missing Fields. Failed to Create Donation.',
      };
  }

  try {
    //get user's id
    //get cause
    //create table entry with this data
      
  } catch (error) {
      return {
          message: 'Error: failed to add donation'
      };
  }
}