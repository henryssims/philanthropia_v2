## My Project

For my project, I decided to begin to implement the feature I talked about during my interview, where users can get different badges for meeting certain donation goals that they can display on their profile, giving them an incentive to donate more and to a wider variety of causes. I began by learning how to use Next.js 14 and made a basic site where users can create accounts and log in, and they can only view the home page until they do so. To store and get user data, I used Supabase combined with Prisma, and to authenticate users I used NextAuth. Then, I leveraged the Every.org Charity API to allow users to search for nonprofits. They can search for anything using the search bar and filter by the cause. They can then donate to any charity they please using fake money, since I didn't have enough time to implement real transactions. Then, I worked on making the website look nice using Tailwind CSS and components from ShadCN UI. In the user's dashboard, they can view the total amount of money they have donated, the number of different charities they've donated to, and their badges. So far, users get a bronze, silver, and gold badge for meeting certain total donation threshholds, and they get a badge for each different cause they donate to.

## Next Steps

I didn't have as much time as I would've liked to really polish this project, so here's some things I would have implemented next:
- If you put in the wrong credentials on the sign in page, it should display an error message but it reloads the whole page.
- The sign in/sign up with Google doesn't actually work, so I would implement that.
- I would make the badges actually look cool so they are something people would actually spend money to get, even if they don't have intrinsic value.
- I would make the badge system more complex, where there are different tiers within each type of badge that upgrade as you donate more money towards that cause. I would also allow users to customize their profile by choosing which badges to display and in what order.

## An Honest Reflection

This was my first time working with most of these technologies, and I loved learning so many new things. However, I definitely wish I could have done some parts differently. I spent the first few days of the week just trying to learn how to use Next.js and following the complete tutorial on their website before I even started my actualy project. I wish I had started planning out my project earlier and working on it as I learned more about Next.js. I also believe that the styling of the website is pretty sub par, and if I had more time I would've put a lot more effort into that. I wanted to make sure I got the functionality down first, and ended up running out of time. Finally, I wish I had asked for help a bit more. A few times I got really stuck to the point where I made no progress in hours, but I really wanted to figure it out myself. I should have realized that I could have moved much quicker if I had just asked for help when I really needed it.

Overall, I had an awesome time learning a bunch of new things and creating a final product that I am proud of. I am excited about the possibility of learning and creating much more as an intern for Philanthropia.
