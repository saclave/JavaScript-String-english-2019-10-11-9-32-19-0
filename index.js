// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
<script>
var name = 'hello';
document.write(name.toUpperCase());
</script>



// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
<script>
var sentence = 'good afternoon, mr mike.';

document.write(sentence.toLowerCase().split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(' '));
</script>



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
<script>
var money = '￥20';

document.write(money.replace('￥', '')); 
</script>