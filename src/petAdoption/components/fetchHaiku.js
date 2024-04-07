const fetchHaiku = async ({ queryKey }) => {
     const id = queryKey[1];
     const apiRes = await fetch(`/api/haikus?id=${id}`);
   
     if (!apiRes.ok) {
       throw new Error(`details/${id} fetch not ok`);
     }
   
     return apiRes.json();
    
   };
   
   export default fetchHaiku;