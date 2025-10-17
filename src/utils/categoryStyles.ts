export const getCategoryStyles = (categoryId?: string) => {
    switch (categoryId) {
        case 'linguagens':
            return {
                bgColor: '#F1EEFF',
                textColor: '#34238C'
            };
        case 'matematica':
            return {
                bgColor: '#ECF4FF',
                textColor: '#2569C3'
            };
        case 'natureza':
            return {
                bgColor: '#DBFAE3',
                textColor: '#24a31a'
            };
        case 'humanas':
            return {
                bgColor: '#FFF4D1',
                textColor: '#967200'
            };
        default:
            return {
                bgColor: '#F1EEFF',
                textColor: '#34238C'
            };
    }
};
