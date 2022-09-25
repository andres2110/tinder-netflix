import { MAX_TITLE } from "./constants";
export const fnReplaceTitle= (sTitle) => {
    if( sTitle.length <= MAX_TITLE) return sTitle;
    // let sTitle = "Un titulo muy muy palabrota que ya nada tiene que ver con esto";
    let sTitleSlice = sTitle.slice(0,MAX_TITLE - 1);
    let aTitleSplit = sTitleSlice.split(" ");
    aTitleSplit[aTitleSplit.length - 1] = "...";
    let sNewTitle = "";
    aTitleSplit.forEach((sText)=>{
        sNewTitle = sNewTitle.concat(`${sText} `);
    })
    return sNewTitle;
}