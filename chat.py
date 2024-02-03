import spacy

#Loading the Italian language model
nlp = spacy.load("it_core_news_sm")

# Process a sentence
sentence = "Hello World"
doc = nlp(sentence)

# Print tokens and their part-of-speech tags
for token in doc:
    print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_, token.shape_, token.is_alpha, token.is_stop)