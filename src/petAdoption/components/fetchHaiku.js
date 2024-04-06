const fetchHaiku = async ({ queryKey }) => {
     const _id = queryKey[1];
     const apiRes = await fetch(`/api/haikus?id=${_id}`);
   
     if (!apiRes.ok) {
       throw new Error(`details/${_id} fetch not ok`);
     }
   
     return apiRes.json();
    
   };
   
   export default fetchHaiku;