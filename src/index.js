module.exports = function check(str, bracketsConfig) {
  let arr=[]
  const opening=[]
  const closing=[]  

  bracketsConfig.forEach((el)=>{
    el.forEach((subEl,i)=>{
      if(i==0){
        opening.push(subEl)
      }else {
        closing.push(subEl)
      }
    })
  })

  let flag = false
  str.split('').forEach((el)=>{
    if (opening.includes(el) && el != '|'  && el != '7' && el != '8'){
      arr.push(el)
      console.log(arr)
    }else if(el=='|' && !flag || el=='7' && !flag || el=='8' && !flag){
      flag = true
      arr.push(el)
    } else if(closing.includes(el)){
    const pair = opening[closing.indexOf(el)]
    if (arr[arr.length-1] == pair ){
      arr.pop()
    }else {
      arr.push(el)
    }
  }
})
return(arr.length==0)
}
