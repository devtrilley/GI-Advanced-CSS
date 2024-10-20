// Array of objects which holds information on each product. Will use this for HTML generation
const products = [
  {
    name: "Total Gym: Supreme Edition",
    price: 799.99,
    rating: "5 stars",
    description: '"The ultimate workout for ultimate strength."',
    image: "images/product-images/total-gym.jpg",
    alt: "Total Gym: Supreme Edition",
    link: "https://totalgymdirect.com/shop/total-gym-fit/?key=gpla&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUFm2XoYJWQeqJ96AzM2xdS2Vo2ED6CllHQuIqEUYhSDIKFC32Lp4BRoCkz0QAvD_BwE&gclsrc=aw.ds",
  },
  {
    name: "Chuck’s Action Jeans",
    price: 59.99,
    rating: "5 stars",
    description: '"High kicks approved, guaranteed to never rip."',
    image: "images/product-images/action-jeans.jpg",
    alt: "Chuck Norris Action Jeans",
    link: "https://www.etsy.com/listing/1017346729/chuck-norris-action-jeans?gpla=1&gao=1&",
  },
  {
    name: "Iron Will Kettlebells",
    price: 29.99,
    rating: "4 stars",
    description: '"Lift like a legend with kettlebells that don’t back down."',
    image: "images/product-images/kettlebell.webp",
    alt: "Iron Will Brand Kettlebells",
    link: "https://lycanfitness.com/product/iron-kettlebell/?attribute_pa_weight=28-kg&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUHazRsBTFVuWNnRgUVtscbch9LlLDO8K9j6KWcYu4MnQZmb_ogQQpBoCjTsQAvD_BwE",
  },
  {
    name: "Roundhouse Supplements",
    price: 34.99,
    rating: "3 stars",
    description: '"Power-packed pills to fuel your inner ranger."',
    image: "images/product-images/roundhouse-supplements.jpg",
    alt: "Roundhouse Provisions Supplements",
    link: "https://www2.roundhouseprovisions.com/os240124b_ap?business_unit=a003w0000159bdwaai&utm_campaign=rhp-gshop-morningkick-branded-231030&utm_campaign_id=7013w000002DUdcAAG&utm_content=site_source_%7Bsourceid%7D_placement_&utm_medium=cpc&utm_source=google_ads&utm_term=ad_id_679456441586_adset_id_152515455782_campaign_id_20740594310_&subid1=CjwKCAjw1NK4BhAwEiwAVUHPUJD0_-aEHyko2TGJnuXy-b4hCgy3gpeN76Kb3l1QwD6xzKVkR1ppmBoCO0MQAvD_BwE&subid2=g&subid3=679456441586&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUJD0_-aEHyko2TGJnuXy-b4hCgy3gpeN76Kb3l1QwD6xzKVkR1ppmBoCO0MQAvD_BwE&sessionid=7106506618",
  },
  {
    name: "Chuck Norris: The Ultimate Collection (DVD)",
    price: 49.99,
    rating: "5 stars",
    description: '"All the action, all the legend, in one epic collection."',
    image: "images/product-images/wtr-dvd-pack.jpg",
    alt: "Walker Texas Ranger: DVD Collection",
    link: "https://www.amazon.com/Walker-Texas-Ranger-Chuck-Norris/dp/B0030Y12AU/ref=asc_df_B0030Y12AU/?tag=hyprod-20&linkCode=df0&hvadid=693366125681&hvpos=&hvnetw=g&hvrand=10407562095820493978&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9191808&hvtargid=pla-596127625577&psc=1&mcid=b16d8073e53f3603bffe182b7a8e6117",
  },
  {
    name: "Chuck's Nunchucks",
    price: 199.99,
    rating: "4 stars",
    description: '"Infused with Chuck’s signature strength and style."',
    image: "images/product-images/nunchucks.webp",
    alt: "Chuck Norris' Official Nunchucks",
    link: "https://www.ebay.com/itm/405092173244?chn=ps&_trkparms=ispr%3D1&amdata=enc%3A1tfW3ZR5wSta0l_2_EkCrVw0&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&mkscid=101&itemid=405092173244&targetid=2321110923741&device=c&mktype=pla&googleloc=9191808&poi=&campaignid=21415040041&mkgroupid=173029508348&rlsatarget=pla-2321110923741&abcId=9450166&merchantid=5294121087&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUEaUqCfr2l31FSwvWaJs36I2eXhJU29y3E4VtH6fxV8qMsIigPcURhoCD98QAvD_BwE",
  },
  {
    name: "Ultimate Beard Kit",
    price: 24.99,
    rating: "4 stars",
    description: '"Everything you need to grow and groom a beard of power."',
    image: "images/product-images/beard-kit.jpg",
    alt: "Chuck Norris sponsoered Beard Kit",
    link: "https://www.amazon.com/Beard-Club-Advanced-Amber-Growth/dp/B0CMDG898D/ref=asc_df_B0CMDG898D/?tag=hyprod-20&linkCode=df0&hvadid=693031565454&hvpos=&hvnetw=g&hvrand=13743414370696222539&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9191808&hvtargid=pla-2276108254516&psc=1&mcid=31b83b11d1e73608987f841aed43b824",
  },
  {
    name: "Walker’s Western Boots",
    price: 129.99,
    rating: "4 stars",
    description: '"Built to last, from the ranch to the range."',
    image: "images/product-images/boots.webp",
    alt: "Walker Texas Ranger Western Boots",
    link: "https://www.tecovas.com/products/the-cartwright?color=scotch-goat&utm_source=google&utm_medium=cpc&utm_campaign=GPLA-NB-Men-CoreFourBoots-PerformanceMax&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUGMy5Wam2jnRi2zA2X365_cmhTYmYPrlcd0RzCw6ugyUcQN9AmW1uRoCQFIQAvD_BwE",
  },
  {
    name: "Walker Texas Ranger Halloween Outfit",
    price: 39.99,
    rating: "5 stars",
    description: '"Transform into the toughest Texas Ranger this Halloween."',
    image: "images/product-images/halloween-outfit.jpg",
    alt: "Walker Texas Ranger Halloween Outfit",
    link: "https://www.halloweencostumes.com/adult-cowboy-costume.html",
  },
  {
    name: "Signed Chuck Norris Photo",
    price: 89.99,
    rating: "4 stars",
    description: '"Perfect your kicks and deliver justice with every step."',
    image: "images/product-images/signed-chuck-norris-photo.png",
    alt: "Signed Photo of Chuck Norris in front of Texas flag",
    link: "https://www.shopfanexpo.com/chuck-norris-walker-texas-ranger-signed-autograph",
  },
  {
    name: "The Way of The Dragon Poster",
    price: 14.99,
    rating: "2 stars",
    description: '"A small but mighty keychain for self-defense."',
    image: "images/product-images/bruce-vs-chuck-poster.jpg",
    alt: "Poster of Bruce Lee and Chuck Norris battling in The Way of The Dragon",
    link: "https://www.amazon.com/Norris-POSTER-Martial-Fighting-photo-realistic/dp/B00YQKXJBC",
  },
  {
    name: "Walker Texas Snapback",
    price: 49.99,
    rating: "4 stars",
    description:
      '"Sure it might not be very Texan, but you\'ll still be the most dapper ranger in town."',
    image: "images/product-images/snapback.webp",
    alt: "Walker Texas Ranger Resiliency Hat",
    link: "https://www.artistshot.com/chuck-norris-approved-vintage-cap-p-137719857",
  },
];

const gridContainer = document.querySelector(".grid-container");

products.forEach((product) => {
  let productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
          <div class="image-container">
            <a class="product-link" href="${product.link}" target="_blank">
            <img
              class="product-image"
              src="${product.image}"
              alt="${product.alt}"
            />
            </a>
          </div>
          <div class="info-container">
            <p class="product-name">${product.name}</p>
            <p class="product-price">$${product.price}</p>
            <p class="product-rating">Rated: ${product.rating}</p>
            <p class="product-description">${product.description}</p>
          </div>
          <div class="button-container">
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>`;

  gridContainer.appendChild(productCard);
});

/*
  1. Run through array to access info on each object
  2. While on that object, generate some HTML using interpolation for the content
  3. Append card to page
*/
