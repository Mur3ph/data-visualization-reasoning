while True:
    name= input("What do you want the main character to be called?")
    gender = input("Are they a boy or girl?")

    if gender == "boy" or gender == "girl":
        print("Lets get on with the story.")
        break

    print("Sorry. You cant have that. Type boy or girl.")

print("Press any key to exit")
input()