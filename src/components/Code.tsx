import React from 'react';

const Code: React.FC = () => (
  <pre>
    {/* eslint-disable-next-line */}
      <div className="comment">// In JavaScript for example</div>
    <div>
      <span className="keyword">const</span> <span className="normal">fn</span>{' '}
      <span className="keyword">=</span> <span className="normal">()</span>{' '}
      <span className="normal">={'>'}</span> <span className="class">Math</span>
      <span className="dot">.</span>
      <span className="keyword">random</span>
      <span className="normal">()</span>
      <span className="dot">;</span>
    </div>
  </pre>
);

export default Code;
