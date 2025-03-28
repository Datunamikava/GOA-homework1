sample_text = "Hello, how are you today?"
word_count = count_words=(sample_text)
print (word_count)






def check_number():
    try:
        number = float(input("Enter a number: "))
        
        if number > 0:
            print("The number is positive.")
        elif number < 0:
            print("The number is negative.")
        else:
            print("The number is zero.")
    except ValueError:
        print("Please enter a valid number.")

check_number()

