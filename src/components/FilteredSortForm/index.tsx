import {useMemo} from "react"
import { InputLabel, Select, MenuItem, Box, Typography, Slider, Stack, Button, Container  } from '@mui/material';

import {useForm} from "../../hooks/useForm"
import styles from "./styles.module.css"

const FILTER_ITEMS = [
	{
		label: 'Popularity ↓',
		value: 'popularity.desc'
	},
	{
		label: 'Popularity ↑',
		value: 'popularity.asc'
	},
	{
		label: 'Rating ↓',
		value: 'rating.desc'
	},
	{
		label: 'Rating ↑',
		value: 'rating.asc'
	},
	{
		label: 'Release Date ↓',
		value: 'release_date.desc'
	},
	{
		label: 'Release Date ↑',
		value: 'release_date.asc'
	},
	{
		label: 'Title A-Z',
		value: 'original_title.asc'
	},
	{
		label: 'Title Z-A',
		value: 'original_title.desc'
	},
]

interface FormState {
    sort: string
    rating: number[]
}

const initState: FormState = {
    sort: FILTER_ITEMS[0].value,
    rating: [0,10]
}

export function FilteredSortForm(){
    const {form, update, reset} = useForm(
        initState, 
        (data) => {
            console.log("Данные отправлены:", data)
        }, 200)

    const menuItems = useMemo(() => FILTER_ITEMS.map(item => (
        <MenuItem key={item.value} value={item.value}>
            <Typography className={styles['select-item']}>{item.label}</Typography>
        </MenuItem>
    )), []);

	return(
            <Container component="form" className={styles.container}>
                <h2 className={styles.title}>Filters / Sort</h2>
                <Stack
                    className={styles['select-container']}
                    direction="row"
                    sx={{ 
                        justifyContent: "space-between", 
                        gap: "12px", 
                        alignItems: "center" 
                    }}
                >
                    <Typography className={styles['input-label']} id="filter-form-select-label">Sort by</Typography>
                    <Select
                        name="sort"
                        className={styles.select} 
                        labelId="filter-form-select-label" 
                        id="filter-form-select" 
                        value={form.sort}
                        onChange={(e) => update('sort', e.target.value)}
                    >
                        {menuItems}
                    </Select>
                </Stack>
                <Box>
                    <Stack
                        direction="row"
                        sx={{ 
                            justifyContent: "space-between", 
                            gap: "12px", 
                            alignItems: "center" 
                        }}
                    >
                        <Typography className={styles['input-label']}>Rating</Typography>
                        <Typography className={styles['input-label']}>{form.rating[0]} - {form.rating[1]}</Typography>
                    </Stack>
                    <Slider
                        className={styles.slider}
                        value={form.rating} 
                        step={0.1}
                        min={0}
                        max={10}
                        onChange={(_,newValue) => update('rating', newValue)}
                        disableSwap={true}
                    />
                </Box>
                <Button 
                    size="small" 
                    variant="contained" 
                    fullWidth={false} 
                    onClick={reset} 
                    sx={{ width: 'fit-content', textTransform: 'none' }}
                >
                    Reset filters
                </Button>
            </Container>
	)
}