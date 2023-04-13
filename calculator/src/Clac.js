import  './Style.css'

const Clac=()=>{
     function Clear(){
        let str=document.getElementById('mytext').value;
        let newText=str.slice(0,-1)
        document.getElementById('mytext').value=newText;
     }
     function AllClear(){
        let newText = ""
        document.getElementById('mytext').value=newText;
     }


    return(
        <>
         <div class="clac">
        <input type="text" id="mytext" readOnly/>
        <input type="button" className='b' id="b1" name="" value="1" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b1').value} />
        <input type="button" className='b' id="b2" name="" value="2" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b2').value} />
        <input type="button" className='b' id="b3" name="" value="3" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b3').value} />
        <input type="button" className='b' id="bplus" name="" value="+" onClick={()=>document.getElementById('mytext').value+=document.getElementById('bplus').value} /><br/><br/>
        <input type="button" className='b' id="b4" name="" value="4" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b4').value} />
        <input type="button" className='b' id="b5" name="" value="5" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b5').value}/>
        <input type="button" className='b' id="b6" name="" value="6" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b6').value}/>
        <input type="button" className='b' id="bmin" name="" value="-" onClick={()=>document.getElementById('mytext').value+=document.getElementById('bmin').value} /><br/><br/>
        <input type="button" className='b' id="b7" name="" value="7" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b7').value}/>
        <input type="button" className='b' id="b8" name="" value="8" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b8').value}/>
        <input type="button" className='b' id="b9" name="" value="9" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b9').value}/>
        <input type="button" className='b' id="bmul" name="" value="*"onClick={()=>document.getElementById('mytext').value+=document.getElementById('bmul').value} /><br/><br/>
        <input type="reset"  className='b' id="bclr" name="" value="clear" onClick={Clear} />
        <input type="button" className='b' id="b0" name="" value="0" onClick={()=>document.getElementById('mytext').value+=document.getElementById('b0').value} />
        <input type="button" className='b' id="bequal" name="" value="=" onClick={()=>document.getElementById('mytext').value = eval(document.getElementById('mytext').value)} />
        <input type="button" className='b' id="bdiv" name="" value="/" onClick={()=>document.getElementById('mytext').value+=document.getElementById('bdiv').value} />
        <input type="reset" className='b' id="bdlt" name="" value="Delete" onClick={AllClear} />
        <input type="button" className='b' id="bsqrt" name="" value="Sqrt" onClick={()=>{
            const str = document.getElementById('mytext').value;
            let txt=parseInt(str);
            let newText= Math.sqrt(txt);
            document.getElementById('mytext').value=newText;
        }} />
        <input type="reset" className='b' id="bsin" name="" value="Sin0" onClick={()=>{
            const str = document.getElementById('mytext').value;
            let txt=parseInt(str);
            let newText= Math.sin(txt)
            document.getElementById('mytext').value=newText;
        }} />
        <input type="reset" className='b' id="bcos" name="" value="Cos0" onClick={()=>{
            const str = document.getElementById('mytext').value;
            let txt=parseInt(str);
            let newText= Math.cos(txt)
            document.getElementById('mytext').value=newText;
        }} />
        <input type="reset" className='b' id="btan" name="" value="Tan0" onClick={()=>{
            const str = document.getElementById('mytext').value;
            let txt=parseInt(str);
            let newText= Math.tan(txt)
            document.getElementById('mytext').value=newText;
        }} />
        <input type="reset" className='b' id="blog" name="" value="Log" onClick={()=>{
            const str = document.getElementById('mytext').value;
            if(str===""){
            document.getElementById('mytext').value="Please Enter any value";
            }
            else{
            let txt=parseInt(str);
            let newText= Math.log(txt);
            document.getElementById('mytext').value=newText;
            }
        }} />

  </div>
        
        
        </>
    );
}
export default Clac;