
export const classes = (...cls: string[] | any) => {
    const arr = []
    for(let cl of cls){
        if(typeof cl === 'string') arr.push(cl)
        else if(cl) {
            const key = Object.keys(cl)[0]
            cl[key] && arr.push(key)
        }
    }
    return arr.join(' ')
} 