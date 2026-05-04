import {useState, useEffect,useMemo,useCallback,useRef, type ChangeEvent} from "react"
import {useDebounce} from "./useDebounce"

export function useForm<T>(initState:T, callback: (data: T) => void, delay: number = 300){
    const [form, setForm] = useState<T>(initState)
    const debouncedForm = useDebounce(form, delay);
    const callbackRef = useRef(callback);

    const reset = useCallback(() => setForm(initState), []);

    const update = useCallback((name: keyof FormState, value: any) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    useEffect(() => {
        if (debouncedForm) {
            callbackRef.current(debouncedForm);
        }
      }, [debouncedForm]);

    return {
        form,
        reset,
        update
    }
}