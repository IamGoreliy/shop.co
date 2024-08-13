export const animationSection = (
    positionScrollY,
    positionYSectionOnSale,
    positionYSectionBestsellers,
    positionYSectionFindStyle,
    positionYSectionComments,
    setPositionYSectionOnSale,
    setPositionYSectionBestsellers,
    setPositionYSectionFindStyle,
    setPositionYSectionComments,
    setShowSectionOnSale,
    setShowSectionBestsellers,
    setShowSectionFindStyle,
    setShowSectionComments,
    sectionOnSale,
    sectionBestsellers,
    sectionFindStyle,
    sectionComments,

) => {
    if (!positionYSectionOnSale){
        const element = sectionOnSale.current;
        const rect = element.getBoundingClientRect();
        setPositionYSectionOnSale(rect.top);
    }
    if (!positionYSectionBestsellers){
        const element = sectionBestsellers.current;
        const rect = element.getBoundingClientRect();
        setPositionYSectionBestsellers(rect.top);
    }

    if (!positionYSectionFindStyle){
        const element = sectionFindStyle.current;
        const rect = element.getBoundingClientRect();
        setPositionYSectionFindStyle(rect.top);
    }
    if (!positionYSectionComments){
        const element = sectionComments.current;
        const rect = element.getBoundingClientRect();
        setPositionYSectionComments(rect.top);
    }

    if (positionYSectionOnSale && positionScrollY + 800 >= positionYSectionOnSale) {
        setShowSectionOnSale(true);
    } else {
        setShowSectionOnSale(false);
    }
    if (positionYSectionBestsellers && positionScrollY + 900 >= positionYSectionBestsellers) {
        setShowSectionBestsellers(true);
    } else {
        setShowSectionBestsellers(false);
    }
    if (positionYSectionFindStyle && positionScrollY + 1100 >= positionYSectionFindStyle) {
        setShowSectionFindStyle(true);
    } else {
        setShowSectionFindStyle(false);
    }
    if (positionYSectionComments && positionScrollY + 1100 >= positionYSectionComments) {
        setShowSectionComments(true);
    } else {
        setShowSectionComments(false);
    }
}