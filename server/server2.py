from flask import Flask, jsonify, request

server2 = Flask(__name__)

# Dummy JSON data
dummy_data = [
    {"id": 1, "name": "Resource 1", "description": "This is resource 1"},
    {"id": 2, "name": "Resource 2", "description": "This is resource 2"},
    {"id": 3, "name": "Resource 3", "description": "This is resource 3"}
]

@server2.route('/api/resource', methods=['GET'])
def get_resource():
    return jsonify(dummy_data)

@server2.route('/api/resource', methods=['POST'])
def create_resource():
    # Logic to create resource
    pass

@server2.route('/api/resource/<id>', methods=['GET'])
def get_single_resource(id):
    # Logic to fetch a single resource by ID
    pass

@server2.route('/api/resource/<id>', methods=['PUT'])
def update_resource(id):
    # Logic to update resource
    pass

@server2.route('/api/resource/<id>', methods=['DELETE'])
def delete_resource(id):
    # Logic to delete resource
    pass


if __name__ == '__main__':
    server2.run(debug=True)


