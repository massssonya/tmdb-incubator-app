import { useNavigate } from 'react-router-dom';
import {ROUTES} from "../routes/routes"
import {Search} from "../components/Search"
import {useForm} from "../hooks/useForm"
import {SectionLayout} from "../components/SectionLayout"
import {Container, Typography} from '@mui/material'

export function MainPage(){
	const navigate = useNavigate();

    const formMethods = useForm(
        { search: '' },
        (data) => navigate(`/${ROUTES.SEARCH}?query=${data.search}`),
        0,
        false
    );

	const reset = () => {
		formMethods.update('search', '')
	}

	return (
		<SectionLayout>
			<h1>Home</h1>
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
		</SectionLayout>
	);
}
