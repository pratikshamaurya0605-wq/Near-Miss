import random

computer= random.choice([0,-1,1])
youstr =  input("enter your choice:")
youdict = {"s":1,"w":-1,"g":0}
reversedict = {1:"snake",-1:"water",0:"gun"}

if youstr not in youdict:
    print("Invalid input! Please enter s, w, or g.")
    exit()
you = youdict[youstr]
#By now we have two numbers(variables),you and computer

print(f"you chose{reversedict[you]}")
print(f"computer chose{reversedict[computer]}")

'''
1  snake
-1 water
0  gun

'''

if(computer==you):
    print("its a draw")

else:
    if(computer==-1 and you==1):
        print("you win!")
    elif(computer==-1 and you==0):
         print("you lose!")
    elif(computer==1 and you==-1):
        print("you lose!")
    elif(computer==1 and you==0):
        print("you win!")
    elif(computer==0 and you==1):
        print("you lose!")
    elif(computer==0 and you==-1):
        print("you win!")
    else:
        print("something went wrong")   