from flask import Flask, jsonify, request
from flask_restx import Api,fields,Resource
from app import ocr

app = Flask(__name__)
api = Api(app)
  
ocr_req = api.model('OCR', 
{
    'image': fields.Raw(required=True, description='Image data')
})

ocr_res = api.model('OCRRes', 
{
    'ocr_res': fields.String(description='OCR response')
})

@api.route('/ocr_call')
class OCR(Resource):
    @api.expect(ocr_req)
    @api.expect(ocr_res)
    def post(self):
        img = api.payload.get('image')
        
        # Calling ocr on input image
        ocr_res = ocr(img)
            
        # Returning the results to front-end
        return jsonify(ocr_res)

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
