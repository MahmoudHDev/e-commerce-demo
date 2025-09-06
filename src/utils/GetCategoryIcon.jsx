import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faTv,
    faLaptop,
    faMobile,
    faBlenderPhone,
    faMoneyCheckDollar,
    faFlag,
    faGamepad,
    faDumpster
} from '@fortawesome/free-solid-svg-icons';

function GetCategoryIcon({ category }) {

    switch (category) {
        case "audio":
            return <FontAwesomeIcon icon={faMusic} size="xl" />
        case "tv":
            return <FontAwesomeIcon icon={faTv} size="xl" />
        case "laptop":
            return <FontAwesomeIcon icon={faLaptop} size="xl" />
        case "mobile":
            return <FontAwesomeIcon icon={faMobile} size="xl" />
        case "appliances":
            return <FontAwesomeIcon icon={faBlenderPhone} size="xl" />
        case "price":
            return <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl" />
        case "brand":
            return <FontAwesomeIcon icon={faFlag} size="xl" />
        case "gaming":
            return <FontAwesomeIcon icon={faGamepad} size="xl" />
        case "all":
            return <FontAwesomeIcon icon={faDumpster} size="xl" />
        default:
            return <></>;
    };
};

export default GetCategoryIcon;