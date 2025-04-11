import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#0c2',
                position: 'relative',
                width: '147px',
                height: '4px',
                '& .MuiSlider-thumb': {
                    border: '1px solid #0c2',
                    backgroundColor: '#fff',
                },
                '& .MuiSlider-thumb::after': {
                    content: '""',
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '100%',
                    backgroundColor: '#0c2',
                    boxShadow: '0 0 2px 0 rgba(29, 33, 38, 0.1), 0 0 40px 0 rgba(29, 33, 38, 0.13)',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
