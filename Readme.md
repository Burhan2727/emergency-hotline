<h1>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h1>
<p>
getElementById -> Select an element by its unique id <br>

getElementsByClassName -> Selects all elements with a given same class name and returns <b>HTMLCollection</b> (array-like) <br>

querySelector -> Selects the first element that matches a CSS selector <br>

querySelectorAll -> Selects all elements that match a CSS selector and return <b>NodeList</b> (array-like)
</p>

<h1>2. How do you create and insert a new element into the DOM?</h1>
<p>
<b>three way: </b>
<ol>
    <li>Create the Element</li>
    <li>Set its content or attributes</li>
    <li>Insert it into the dom</li>
</ol>
1.Create the Element -> <b>document.createElement()</b> EXAMPLE 
<b>const newDiv = document.createElement("div")</b> 
<br> <br>

2.Set its content or attributes -> you can add text, classes, IDs, or any other attributes EXAMPLE <b>newDiv.innerText = "Hello"</b> <br>

3.Insert it into the dom -> there are several ways to insert it..
<ul>
    <li>Append as the last child EXAMPLE <b>document.body.appendChild(newDiv)</b></li>
    <li>Prepend as the first child EXAMPLE <b>document.body.prepend(newDiv)</b></li>
    <li>Insert Before a specific element EXAMPLE <b>document.getElementById("btn").insertBefore(newDiv)</b></li>
</ul>
</p>

<h1>3. What is Event Bubbling and how does it work?
</h1>
<p>
Event bubbling is a mechanism in the Dom that defines how events propagate throw the DOM hierarchy when they are triggered
<li><b>How it Works:</b> event starts at the target element where the event was triggered. then it bubbles up throw its ancestores in the DOM tree.at each level , if an event handler is registered for that event type, it will be executed.</li>
</p>

<h1>What is Event Delegation in JavaScript? Why is it useful?</h1>
<p>
event Delegation is a technique of handling events by taking advantage of event bubbling

<li><b>Useful : </b> performance, handle daynamic content, cleaner code, memory efficiency</li>
</p>

<h1>5. What is the difference between preventDefault() and stopPropagation() methods?</h1>

<p>
<li><b>preventDefault() : </b> Prevents the default action that belongs to the event from happening</li>
<li><b>stopPropagation() : </b> stops the event from bubbling or capturing up throw theDOM</li>

</p>