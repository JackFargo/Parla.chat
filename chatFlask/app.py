from flask import Flask, render_template

app = Flask(__name__)

# Home page
@app.route("/home")
def home():
    return render_template("home.html")

@app.route('/new-page')
def new_page():
    return render_template('chat.html')

if __name__ == "__main__":
    app.run(debug=True)
