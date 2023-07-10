export const getBackgroundColor = (magnitude) => {
    if (magnitude >= 6) {
        return '#6e000b';
    } else if (magnitude >= 5) {
        return '#de0b39';
    } else if (magnitude >= 4) {
        return '#a209e6';
    } else if (magnitude >= 3) {
        return '#db9309';
    } else if (magnitude >= 2) {
        return '#91aba3';
    } else {
        return '#95bfa7'; //
    }
};

export const getItemBGColor = (magnitude) => {
    if (magnitude >= 6) {
        return '#9e7e81';
    } else if (magnitude >= 5) {
        return '#e07e93';
    } else if (magnitude >= 4) {
        return '#c987e6';
    } else if (magnitude >= 3) {
        return '#dec087';
    } else if (magnitude >= 2) {
        return '#bddbd2';
    } else {
        return '#c8e0d2';
    }
};