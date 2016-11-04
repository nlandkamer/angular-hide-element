# angular-hide-element

<h3>'angular-hide-element' is an angular module meant to make hiding and showing elements based on window width and or conditional values easier.</h3>

To use angular-hide-element, add the <code>hide-element</code> attribute to any html element. By default, this will always hide the element.

<code>hide-min</code>, <code>hide-max</code>, and <code>is-hidden</code> are the other values that can be defined to use this directive to it's maximum potential, and there are examples of using each in index.html.<br />

If you define <code>hide-min="800"</code>, the element will be hidden anytime after the window width is over 800px.<br />
If you define <code>hide-max="800"</code>, the element will be hidden anytime before the window width is under 800px.<br />
Define <code>hide-min="600" hide-max="800"</code> and the element will be hidden before  a window width of 600px and after a window width of 800px.<br />
Define <code>hide-min="800" hide-max="600"</code> and the element will be hidden only between 600px and 800px window width.<br />

<code>is-hidden</code> is true by default since, if you are using this directive, you probably WANT the element hidden at some point.
If you want to hide the element dynamically, say with an angular variable, you can define <code>is-hidden</code> with the variable value.

If you have an angular scope variable of 'someVal', you would use it like this:<br />
<code>
  &lt;div hide-element is-hidden="someVal" hide-min="800" hide-max="700" &gt;&lt;/div&gt;
</code>
<br />
All code here will be hidden if the window width is between 700px and 800px and <code>someVal</code> is true.
