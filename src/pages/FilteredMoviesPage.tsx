import {SectionLayout} from "../components/SectionLayout"
import {FilteredSortForm} from "../components/FilteredSortForm"
import {Container, Stack, Box} from '@mui/material';

export function FilteredMoviesPage(){
	return (
		<SectionLayout>
				<Stack 
					direction="row" 
                    sx={{ 
						boxSizing: 'border-box',
						width: '100%',
						justifyContent: "space-between", 
						gap: "32px", 
						alignItems: "flex-start"
					}}>
				<Box 
					sx={{
                        position: 'sticky',
                        top: '20px',
						height: '100%',
                        flexShrink: 0  
                    }}
				>
					<FilteredSortForm />
				</Box>
					<div style={{border: '1px solid black', height:"2000px",  flexGrow: 1,}}></div>
				</Stack>
		</SectionLayout>
	);
}

