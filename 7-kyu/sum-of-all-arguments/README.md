<h2><a href=https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript target="_blank">Sum of all arguments</a></h2><h3>7 kyu</h3><p>Write a function that finds the sum of all its arguments.</p><p>eg:</p><pre><code class="language-javascript"><span class="cm-variable">sum</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>) <span class="cm-comment">// =&gt; 6</span><span class="cm-variable">sum</span>(<span class="cm-number">8</span>, <span class="cm-number">2</span>) <span class="cm-comment">// =&gt; 10</span><span class="cm-variable">sum</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>) <span class="cm-comment">// =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-php"><span class="cm-variable">sum</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>) <span class="cm-comment">// =&gt; 6</span><span class="cm-variable">sum</span>(<span class="cm-number">8</span>, <span class="cm-number">2</span>) <span class="cm-comment">// =&gt; 10</span><span class="cm-variable">sum</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>) <span class="cm-comment">// =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-python"><span class="cm-variable">sum_args</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>) <span class="cm-comment"># =&gt; 6</span><span class="cm-variable">sum_args</span>(<span class="cm-number">8</span>, <span class="cm-number">2</span>) <span class="cm-comment"># =&gt; 10</span><span class="cm-variable">sum_args</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>) <span class="cm-comment"># =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">sum</span> <span class="cm-number">1</span><span class="cm-punctuation">,</span> <span class="cm-number">2</span><span class="cm-punctuation">,</span> <span class="cm-number">3</span> <span class="cm-comment"># =&gt; 6</span><span class="cm-variable">sum</span> <span class="cm-number">8</span><span class="cm-punctuation">,</span> <span class="cm-number">2</span> <span class="cm-comment"># =&gt; 10</span><span class="cm-variable">sum</span> <span class="cm-number">1</span><span class="cm-punctuation">,</span> <span class="cm-number">2</span><span class="cm-punctuation">,</span> <span class="cm-number">3</span><span class="cm-punctuation">,</span> <span class="cm-number">4</span><span class="cm-punctuation">,</span> <span class="cm-number">5</span> <span class="cm-comment"># =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-ruby"><span class="cm-variable">sum</span> <span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span> <span class="cm-comment"># =&gt; 6</span><span class="cm-variable">sum</span> <span class="cm-number">8</span>, <span class="cm-number">2</span> <span class="cm-comment"># =&gt; 10</span><span class="cm-variable">sum</span> <span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span> <span class="cm-comment"># =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-clojure"><span class="cm-bracket">(</span><span class="cm-builtin">sum</span> <span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">3</span><span class="cm-bracket">)</span> <span class="cm-comment">; =&gt; 6</span><span class="cm-bracket">(</span><span class="cm-builtin">sum</span> <span class="cm-number">8</span> <span class="cm-number">2</span><span class="cm-bracket">)</span> <span class="cm-comment">; =&gt; 10</span><span class="cm-bracket">(</span><span class="cm-builtin">sum</span> <span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">3</span> <span class="cm-number">4</span> <span class="cm-number">5</span><span class="cm-bracket">)</span> <span class="cm-comment">; =&gt; 15</span></code></pre><pre style="display: none;"><code class="language-c"><span class="cm-variable">sum</span>(<span class="cm-number">3</span>, <span class="cm-number">10</span>, <span class="cm-number">20</span>, <span class="cm-number">3</span>); <span class="cm-comment">// --&gt; 33</span><span class="cm-variable">sum</span>(<span class="cm-number">2</span>, <span class="cm-number">10</span>, <span class="cm-number">15</span>); <span class="cm-comment">// --&gt; 25</span><span class="cm-variable">sum</span>(<span class="cm-number">1</span>, <span class="cm-number">10</span>); <span class="cm-comment">// --&gt; 10</span><span class="cm-variable">sum</span>(<span class="cm-number">0</span>); <span class="cm-comment">// --&gt; 0</span></code></pre><hr><h5 id="tips">TIPS:</h5><p>ruby/python : <a href="http://lmgtfy.com/?q=Ruby+splat+operator" data-turbolinks="false" target="_blank">http://lmgtfy.com/?q=Ruby+splat+operator</a></p><p>JS/Coffeescript : <a href="http://lmgtfy.com/?q=Javascript+arguments+variable" data-turbolinks="false" target="_blank">http://lmgtfy.com/?q=Javascript+arguments+variable</a></p><p>C: <a href="https://www.geeksforgeeks.org/variadic-functions-in-c/" data-turbolinks="false" target="_blank">https://www.geeksforgeeks.org/variadic-functions-in-c/</a></p>