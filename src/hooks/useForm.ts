import {useState, useEffect,useMemo,useCallback,useRef, type ChangeEvent} from "react"
import {useDebounce} from "./useDebounce"

export function useForm<T>(
    initState:T, 
    callback: (data: T) => void, 
    delay: number = 300,
    autoSubmit: boolean = true
    ){
    const [form, setForm] = useState<T>(initState)
    const debouncedForm = useDebounce(form, delay);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const update = useCallback((name: keyof FormState, value: any) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    const submit = useCallback((e?) => {
        callbackRef.current(form);
    }, [form]);

    useEffect(() => {
        if (autoSubmit && debouncedForm) {
            callbackRef.current(debouncedForm);
        }
    }, [debouncedForm, autoSubmit]);

    return {
        form,
        update,
        submit
    }
}