const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;      
    }

    .memory-card > :first-child {
      display: flex;
    }

    .memory-card > :last-child {
      display: none;
      transform: rotateY(-180deg);
    }    
  
    .memory-card.-front {
      background-color: #fff;
      transform: rotateY(180deg);
    }

    .memory-card.-front > :first-child {
      display: none;
    }

    .memory-card.-front > :last-child {
      display: flex;
    }    
  
    .memory-card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
  
    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }
  
    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px) rotateY(-180deg);
    }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
    <article class="memory-card ${nameClass}" onClick="handleClick(this)">
      <img  
        src="img/icon-collabcode.png"
        alt="Gueio: icone da collabcode"
        class="icon"
      />
      <img  
        src="${src}"
        alt="${alt}"
        class="icon"
      />          
    </article>  
  `;
};

const handleClick = me => me.classList.toggle("-front");
