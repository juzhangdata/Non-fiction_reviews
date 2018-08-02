from flask import Flask, jsonify, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def test():
    import json

    with open('books.json') as data_file:    
        data = json.load(data_file)

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
