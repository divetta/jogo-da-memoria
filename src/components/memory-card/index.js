const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = ` 
    .memory-card-group {
      transition: transform 700ms;
      transform-style: preserve-3d;
      position: relative;
      width: 155px;
      height: 155px;
      padding-top: 10px;
    }

    .memory-card-group.-active {
      transform: rotateY(180deg);
    }
  
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: absolute;
      cursor: pointer;
      backface-visibility: hidden;
    }
 
    .memory-card.-front {
      background-color: #fff;
      transform: rotateY(180deg);
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
  
    .memory-card > .icon::selection {
      color: transparent;
      opacity: 0;
    }

    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }

    .memory-card.-front > .icon::selection {
      color: transparent;
      opacity: 0;
    }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) => `
    <div class="memory-card-group" onClick="handleClick(this)">
      <article class="memory-card">
        <img  
          src="img/icon-collabcode.png"
          alt="Gueio: icone da collabcode"
          class="icon"
        />
      </article>
      <article class="memory-card -front">
        <img  
          src="${src}"
          alt="${alt}"
          class="icon"
        />          
      </article>  
    </div>
  `;
};

const handleClick = me => me.classList.toggle("-active");
