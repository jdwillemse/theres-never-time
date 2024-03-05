import { fetchRedditRSS } from './fetchRedditRSS.mjs';

export async function factConstructor(fact) {
  switch (fact.id) {
    case 'twoxchromosomes': {
      const url = 'https://www.reddit.com/r/TwoXChromosomes/.rss';
      const reponse = await fetchRedditRSS(url);
      return fact.copy.split('{{data}}').join(reponse);
    }

    case 'legaladvice': {
      const url =
        'https://www.reddit.com/r/legaladvice/search/.rss?q=%E2%80%9CMATERNITY+LEAVE%E2%80%9D&type=link&cId=b130d0b9-dbd0-4575-84f8-9ac1e1aa3be1&iId=8abff706-6c6b-460c-85a3-773547ccc58f&t=week';
      const reponse = await fetchRedditRSS(url);
      return fact.copy.split('{{data}}').join(reponse);
    }

    default:
      return fact.copy;
  }
}
