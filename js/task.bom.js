//1
const newWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 2000);
setTimeout(() => {
  newWindow.close();
}, 2000);

//2
<p id='text'>I learning JavaScript events!</p>
<div>
  <button onclick="changeCSS()">Change style!</button>
</div>

function changeCSS() {
    var textElement = document.getElementById('text');
    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
}

//3

<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
    </head>
    <body>
        <button id="button1">Change Background to Blue</button>
        <button id="button2">Change Background to Pink</button>
        <button id="button3">Change Background to Brown/White</button>
        <a href="#" id="link">Hover over me</a>
        <script>
            const button1 = document.getElementById('button1');
            const button2 = document.getElementById('button2');
            const button3 = document.getElementById('button3');
            const link = document.getElementById('link');

            button1.addEventListener('click', function () {
                document.body.style.backgroundColor = 'blue';
            });
            button2.addEventListener('dblclick', function () {
                document.body.style.backgroundColor = 'pink';
            });
            button3.addEventListener('mousedown', function () {
                document.body.style.backgroundColor = 'brown';
            });
            button3.addEventListener('mouseup', function () {
                document.body.style.backgroundColor = 'white';
            });
            link.addEventListener('mouseover', function () {
                document.body.style.backgroundColor = 'yellow';
            });
            link.addEventListener('mouseout', function () {
                document.body.style.backgroundColor = 'white';
            });
        </script>
    </body>
</html>

//4
<!DOCTYPE html>
<html>
    <head>
        <title>Remove Item from Dropdown</title>
    </head>
    <body>
        <select id="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
        <button onclick="removeSelectedOption()">Remove Selected Option</button>
        <script>
            function removeSelectedOption() {
                const dropdown = document.getElementById('dropdown');
                const selectedOption = dropdown.options[dropdown.selectedIndex];
                if (selectedOption) {
                    dropdown.remove(selectedOption.index);
                }
            }
        </script>
    </body>
</html>


5//
<!DOCTYPE html>
<html>
    <head>
        <title>Button Events</title>
    </head>
    <body>
        <button id="myButton">Press Me</button>
        <script>
            const button = document.getElementById('myButton');

            button.addEventListener('click', function () {
                alert('I was pressed!');
            });

            button.addEventListener('mouseenter', function () {
                alert('Mouse on me!');
            });

            button.addEventListener('mouseleave', function () {
                alert('Mouse is not on me!');
            });
        </script>
    </body>
</html>



//6

<!DOCTYPE html>
<html>
    <head>
        <title>Window Resize Tracking</title>
    </head>
    <body>
        <p>window widht: <span id="widthValue"></span> pixels</p>
        <p>window height: <span id="heightValue"></span> pixels</p>
        <script>
            function updateWindowSize() {
            const widthValue = document.getElementById('widthValue');
            const heightValue = document.getElementById('heightValue');

            widthValue.textContent = window.innerWidth;
            heightValue.textContent = window.innerHeight;
            }
            updateWindowSize();
            window.addEventListener('resize', updateWindowSize);
        </script>
    </body>
</html>


//7

<!DOCTYPE html>
<html>
    <head>
        <title>Country and City Selection</title>
    </head>
    <body>
        <select name="country" id="country">
            <option value="ger">Germany</option>
            <option value="usa">USA</option>
            <option value="ukr">Ukraine</option>
        </select>
        <select name="cities" id="cities"></select>
        <p id="selectedInfo"></p>
        <script>
            const countrySelect = document.getElementById('country');
            const citySelect = document.getElementById('cities');
            const selectedInfo = document.getElementById('selectedInfo');
            const citiesByCountry = {
                ger: ['Berlin', 'Munich', 'Hamburg'],
                usa: ['New York', 'Los Angeles', 'Chicago'],
                ukr: ['Kyiv', 'Kharkiv', 'Lviv'],
            };
            function updateCityOptions() {
                const selectedCountry = countrySelect.value;
                const cities = citiesByCountry[selectedCountry] || [];
                citySelect.innerHTML = '';
                cities.forEach((city) => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            }
            updateCityOptions();
            countrySelect.addEventListener('change', () => {
                updateCityOptions();
                displaySelectedInfo();
            });
            citySelect.addEventListener('change', () => {
                displaySelectedInfo();
            });
            function displaySelectedInfo() {
                const selectedCountry = countrySelect.options[countrySelect.selectedIndex].textContent;
                const selectedCity = citySelect.value || 'N/A';

                selectedInfo.textContent = `Country selected: ${selectedCountry}, City selected: ${selectedCity}`;
            }
        </script>
    </body>
</html>

