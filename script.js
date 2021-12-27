let Casedata={
    fetchdata:function(country){
        fetch("https://corona.lmao.ninja/v2/countries/"+country+"?yesterday=true&strict=true&query")
        .then((response)=>response.json())
        .then((data)=>this.displayCases(data));
        
    },

    displayCases:function(data){
        index=data.length-1;;
        console.log(data);
        const {country,cases,active,recovered,deaths,todayCases}=data;
        document.querySelector(".country").innerText= country;
        document.querySelector(".total").innerText=numberWithCommas(cases);
        document.querySelector(".recovered").innerText=numberWithCommas(recovered);
        document.querySelector(".deaths").innerText=numberWithCommas(deaths);
        document.querySelector(".active").innerText=numberWithCommas(active);
        document.querySelector(".today").innerText=numberWithCommas(todayCases);
        
    },
    search:function(){
        this.fetchdata(document.querySelector(".search-bar").value);
   }
};


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.querySelector(".search button")
.addEventListener("click",function(){
   Casedata.search();
})

document.querySelector(".search-bar")
.addEventListener("keyup",function(event){
   if (event.key == "Enter"){
       Casedata.search();
   }
})


Casedata.fetchdata("USA");
