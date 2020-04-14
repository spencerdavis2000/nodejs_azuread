## Microsoft example of using Nodejs with msal to sign in to azure ad

 I got this tutorial from 
 ```
https://www.youtube.com/watch?v=n6q8Cm-pTYY&list=PLgPhkU4T5tv6ee5AMI4ZttzlVXfsAVDot&index=4
 ```
 
 You have to configure azure correctly
Then I also used https instead so had to follow this tutorial to do that


```
https://www.youtube.com/watch?v=8ptiZlO7ROs
```
For windows users you might have to configure your linux subsystem

To configure linux subsystem on windows simply to go control panel and search for
"Turn windows features on and off"

Then check the box next to "Windows Subsystem for Linux"

Then you should be prompted to restart your computer

Now, you need to go to the microsoft store and install a version of linux for it to work
Checking the box for "Windows Subsystem for Linux" just gets it ready to run linux, but doesn't actually install Linux.

After you clone the project, just open a terminal inside of the project and then to access the "Linux Powers" just type in
```
>bash
```
Then you should see a prompt that looks very different.
You can use this to run the 
```
generate-certificates.sh
```
from the tutorial
```
>bash
>chmod 755 generate-certificates.sh
>./generate-certificates.sh
```
The Linux subsystem generates all of the certs 