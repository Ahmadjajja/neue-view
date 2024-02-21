from flask import Flask, jsonify, request
import requests
from app import ocr

app = Flask(__name__)


@app.route('/perform-ocr', methods=['POST'])
def perform_ocr():
    
    image = request.files['image']
    ocr_res = ocr(image)
    return jsonify({"ocr_response": ocr_res})

@app.route('/')
def hello_world():
    return jsonify({"message": "Hello world"})

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
