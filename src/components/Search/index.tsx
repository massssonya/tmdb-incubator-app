import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './styles.module.css';

interface SearchProps<T extends object> {
    form: T;
    fieldName: keyof T; 
    update: <K extends keyof T>(name: K, value: T[K]) => void;
    submit: () => void;
    reset: () => void;
    placeholder?: string;
    buttonText?: string;
}

export function Search<T extends object>({ 
    form, 
    fieldName, 
    update, 
    submit, 
    reset, 
    placeholder = "Search...", 
    buttonText = "Search" 
}: SearchProps<T>) {
    const value = String(form[fieldName] || '');

    return (
        <form 
            onSubmit={(e) => { 
                e.preventDefault(); 
                submit(); 
            }} 
            className={styles['search-form']}
        >
            <div className={styles['search-container']}>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    className={styles['search-input']} 
                    value={value}
                    onChange={e => update(fieldName, e.target.value as unknown as T[keyof T])}
                />
                {value && (
                    <button 
                        aria-label="Clear search"
                        className={styles['search-input-reset']} 
                        type="button" 
                        onClick={reset}
                    >
                        <ClearIcon className="icon" />
                    </button>
                )}
            </div>
            <Button 
                variant="contained" 
                disabled={!value} 
                type="submit"
            >
                {buttonText}
            </Button>
        </form>
    );
}