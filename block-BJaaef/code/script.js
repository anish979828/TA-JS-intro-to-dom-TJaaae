let everyone = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);
  let ul = document.querySelector("ul")
  
  everyone.forEach((elm) => {
    let li = document.createElement("li");
    li.classList.add("box");
    let img = document.createElement("img");
    img.classList.add("card");
    img.src = elm.image;
    let h2 = document.createElement("h2");
    h2.innerText = elm.name;
    h2.classList.add("card");
    let p = document.createElement("p");
    p.innerText = elm.description;
    let a = document.createElement("a");
    a.href = elm.wikiLink;
    let btn = document.createElement("button");
    btn.innerText = "Learn More!";
    a.append(btn);
  
    li.append(img, h2, p, a);
    ul.append(li);
  });