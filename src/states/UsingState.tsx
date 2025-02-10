import { useState } from "react";

const UsingState = () => {
    // buat componen yg menyimpan data secara dinamis
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <div>
            <p>Counter value : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default UsingState;