async function hacking() {
    setTimeout(()=>{
        document.querySelector(".mid-div").append("I am inserted by hacking function");
    },Math.random*1000)
}

async function main() {
    await hacking
}
    
main()

