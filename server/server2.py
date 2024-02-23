from flask import Flask, jsonify, request
app = Flask(__name__)

dummy_data = [
    {"id": 1, "name": "Resource 1", "description": "This is resource 1"}, 
    {"id": 2, "name": "Resource 2", "description": "This is resource 2"},
    {"id": 3, "name": "Resource 3", "description": "This is resource 3"}
]

@app.route('/api/resource', methods=['GET'])
def get_resource():
    return jsonify(dummy_data)


if __name__ == '__main__':
    app.run(debug=True)


