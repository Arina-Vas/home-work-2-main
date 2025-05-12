import React from 'react'
import down from '../../../../assets/img/hw15/Polygon3.png'
import up from '../../../../assets/img/hw15/Polygon4.png'
import s from '../../HW15.module.css'


// добавить в проект иконки и импортировать
const downIcon = {dir: "down", src: down}
const upIcon = {dir: "up", src: up}
const noneIcon = [upIcon, downIcon]


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
    name: string
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
        sort, value, onChange, id = 'hw15', name
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
            style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
        >
            {name}
            {/*сделать иконку*/}
            <div className={s.iconBox} style={{

            }}>
            {Array.isArray(icon) ?
                icon.map((icon, i) => (
                    <img className={`s.${icon.dir}`} key={i} src={icon.src} alt={`sort-${i}`}/>
                )) :
                <img
                    className={`s.${icon.dir}`}
                    alt={'sort'}
                    id={id + '-icon-' + sort}
                    src={icon.src}
                />
            }
 </div>

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
