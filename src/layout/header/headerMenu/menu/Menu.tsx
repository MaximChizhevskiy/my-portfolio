import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contacts",
        href: "contact"
    }
]

export const Menu: React.FC = () => {
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink to={item.href}
                                   smooth={true}
                                   activeClass="active"
                                   spy={true}
                                   offset={5}>
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                })}
            </ul>
        </div>
    );
};
