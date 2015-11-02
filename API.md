# music.note.midi API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="midi"><span class="type-signature"></span>midi<span class="signature">(note)</span><span class="type-signature"> &rarr; {Integer}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the midi number of a note</p>
<p>The note can be an string in scientific notation or a <a href="https://github.com/danigb/pitch-array">pitch-array</a></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>note</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the note in string or array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.note.midi/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.note.midi/blob/master/index.js#L8">lineno 8</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the midi number</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Integer</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>midi('A4') // => 69
midi('A3') // => 57</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->