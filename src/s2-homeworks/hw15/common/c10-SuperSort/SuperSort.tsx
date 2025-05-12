import React from 'react'
import down from '../../../../assets/img/hw15/Polygon3.png'
import up from '../../../../assets/img/hw15/Polygon4.png'


// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon =  [down,up]



export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return sort === down ? down : sort === up ? up : '' // исправить
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {Array.isArray(icon) ?
                icon.map((icon, i) => (
                    <img key={i} src={icon} alt={`sort-${i}`}/>
                )) :
                <img
                    alt={'sort'}
                    id={id + '-icon-' + sort}
                    src={icon}
                />
            }


            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
