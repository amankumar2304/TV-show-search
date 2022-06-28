const form=document.querySelector('#searchform');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    console.log(form.elements.query.value);
    const searchterm=form.elements.query.value;
    const config={params:{q:searchterm}};
    const res=await axios.get(`https://api.tvmaze.com/search/shows`,config);
    // console.log(res.data[0].show.image.medium);
    makeimage(res.data);
    form.elements.query.value='';

})
const makeimage=(shows) =>{
    for(let result of shows){
        // console.log(result)
        if(result.show.image){
            const img=document.createElement('IMG');
            img.src=result.show.image.medium;
            document.body.append(img);
        }
        
    }
}