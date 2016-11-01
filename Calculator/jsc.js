
document.addEventListener("keypress", keyfunc);
function keyfunc(key)
{
    var text;
    if((key.charCode>=42 && key.charCode<=57)||key.charCode==13||key.charCode==127||key.code=="Backspace"|| key.code=="NumpadEnter" || key.code=="Enter"||key.code=="Delete"){
        if(key.charCode==13 || key.code=="NumpadEnter" || key.code=="Enter")
            text='=';
        else if(key.code=="Backspace")
            text='x';
        else if(key.charCode==127 || key.code=="Delete")
            text='C';
        else
            text = String.fromCharCode(key.charCode);
        insertText(text);
    }
}
function insertText(text)
      {

        var elem = document.getElementById("Result");
            
            if(text=='=')
            {
                elem.value = eval(elem.value);

            }
            else if(text=='C' || text=='CE')
            {
                elem.value = ''+'0';
            }
            else if(text=='x')
            {
                if(elem.value.length==1){
                    elem.value='0';
                }
                else elem.value = elem.value.slice(0,-1);
            }
            else if(text=='+-')
            {
                if(elem.value[0]=='-') elem.value = elem.value.slice(1,elem.value.length);
                else 
                    elem.value = '-'+elem.value;
            }
            else{
                if(elem.value.length==1 && elem.value=='0')
                {
                    elem.value = '';
                }
                if((text=='+' || text=='-' || text=='*' || text=='/') && (elem.value.slice(-1)=='+' || elem.value.slice(-1)=='-' || elem.value.slice(-1)=='*' || elem.value.slice(-1)=='/'))
                {
                    elem.value = elem.value.slice(0,-1)
                }
                if(elem.value[0]=='*' || elem.value[0]=='/')
                    elem.value = elem.value.slice(1,elem.value.length)+text;
                else 
                    {
                        if(elem.value.split('.').length-1==1 && text=='.' && (elem.value.split('+').length-1==0 && elem.value.split('-').length-1==0 && elem.value.split('*').length-1==0 && elem.value.split('/').length-1==0))
                        {
                            elem.value = elem.value + '';
                        }
                        else
                            elem.value = elem.value + '' +text;
                    }
               
            }
      }