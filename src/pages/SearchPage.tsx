import {SectionLayout} from "../components/SectionLayout"
import {Search} from "../components/Search"
import {Container, Typography} from '@mui/material'
import { useSearchParams } from 'react-router-dom';
import {useEffect} from "react"
import {useForm} from "../hooks/useForm"

interface FormState {
	search: string
}

export function SearchPage(){
	const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '' as string;

    const formMethods = useForm<FormState>(
        { search: query },
        (data) => {
            setSearchParams({ query: data.search });
            console.log("запрос:", data.search);
        },
        0,
        false
    );

	const reset = () => {
		setSearchParams('')
		formMethods.update('search', '')
	}

    useEffect(() => {
        if (query) {
            formMethods.update('search', query);
            formMethods.submit();
        }
    }, []);

	return (
		<SectionLayout>
			<h1>Search Results</h1>
			<Container 
				disableGutters={true} 
				sx={{marginTop: "20px"}}
			>
				<Search 
					fieldName="search"
					placeholder="Введите название фильма..."
					reset={reset}
					{...formMethods}
				/>
			</Container>
			<Typography as="p" sx={{marginTop: "20px"}}>Enter a movie title to start searching.</Typography>
		</SectionLayout>
	);
}
