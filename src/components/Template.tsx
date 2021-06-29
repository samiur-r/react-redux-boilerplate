import React, { useState } from 'react';

interface TemplateProps {
  propsOne: number
  propsTwo: (someVar: Array<string>) => void
}

const Template: React.FC<TemplateProps> = ({ propsOne, propsTwo }) => {
    const [count, setCount] = useState<number>(propsOne);

    const handleCount = () => {
        setCount((curr) => curr + 1)
		propsTwo(["apples", "oranges"])
    }
	
    return (
        <div>
            <button onClick={handleCount}>increment</button>
            <div>{count}</div>
        </div>
    )
}

export default Template;
