# app.py
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('未選擇檔案')
            return redirect(url_for('upload'))

        file = request.files['file']
        if file.filename == '':
            flash('檔案名稱為空')
            return redirect(url_for('upload'))

        # 模擬辨識邏輯
        result = "Toyota Altis（2020年款）"
        return render_template('upload.html', result=result)

    return render_template('upload.html')



if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    # debug=True 方便開發自動重載
    app.run(host='0.0.0.0', port=port, debug=True)