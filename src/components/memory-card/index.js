const createMemoryCard = front => {
  const articleClass = front ? "'memory-card -front'" : "'memory-card'";
  const imageSrc = front ? "'img/icon-c.png'" : "'img/icon-collabcode.png'";
  const imageAlt = front ? "'Livro de C++'" : "'Gueio mascote da CollabCode'";

  return `
    <article class=${articleClass}>
      <img  
        src=${imageSrc}
        alt=${imageAlt} 
        class='icon'
        onClick="handleClick()"
      />    
    </article>  
  `;
};

function handleClick() {
  console.log("ae");
}
