# Parla.chat

## Current Status and Technical Approach
As of now, ParlaChat is in the early stages of development, focusing on laying the groundwork for its innovative features. The project currently encompasses basic web-based components essential for a chat application, setting the stage for more advanced functionalities.


## Natural Language Processing with spaCy
A significant part of ParlaChat's development involves leveraging spaCy, a leading natural language processing (NLP) library, for text preprocessing. This process is crucial for understanding user queries and commands within the chat environment. Here's how spaCy contributes to ParlaChat's development:

* **Text Preprocessing:** Utilizing spaCy's robust NLP capabilities to clean and prepare text data. This includes tokenization, lemmatization, part-of-speech tagging, and entity recognition, which are essential steps in understanding the context and intent of user messages.

* **Intent Recognition:** The preprocessed text data will serve as input for a machine learning model designed to recognize user intents. By accurately identifying intents, ParlaChat can respond appropriately or provide relevant language learning materials and exercises.
The integration of spaCy for text preprocessing is a stepping stone towards implementing a sophisticated intent recognition system. This system will eventually power the chat application's ability to offer personalized language learning experiences and support real-time conversation in Italian.

### User Input Processing Workflow
Below is a flowchart that outlines the processing pipeline of user input in ParlaChat. It demonstrates the step-by-step procedure from the moment a user enters a message to how the system processes and responds to that input.
<div align="center">
    <img src="Flowchart%20for%20user%20module.png" height="400" alt="Example Image">
</div>
<div><i>
The flowchart starts with the user input, which leads to a decision point determining whether the input is part of a conversation or a direct query. Following this, the input undergoes preprocessing steps such as stop word removal and spell checking, using NLP tools like WordNet for further processing. Depending on the processed input, the flowchart then depicts how the system either retrieves a suitable response or notifies the admin for inputs that cannot be matched with the database.
</i></div>


## Future Plans for Machine Learning Integration
The long-term vision for ParlaChat includes the development of a custom machine learning model that excels at intent recognition. This model will be trained on a dataset derived from chat interactions, leveraging the preprocessed text to understand and predict user intents with high accuracy. The goals for this integration are to:

1. Enhance the chatbot's ability to support language learning through interactive exercises tailored to the user's progress and interests.
2. Provide instant translation and contextual assistance in conversations, making language practice more engaging and effective.
3. Foster a dynamic environment where users can naturally learn and practice Italian, supported by AI-driven insights and feedback.
