import React, {FC} from "react";
import s from "./Header.module.sass"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
interface Props{

}

export const Header: FC<Props> = () => {
return <header className={s.header}>
        <div className={s.wrapper}>
            <GlobalSvgSelector id={'headerLogo'}/>
            <p className={s.title}>React Weather</p>
        </div>

        <div className={s.wrapper}>
   <div className={s.changeTheme}>
       <GlobalSvgSelector id={'changeTheme'}/>
       <select name="select">
           <option value="value1">Значение 1</option>
           <option value="value2" selected>Значение 2</option>
           <option value="value3">Значение 3</option>
       </select>
   </div>
        </div>

</header>
}