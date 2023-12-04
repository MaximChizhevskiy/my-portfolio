import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {SocialsIconsList} from "../../components/socialsIcons/SocialsIconsList";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakPoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div>
            <S.Header>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        {width < breakPoint
                            ? <MobileMenu/>
                            : <DesktopMenu/>}
                        <SocialsIconsList/>
                    </FlexWrapper>
                </Container>
            </S.Header>
        </div>
    );
};
