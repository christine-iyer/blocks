async function fetchSearch({ queryKey }) {
     const { author } = queryKey[1];
     const res = await fetch(
       `/api/haikus?author=${author}`
     );
   
     if (!res.ok)
       throw new Error(`pet search not okay: ${author}`);
   
     return res.json();
     console.log(res)
   }
   
   export default fetchSearch;