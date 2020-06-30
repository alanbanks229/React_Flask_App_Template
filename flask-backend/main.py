import flask
"""
How can I send a list from python to react? 
convert it to json, then add it with 
`<script> list = {{ my_django_list_json }} </script>`
"""

app = flask.Flask("__main__")

@app.route("/")

def my_index():
    return flask.render_template("index.html", token="Helo Flask React World")

@app.route("/sup")
def sup():
    return flask.render_template("index.html", token="On the Sup Page, not really still index.html")

app.run(debug=True)