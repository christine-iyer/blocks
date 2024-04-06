async function fetchAuthorList({ queryKey }) {
     const author = queryKey[1];
   
     if (!author) return [];
   
     const res = await fetch(
       `apis/haikus?author=${author}`
     );
   
     if (!res.ok) {
       throw new Error(`author ${author} fetch not ok`);
     }
   
     return res.json();
   }
   
   export default fetchAuthorList;