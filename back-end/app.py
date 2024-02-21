# Importing libraries
import io
import json
import cv2
import numpy as np
import requests
from dotenv import load_dotenv
import os

load_dotenv()

# Method to call OCR API
def ocr(img):    
    url_api = "https://api.ocr.space/parse/image"
    _, compressedimage = cv2.imencode(".jpg", img, [1, 90])
    file_bytes = io.BytesIO(compressedimage)

    res = requests.post(url_api,
                files = {"screenshot.jpg": file_bytes},
                data = {"apikey": os.getenv("OCR_API_KEY"),
                        "language": "eng"})
    return res
    
# Read Image  
# img_path = "./images/test-images/skin strategies.jpg"
# img = cv2.imread(img_path)

# Calling ocr
# result = ocr(img)

# Parse the response
# result = result.content.decode()
# result = json.loads(result)
# parsed_results = result.get("ParsedResults")[0]
# text_detected = parsed_results.get("ParsedText")

# print(text_detected)