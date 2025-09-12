import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShirt,
    faBolt,
    faCouch,
    faShoePrints,
    faBoxOpen,
    faTentArrowDownToLine,
    faVials,
    faEnvelopesBulk,
    faDumpster,
    faCartShopping,
    faSprayCanSparkles,
    faTree
} from '@fortawesome/free-solid-svg-icons';

function GetCategoryIcon({ category }) {

    switch (category) {
        case "clothes":
            return <FontAwesomeIcon icon={faShirt} size="xl" />
        case "electronics":
            return <FontAwesomeIcon icon={faBolt} size="xl" />
        case "furniture":
            return <FontAwesomeIcon icon={faCouch} size="xl" />
        case "shoes":
            return <FontAwesomeIcon icon={faShoePrints} size="xl" />
        case "miscellaneous":
            return <FontAwesomeIcon icon={faBoxOpen} size="xl" />
        case "adso":
            return <FontAwesomeIcon icon={faTentArrowDownToLine} size="xl" />
        case "perfumes":
            return <FontAwesomeIcon icon={faSprayCanSparkles} size="xl" />
        case "testing-category":
            return <FontAwesomeIcon icon={faVials} size="xl" />
        case "new-category":
            return <FontAwesomeIcon icon={faEnvelopesBulk} size="xl" />
        case "all":
            return <FontAwesomeIcon icon={faDumpster} size="xl" />
        case "cart":
            return <FontAwesomeIcon icon={faCartShopping} size="xm" color='white' />

        default:
            return <FontAwesomeIcon icon={faTree} size="xl" />;
    };
};

export default GetCategoryIcon;