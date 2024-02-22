# Importing libraries
import requests
from dotenv import load_dotenv

load_dotenv()

def ocr(img):    
    # img_path = "./images/test-images/skin strategies.jpg"
    
    url = "https://ocr-extract-text.p.rapidapi.com/ocr"
    files = { "image": open(img, "rb") }
    headers = {
        "X-RapidAPI-Key": "9c58f7280emsh4b53260b9986439p1b968djsnbb7497876a71",
        "X-RapidAPI-Host": "ocr-extract-text.p.rapidapi.com"
    }
    response = requests.post(url, files=files, headers=headers)
    
    # response = {'status': True, 'text': "Balance B/F Page # 31\n2-5-8-23 Paid Cash 3km 64\n7-8-23 Paid-Cheque UBL\n65\n7-8-23 Paid: Cheque FBL 9/8.\n66 800000\n@8450\n7-8-23 4952 kg PK-356 Rice\n480000:\n7-8-23 Pouid-Cash 100000+ MBL\n8-8-23 laid- Online mer\nMeß\n66\n10.8.23 Paid-UBL150000 & SOCED\n10-8-23 Paid- MCB' Cueqluante 66\n12.8-23 Paid- Cash.\n67\n17.8.23 Paid-Cash.\n24.8-23 Paid Cash.\n25-8-23 Paid\n25.8-23 Pad\n8-177\n65\n10 جارانی ل SP\nنان\n68\n150x100\n70\n- MCB Cheque\n255001+ 8700/40\n25-8-23 300r50 PK 356 Rize 15395kg B-183\n28-8-23 Paid\nMBL Cheque\n71\n29.8.23 Paid-Cash.\n71\n31-5-23 Paid - FBL Cheque. 72\n31-8-23 faid-Cash.\n72\nIrll\n70\n-\n800000\n300,000\n700,000\n200,000\n310900\n240000\n250000\n375000\n42.000\n275000\n-\n150000\n670000\n200.000\n700,000\n9730\n3859007\n1047010\n3350992\n3859007 R\n3059007 9.\n2559007 0\n2259007 CR\n3306017 a\n2806017 CR\n2106,017 CR\n1906017 CR\n1595117 ea\n1355 117 CR\n1823 1105, 117 42\n730117.\n688117 OR.\n413117\n3764109 CR\n3614 109 OK.\nTAA\n2944109 OF\nCA\n2744109\n2044109 OR\n2034379\nC", 'detectedLanguages': [{'languageCode': 'en', 'confidence': 0.5882004}, {'languageCode': 'cy', 'confidence': 0.029702274}, {'languageCode': 'st', 'confidence': 0.012837722}, {'languageCode': 'ckb', 'confidence': 0.011407151}], 'executionTimeMS': 431}
    # print(response.get("text"))
    return response
    
    