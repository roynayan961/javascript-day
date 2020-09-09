var chocolateBars = ['Mimi', 'Kitkat', 'yankee', 'snkickers', 'Mars', 'Bounty', 'Twix']
chocolateBars.reverse()
for(var i=0; i<chocolateBars.length; i++)
{
var counter = i+1;
var charSuffix;
if(i==0){
    charSuffix = 'st'


}
else if(i==1)
{
charSuffix = 'nd'

}
else if (i==2)
{

    charSuffix = 'rd'
}
else {
    charSuffix = 'th'
}
console.log("My " +counter +charSuffix + " choice is " +chocolateBars[i])
}