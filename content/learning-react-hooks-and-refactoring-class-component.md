---
title: Learn React Hooks and refactoring Class Component
date: Jul 07, 2019
author: Farhan Tahir
category: react
url: learning-react-hooks-and-refactoring-class-component
---

With React 16.8, we get major imporements and enhancments in functional components. Before that, functional components were used for presentaional purposes and if you need state logic in your components or if you need show/update data from/to Redux etc. you needed to have Class based components.


One of major change in React 16.8 is ability of functions to be able to use states using hooks.


Hooks are simple functions which enables your component to use special React features, like states, lifecycle methods, connecting to stores etc.

In following example We are using `useState` hooks from react to use state withing functional component.

```javascript
import React, { useState } from "react";

const AlertMsg = () => {
  const [showMsg, setShowMsg] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowMsg(true)}>Show's a msg on click</button>
      {showMsg && <p>I'm a message</p>}
    </div>
  );
};

export defaul AlertMsg;
```

