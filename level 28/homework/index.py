def count_words(text)
    words = text()
    return len(words)
text = input("enter the text:")
print("number of words:", count_words(text))