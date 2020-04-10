export default{
    filterNum(num){
        if(num>10000){
            return (num/10000).toFixed(2)+'万';
        }
        return num;
    },
    showStyle(type){
        switch(type){
            case 1: return '直接显示';
            case 2: return '鼠标滑显';
            case 3: return '隐藏不显示';
        }
    }
}