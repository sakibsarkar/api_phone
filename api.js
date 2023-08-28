const loadPhone = async () => {
    let searchValue = document.getElementById("input").value;
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    // const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await res.json()
    const phonesData = data.data
    displayPhones(phonesData)
}
// loadPhone()

function displayPhones(data) {
    let container = document.getElementById("container");
    container.innerHTML = ""
    data.forEach(phones => {
        let card_div = document.createElement("div");
        card_div.classList.add("card")
        card_div.innerHTML = `
            <img src="${phones.image}" alt="">
            <h2>${phones.phone_name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class ="details" onclick="my_modal_1.showModal(),phoneinfo('${phones.slug}')">See Details</button>
        `
        container.appendChild(card_div)
    });

}

// phone details show 
const phoneinfo = async (phone_id,image)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phone_id}`)
    const data = await res.json()
    let details = data.data
    ShowDetails(details)
}
function ShowDetails(details) {
    let info_container = document.getElementById("info");
    info_container.innerHTML = `
<img src="${details.image}" alt="">
                <div class="phone_content">
                    <p>&#187 ${details.name}</p>
                    <p>&#187 storage : <span>${details?.mainFeatures?.storage}</span></p>
                    <p>&#187 Realeases date : <span>${details?.releaseDate ? details.releaseDate:"no date found"}</span></p>
                    <p>&#187 Display Size : <span>${details.mainFeatures.displaySize}</p>

                </div>
                <button class="btn">Close</button>
`
}

// {"brand":"Apple ","phone_name":"iPhone 13 mini","slug":"apple_iphone_13_mini-11104","image":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"}