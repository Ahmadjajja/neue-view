from flask import Flask, jsonify, request
server = Flask(__name__)

# Dummy JSON data
dummy_data = [
    {"id": 1, "name": "Resource 1", "description": "This is resource 1"},
    {"id": 2, "name": "Resource 2", "description": "This is resource 2"},
    {"id": 3, "name": "Resource 3", "description": "This is resource 3"}
]

@server.route('/api/resource', methods=['GET'])
def get_resource():
    # url = "https://ocr-extract-text.p.rapidapi.com/ocr"
    # files = {"image": open("server/images/test-images/woFFh.jpg", "rb")}
    # headers = {
    #     "X-RapidAPI-Key": "9c58f7280emsh4b53260b9986439p1b968djsnbb7497876a71",
    #     "X-RapidAPI-Host": "ocr-extract-text.p.rapidapi.com"
    # }
    # response = requests.post(url, files=files, headers=headers)
    # print(response)
    return jsonify(dummy_data)

    

# @server.route('/api/resource', methods=['POST'])
# def create_resource():
#     # Logic to create resource
#     pass

# @server.route('/api/resource/<id>', methods=['GET'])
# def get_single_resource(id):
#     # Logic to fetch a single resource by ID
#     pass

# @server.route('/api/resource/<id>', methods=['PUT'])
# def update_resource(id):
#     # Logic to update resource
#     pass

# @server.route('/api/resource/<id>', methods=['DELETE'])
# def delete_resource(id):
#     # Logic to delete resource
#     pass


if __name__ == '__main__':
    server.run(debug=True)


