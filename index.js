console.log("iTS A PRIME NUMBER");
const n =5; 
const prime=()=>{
    if(n<2) return false;
    if(n==2) return true;
    for(const i =2; i<n; i++){
        if(n%i==0){
        return  false;
        }
    }
return true;
}

