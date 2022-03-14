const separateTextToLine = (element, text, lineStyle, textStyle, delay) => {
  let lineArr = [];
  const font = window.getComputedStyle(element).getPropertyValue("font");

  const elementWidth = element.offsetWidth;
  if (elementWidth === 0) return;

  const getTextWidth = (text) => {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  };

  let textWidth = getTextWidth(text);

  const word = text.split("");
  let index = 0;

  let disable = 0;

  while (textWidth > 0) {
    let lineWidth = 0;
    let counter = 0;
    let line = "";
    let spaceIndex;

    while (lineWidth < elementWidth && counter < word.length) {
      if (lineWidth + getTextWidth(word[counter]) > elementWidth) {
        counter--;
        break;
      }

      if (word[counter] === " ") spaceIndex = counter;
      line += word[counter];

      lineWidth = getTextWidth(line);
      counter++;
    }

    if (disable < 1) {
      if (word[counter - 1] !== " " && counter !== word.length) {
        counter = spaceIndex;
      }
    } else {
      disable = 0;
    }

    let singleLine = word.splice(0, counter);

    if (singleLine.join("").length === 0) disable++;

    lineArr.push(
      <div key={index} className="measure-line" style={lineStyle}>
        <p style={{ ...textStyle, animationDelay: `${delay * index}ms` }}>
          {singleLine.join("")}
        </p>
      </div>
    );
    index++;
    textWidth = getTextWidth(word.join(""));
  }
  return lineArr;
};

// function getTextWidth(text, font) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");

//   context.font = font || getComputedStyle(document.body).font;

//   return context.measureText(text).width;
// }
// const krajReci = (txt, txt2) => {
//   //txt je original
//   if (txt.length == txt2.length) return txt2;
//   if (txt.substr(txt2.length, txt.length)[0] != " ") {
//     const arr = txt2.split(" ");
//     arr.pop();
//     return arr.join(" ");
//   } else {
//     return txt2;
//   }
// };
// function bruteForceWidth(t, sirina) {
//   let sirinaBruteforced;
//   let i = 1;
//   do {
//     sirinaBruteforced = getTextWidth(t.substr(0, i));
//     i++;
//   } while (Number(sirinaBruteforced) < Number(sirina) && i < t.length);
//   if (getTextWidth(t.substr(0, i)) > sirina)
//     while (getTextWidth(t.substr(0, i)) > sirina) i--;
//   let nekitekst = t.substr(0, i);
//   if (nekitekst.includes(" ")) {
//     nekitekst = krajReci(t, nekitekst);
//     i = nekitekst.length;
//   }
//   return { text: nekitekst, len: i };
// }
// const separateTextToLine = (element, text, lineStyle, textStyle, delay) => {
//   element.innerHTML = "";
//   const width = getTextWidth(text);
//   const widthContainer = element.offsetWidth;
//   if (widthContainer == 0) return;
//   if (width < widthContainer) {
//     let p = document.createElement("p");
//     p.innerText = text;
//     element.append(p);
//   } else {
//     let noviTekst = text;
//     do {
//       if (getTextWidth(noviTekst.substr(0, 1) > widthContainer)) break;
//       const txt = bruteForceWidth(noviTekst, widthContainer);
//       let p = document.createElement("p");
//       p.innerText = txt.text;
//       noviTekst = noviTekst.substr(txt.len, noviTekst.length);
//     } while (noviTekst.length > 0);
//   }
// };

export default separateTextToLine;
