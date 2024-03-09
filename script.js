let fname=""

const dynamicName = document.querySelector("#dynamic-name")


const apiName = async ()=>{
    const res = await axios.get('https://randomuser.me/api/')
    console.log(res)
    fname = res.data.results[0].name.first
    console.log(fname)
    dynamicName.innerHTML = `Hello ${fname}, Welcome  to the website`
}

apiName()