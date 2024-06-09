import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import PropTypes from 'prop-types';
import style from './ScreenHeaderBtn.style'

interface ScreenHeaderBtnProps {
    iconUrl: ImageSourcePropType;
    dimension: number | string
}

const ScreenHeaderBtn : React.FC<ScreenHeaderBtnProps>  = ({iconUrl, dimension}) => {
    return (
        <TouchableOpacity style={style.btnContainer}>
            <Image 
            source={iconUrl}
            resizeMode="cover"
            style={style.btnImg(dimension)}
            />
        </TouchableOpacity>
    );
}


export default ScreenHeaderBtn
