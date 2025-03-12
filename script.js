// get data

var users = [
    {
      profilepic: "https://i.pinimg.com/736x/9c/e4/70/9ce470c7740aa512615b372b3dbee1aa.jpg",
      displaypicture: "https://i.pinimg.com/736x/38/a8/d0/38a8d06e356e0bf8b10a66bc80f66088.jpg",
      pendingmessage: 0,
      location: "New York",
      name: "Alice",
      age: 25,
      intrests: ["music", "painting", "coding"],
      bio: "Creative artist and developer.\nPassionate about tech and art.\nLove exploring new design trends.\nAlways learning something new!",
      status: "Online",
      isfriend: true
    },
    {
      profilepic: "https://randomuser.me/api/portraits/women/2.jpg",
      displaypicture: "https://i.pinimg.com/736x/7e/ca/37/7eca375e9c67a4da344f7c0fe141b2ac.jpg",
      pendingmessage: 2,
      location: "Los Angeles",
      name: "Bob",
      age: 30,
      intrests: ["gaming", "reading", "traveling"],
      bio: "Avid gamer and traveler.\nLove reading sci-fi books.\nExploring the world one trip at a time.\nBig fan of storytelling in games!",
      status: "Busy",
      isfriend: false
    },
    {
      profilepic: "https://randomuser.me/api/portraits/men/3.jpg",
      displaypicture: "https://i.pinimg.com/736x/46/f4/c7/46f4c7786d9ade1f947934028d0ba10d.jpg",
      pendingmessage: 1,
      location: "Chicago",
      name: "Charlie",
      age: 28,
      intrests: ["sports", "photography", "coding"],
      bio: "Tech enthusiast and sports lover.\nEnjoys capturing moments on camera.\nPassionate about web development.\nAlways up for a challenge!",
      status: "Offline",
      isfriend: true
    },
    {
      profilepic: "https://randomuser.me/api/portraits/women/4.jpg",
      displaypicture: "https://i.pinimg.com/736x/b9/a0/5f/b9a05ff5ac3e1b29c9086625e745883c.jpg",
      pendingmessage: 3,
      location: "Houston",
      name: "Emma",
      age: 22,
      intrests: ["music", "writing", "painting"],
      bio: "Expressing creativity through art.\nLove writing poetry and songs.\nMusic is my escape.\nAlways searching for inspiration!",
      status: "Online",
      isfriend: false
    },
    {
      profilepic: "https://randomuser.me/api/portraits/men/5.jpg",
      displaypicture: "https://i.pinimg.com/736x/fe/d0/2a/fed02ae7b29ba97982a8b5a00baa6d7f.jpg",
      pendingmessage: 0,
      location: "Miami",
      name: "David",
      age: 35,
      intrests: ["coding", "hiking", "sports"],
      bio: "Outdoor explorer and tech geek.\nFinding balance in life.\nPassionate about full-stack development.\nEnjoys hiking on weekends!",
      status: "Away",
      isfriend: true
    },
    {
      profilepic: "https://randomuser.me/api/portraits/women/6.jpg",
      displaypicture: "https://i.pinimg.com/736x/98/8a/0f/988a0f473f92e6dbebf8c0d142073092.jpg",
      pendingmessage: 5,
      location: "San Francisco",
      name: "Hannah",
      age: 27,
      intrests: ["dancing", "cooking", "coding"],
      bio: "Love to cook, dance, and code.\nLife's a blend of flavors.\nEnjoy experimenting with recipes.\nAlways excited to learn something new!",
      status: "Online",
      isfriend: false
    }
  ];
  

  function select(elem){
    return document.querySelector(elem)
  }



  var curr = 0;
  let isAnimating = false;

  function setData(index){
    select(".profileimg img").src = users[index].profilepic
    select(".badge h5").innerText = users[index].pendingmessage
    select(".location h3").innerText = users[index].location
    select(".name h1:nth-child(1)").innerText = users[index].name
    select(".name h1:nth-child(2)").innerText = users[index].age
    select(".bio p").innerText = users[index].bio
  }

(function setintail(){
    document.querySelector(".maincard img").src = users[curr].displaypicture
    document.querySelector(".incomming-card img").src = users[curr+1].displaypicture
   setData(curr)
    curr = 2;
})()



let dney = select(".deny")
let accept = select(".accept")




function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete:function(){
                isAnimating = false
              let maincard = select(".maincard")
              let incommingcard = select(".incomming-card")
    
              incommingcard.classList.remove("z-[2]")
              incommingcard.classList.add("z-[3]")
              incommingcard.classList.remove("incomming-card")
    
              maincard.classList.remove("z-[3]")
              maincard.classList.add("z-[2]")
             
              gsap.set(maincard , {
                scale:1,
                opacity:1
              })
              if(curr === users.length) curr = 0 ;
              select(".maincard img").src = users[curr].displaypicture;
              curr ++
              maincard.classList.remove("maincard")
              incommingcard.classList.add("maincard")
              maincard.classList.add("incomming-card")
            }
        })
    
        tl.to(".maincard" , {
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:0.9
        },"a")
    
    
        tl.from(".incomming-card" , {
            scale:0.9,
            opacity:0,
            ease:Circ,
            duration:1.1
        },"a")
    }
  
};


dney.addEventListener("click", function(){
    imageChange()
    setData(curr - 1)
    gsap.from(".details .element" , {
        y:"100%",
        opacity:0,
        duration:1.2,
        stagger:0.1,
        ease:Power4,
    })
});

  
(function containerCreater(){
    document.querySelectorAll(".element")
    .forEach(function(elem){
      let div =  document.createElement("div")
      div.classList.add(`${elem.classList[1]}container`)
      div.appendChild(elem)
      select(".details").appendChild(div)
      console.log(div)

    })
})()


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch((err) => console.log("Service Worker Registration Failed", err));
    });
  }
  