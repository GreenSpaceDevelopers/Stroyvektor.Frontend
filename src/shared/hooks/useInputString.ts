import { useState, ChangeEvent } from "react";

export default function useInputString(initialValue: string) {
    const [value, setValue] = useState<string>(initialValue);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    const reset = () => {
        setValue('');
    };
    
    return {
        value,
        setValue, 
        onChange,
        reset
    }
}
