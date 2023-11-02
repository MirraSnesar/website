//1.
//На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//1) першого елемента списку
//2) останнього елемента списку
//3) другого елемента списку
//4) четвертого елемента списку
//5) третього елемента списку
//Приклад:
//•        1
//•        2
//•        3
//•        4
//•        5
//Результат виводу: 1, 5, 2, 4, 3

<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  <button onclick="showOrder()">Show Order</button>
  <div id="modal" style="display: none;">
  </div>

  <script>
    function showOrder() {
      const list = document.getElementById('list');
      const items = list.getElementsByTagName('li');
      const itemTexts = [];
      for (let i = 0; i < items.length; i++) {
        itemTexts.push(items[i].textContent);
      }
      const outputOrder = [
        itemTexts[0],   
        itemTexts[4],  
        itemTexts[1],  
        itemTexts[3], 
        itemTexts[2] 
      ];
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
      modal.textContent = outputOrder.join(', ');
    }
  </script>

</body>
</html>


//2. Для сторінки
//<body>
//<h1>I'am a big header!!!</h1>
//<div id="myDiv">
//<p>First paragraph</p>
//<p>Second paragraph</p>
//<p>Third paragraph</p>
//<p>Fourth paragraph</p>
//</div>
//<ul id="myList">
// <li>Make</li>
// <li>me</li>
//<li>horizontal!</li>
//</ul>
//<span>Make me invisible, please!</span>
//</body>
//Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>I'am a big header!!!</h1>
  <div id="myDiv">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
    <p>Fourth paragraph</p>
  </div>
  <ul id="myList">
    <li>Make</li>
    <li>me</li>
    <li>horizontal!</li>
  </ul>
  <span id="invisible">Make me invisible, please!</span>

  <script>
    const header = document.querySelector('h1');
    header.style.backgroundColor = 'green';
    header.style.fontSize = '40px';
    header.style.fontWeight = 'bold';
    header.style.color = 'black';

    const paragraphs = document.querySelectorAll('div#myDiv p');
    paragraphs[0].style.fontWeight = 'bold';
    paragraphs[0].style.color = 'black';
    paragraphs[0].style.fontSize = '16px';

    paragraphs[1].style.color = 'red';
    paragraphs[1].style.fontSize = '16px';

    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[2].style.color = 'black';
    paragraphs[2].style.fontSize = '14px';

    paragraphs[3].style.fontStyle = 'italic';
    paragraphs[3].style.color = 'black';
    paragraphs[3].style.fontSize = '14px';

    const listItems = document.querySelectorAll('ul#myList li');
    listItems.style.paddingLeft = '50px';

    const invisible = document.getElementById('invisible');
    invisible.style.display = 'none';
  </script>

</body>
</html>


//3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
//<body>
//<main class="mainClass check item">         
//<div id="myDiv">
//<p>First paragraph</p>           
//</div>
//</main> 
//</body>

<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <script>
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';

    const divElement = document.createElement('div');
    divElement.id = 'myDiv';

    const pElement = document.createElement('p');
    pElement.textContent = 'First paragraph';

    divElement.appendChild(pElement);
    mainElement.appendChild(divElement);
    document.body.appendChild(mainElement);
  </script>
</body>
</html>

//4. реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

  <script>
    document.getElementById('submitButton').addEventListener('click', function () {
      const inputs = document.querySelectorAll('.arr');
      const outputDiv = document.getElementById('outputDiv');
      const data = [];

      inputs.forEach(function (input) {
        data.push(`${input.getAttribute('data-form')}: ${input.value}`);
      });

      outputDiv.textContent = data.join('\n');
    });
  </script>

//5. 1) вибрати всі теги із класом circle
  //2) перебрати кожен елемент, і вибрати його data-anim значення
  //3) вибране значення додати як клас за допомогою classList до цього елемента.
  //4) перевірити чи застосувались анімації
  //- вибірка елемента із DOM дерева
  //- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  //- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут

  <script>
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    const dataAnim = circle.getAttribute('data-anim');
    circle.classList.add(dataAnim);
    const animationName = getComputedStyle(circle).animationName;
    if (animationName === 'none') {
      console.log(`Animation not applied to the element with class "circle" and data-anim="${dataAnim}"`);
    } else {
      console.log(`Animation "${animationName}" applied to the element with class "circle" and data-anim="${dataAnim}"`);
    }
  });
</script>

//6. Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.


<script>
  const colors = document.querySelectorAll('.color');
  const priceElement = document.getElementById('outprice');
  let currentPrice = 189.99;
  colors.forEach(color => {
    color.addEventListener('click', function () {
      const colorPrice = parseFloat(color.getAttribute('data-price'));
      currentPrice = colorPrice;
      priceElement.textContent = `$${currentPrice.toFixed(2)}`;
      colors.forEach(c => c.classList.remove('active'));
      color.classList.add('active');
    });
  });
</script>





